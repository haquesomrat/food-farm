import { getMeals } from "@/api/Products/getAllProducts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductContainer = async () => {
  const meals = await getMeals();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h4>Freshly arrived</h4>
        <Button>
          <Link href={"/meals"}>View All</Link>
        </Button>
      </div>
      <div>
        <ul className="grid grid-cols-4 gap-6">
          {meals.map((item) => (
            <li
              className="border p-4 col-span-4 md:col-span-2 lg:col-span-1 space-y-3"
              key={item.id}
            >
              <Image
                className="w-full"
                src={item.thumbnail}
                alt="meal thumbnail"
                height={200}
                width={163}
              />
              <h6 className="text-red-400">{item.title}</h6>
              <p className="text-sm line-clamp-4">{item.description}</p>
              <Button>
                <Link href={`/${item.id}/product-details`}>Show more</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductContainer;
