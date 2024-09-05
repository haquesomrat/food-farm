import { connectDb } from "@/lib/connectDb";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDb();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser?.email });
    if (exist) {
      return Response.json({ message: "User Already Exists" }, { status: 304 });
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return Response.json({ message: "user created" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: `Something went wrong`, error },
      { status: 500 }
    );
  }
};
