"use client";

import React from "react";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const HeroCarousel = () => {
  return (
    <>
      <Splide
        aria-label="My Favorite Images"
        options={{
          width: "100%", // Responsive width
          gap: "1rem",
          arrows: false,
          type: "loop",
        }}
      >
        <SplideSlide>
          <div>
            <Image
              className="w-full h-auto object-cover aspect-square lg:aspect-[1600/594]"
              src="/images/hero/hero-one.png"
              alt="Image 1"
              height={594}
              width={1600}
              priority
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <Image
              className="w-full h-auto object-cover aspect-square lg:aspect-[1600/594]"
              src="/images/hero/hero-two.png"
              alt="Image 2"
              height={594}
              width={1600}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <Image
              className="w-full h-auto object-cover aspect-square lg:aspect-[1600/594]"
              src="/images/hero/hero-three.png"
              alt="Image 3"
              height={594}
              width={1600}
            />
          </div>
        </SplideSlide>
      </Splide>
    </>
  );
};

export default HeroCarousel;
