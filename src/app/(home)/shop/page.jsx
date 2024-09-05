import Navbar from "@/components/global/Navbar";
import SearchedMeals from "@/components/meals/searchedMeals";
import React from "react";

const MealsPage = () => {
  return (
    <div className="max-w-[1390px] mx-auto ">
      <Navbar />
      <div className="py-8 lg:py-16 px-4">
        <SearchedMeals />
      </div>
    </div>
  );
};

export default MealsPage;
