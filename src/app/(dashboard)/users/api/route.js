import { connectDb } from "@/lib/connectDb";

export async function GET() {
  const db = await connectDb();
  const userCollection = db.collection("users");
  try {
    const users = await userCollection.find().toArray();
    return Response.json({ users });
  } catch (error) {
    console.log(error);
  }
}
