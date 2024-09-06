import { connectDb } from "@/lib/connectDb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

const connectToDatabase = async () => {
  if (!global.mongoClient) {
    global.mongoClient = await connectDb();
  }
  return global.mongoClient;
};

const handler = NextAuth({
  session: {
    strategy: "jwt",
    encryption: true,
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;

        try {
          const db = await connectToDatabase();
          const user = await db.collection("users").findOne({ email });

          if (!user || !bcrypt.compareSync(password, user.password))
            return null;
          return user;
        } catch (error) {
          console.error("Error authorizing credentials:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        try {
          const db = await connectToDatabase();
          const userCollection = db.collection("users");
          const existingUser = await userCollection.findOne({
            email: user.email,
          });

          if (!existingUser) {
            user.role = "user";
            await userCollection.insertOne(user);
          }
          return true;
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.role = user.role;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.image = token.image;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
