// GET API

export async function GET() {
  return Response.json(products, {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}

// POST API
export async function POST(request) {
  const newProduct = await request.json();
  products.push({
    id: products.length + 1,
    title: newProduct.title,
    description: newProduct.description,
  });
  return Response.json({
    message: "New product added successfully",
    products,
  });
}

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
  },
];
