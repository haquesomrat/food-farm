import { categories } from "@/lib/data";
import Link from "next/link";
import React from "react";

const CategoriesList = () => {
  return (
    <>
      {categories.map((category) => (
        <Link key={category.id} href={"#"}>
          <li className="flex items-center gap-2.5 p-2.5 border-b border-dashed text-sm md:text-base hover:bg-primary hover:text-white hover:fill-white">
            {category.icon}
            {category.name}
          </li>
        </Link>
      ))}
    </>
  );
};

export default CategoriesList;
