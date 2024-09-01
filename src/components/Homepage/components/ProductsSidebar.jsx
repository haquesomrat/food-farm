import { categories } from "@/lib/data";
import React from "react";

const ProductsSidebar = () => {
  return (
    <div>
      <h1 className="py-2.5 text-xs uppercase tracking-[.5rem] text-[#999999] leading-[2.5rem] mb-2.5">
        Categories
      </h1>
      <ul className="space-y-2.5">
        {categories.map((category) => (
          <li
            className="flex items-center gap-2.5 p-2.5 border-b border-dashed text-sm md:text-base"
            key={category.id}
          >
            {category.icon}
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsSidebar;
