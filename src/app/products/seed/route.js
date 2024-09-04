import { connectDb } from "@/lib/connectDb";

export const GET = async () => {
  const db = await connectDb();
  const productsCollection = db.collection("products");
  try {
    await productsCollection.deleteMany();
    const res = await productsCollection.insertMany();
    Response.json({ message: "Seeded all products succesfully" });
  } catch (error) {
    console.log(error);
  }
};
