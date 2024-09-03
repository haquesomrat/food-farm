// PATCH API
export async function PATCH(request, { params }) {
  const body = await request.json();
  const index = products.findIndex(
    (product) => product.id === parseInt(params.id)
  );
  products[index] = {
    id: params.id,
    title: body.title,
  };
  return Response.json({
    message: `${params.id} updated successfully`,
    products,
  });
}

// DELETE API
export async function DELETE(request, { params }) {
  const newProducts = products.filter(
    (product) => product.id !== parseInt(params.id)
  );
  return Response.json({
    message: `${params.id} deleted successfully`,
    newProducts,
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
