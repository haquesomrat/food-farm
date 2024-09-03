import React from "react";
import CategoriesList from "./CategoriesList";

const ProductsSidebar = () => {
  return (
    <div>
      <h1 className="py-2.5 text-xs uppercase tracking-[.5rem] text-[#999999] leading-[2.5rem] mb-2.5">
        Categories
      </h1>
      <ul className="space-y-2.5">
        <CategoriesList />
      </ul>
    </div>
  );
};

export default ProductsSidebar;
