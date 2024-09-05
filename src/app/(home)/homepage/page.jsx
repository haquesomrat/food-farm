import Navbar from "@/components/global/Navbar";
import Hero from "@/components/Homepage/Hero";
import Products from "@/components/Homepage/Products";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
};

export default Homepage;
