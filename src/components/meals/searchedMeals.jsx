"use client";
import React, { useEffect, useState } from "react";
import ProductContainer from "../Homepage/components/ProductContainer";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const SearchedMeals = () => {
  const [search, setSearch] = useState("phone");
  const [meals, setMeals] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.search.value);
  };

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const data = await res.json();
      setMeals(data.products);
    };
    loadData();
  }, [search]);

  return (
    <div>
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <input
            className="border px-4 py-2"
            type="text"
            placeholder="Search foods"
            name="search"
            onChange={handleInput}
          />
          <button
            type="submit"
            className="border px-4 py-2 bg-primary text-white"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <h6 className="my-4 lg:text-xl text-primary">
          Meal found: {meals?.length}
        </h6>
        <div className="grid grid-cols-4 gap-6">
          {meals.map((item) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchedMeals;
