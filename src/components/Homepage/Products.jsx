import React from "react";
import ProductsSidebar from "./ProductsSidebar";
import ProductContainer from "./ProductContainer";

const Products = () => {
  return (
    <div className="max-w-[1390px] mx-auto py-8 lg:py-16 px-4">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="basis-4/12 lg:basis-3/12">
          <ProductsSidebar />
        </div>
        <div className="flex-1">
          <ProductContainer />
        </div>
      </div>
    </div>
  );
};

export default Products;
