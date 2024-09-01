import { getMeals } from "@/api/Products/getAllProducts";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const allMeals = await getMeals();

  const singleMeal = allMeals.find((item) => {
    if (item.id == params.id) {
      return item;
    }
  });

  // console.log(singleMeal);

  return <div>Meal Name :{singleMeal?.title}</div>;
};

export default ProductDetailsPage;
