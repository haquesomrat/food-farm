"use client";
import { navItems } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Menus = () => {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((item) => (
        <Link key={item.id} href={item.link}>
          <li
            className={`px-5 py-3 uppercase hover:bg-primary/80 hover:text-white duration-300 ${
              pathname === item.link && "bg-primary text-white"
            }`}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </>
  );
};

export default Menus;
