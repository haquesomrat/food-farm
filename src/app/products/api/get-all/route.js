import { connectDb } from "@/lib/connectDb";

export const GET = async () => {
  const db = await connectDb();
  const productsCollection = db.collection("products");
  try {
    const products = await productsCollection.find().toArray();
    return Response.json({ products });
  } catch (error) {
    console.log(error);
  }
};
