// import { connectDb } from "@/lib/connectDb";

// export const GET = async () => {
//   const db = await connectDb();
//   const productsCollection = db.collection("products");
//   try {
//     await productsCollection.deleteMany();
//     const res = await productsCollection.insertMany();
//     Response.json({ message: "Seeded all products succesfully" });
//   } catch (error) {
//     console.log(error);
//   }
// };

import { connectDb } from "@/lib/connectDb";

export const GET = async () => {
  const db = await connectDb();
  const productsCollection = db.collection("products");
  try {
    // Clear the existing documents
    await productsCollection.deleteMany({});

    // Define the array of products to insert
    const products = [
      { name: "Product 1", price: 100 },
      { name: "Product 2", price: 200 },
      { name: "Product 3", price: 300 },
      // Add more products as needed
    ];

    // Insert the new documents
    await productsCollection.insertMany(products);

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Seeded all products successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Failed to seed products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
