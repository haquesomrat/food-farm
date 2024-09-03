import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IndentDecrease, Search } from "lucide-react";
import Link from "next/link";
import Menus from "./Menus";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="max-w-[1390px] mx-auto">
        <div className="px-4 py-4 lg:py-8 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                height={48}
                width={244}
                className="aspec-[48/244] w-full h-auto"
                src="/images/logo-head.png"
                alt="img"
              />
            </Link>
          </div>

          <div className="w-full max-w-xs lg:max-w-[500px] xl:max-w-[730px] bg-gray-100 rounded-md hidden lg:flex items-center border overflow-hidden">
            <select
              className="bg-transparent text-base mr-4 focus-visible:outline-none px-5 py-2.5"
              name="categories"
              id=""
              title="categories"
            >
              <option>All categories</option>
              <option>Groceries</option>
              <option>Drinks</option>
              <option>Chocolates</option>
            </select>
            <Input
              className=" border-none focus-visible:ring-0 bg-transparent font-semibold text-sm h-9 py-1.5 px-3 w-full"
              type="text"
              placeholder="Search for more than 20,000 products"
            />
            <Button
              variant="outline"
              className="bg-primary hover:bg-primary/80 hover:text-white rounded-none uppercase text-white py-[22px] px-7 border-none"
            >
              Search
            </Button>
          </div>

          <nav className="hidden lg:block">
            <ul className="xl:w-48 flex items-center justify-end">
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200">
                <ProfileDropdown />
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block p-2  hover:scale-110 duration-200">
                <a className="" href="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 16.09V11.098C21 6.808 21 4.665 19.682 3.332C18.364 2 16.242 2 12 2C7.757 2 5.636 2 4.318 3.332C3 4.665 3 6.81 3 11.098V16.091C3 19.187 3 20.736 3.734 21.412C4.084 21.735 4.526 21.938 4.997 21.992C5.984 22.105 7.137 21.085 9.442 19.046C10.462 18.145 10.971 17.694 11.56 17.576C11.85 17.516 12.15 17.516 12.44 17.576C13.03 17.694 13.539 18.145 14.558 19.046C16.863 21.085 18.016 22.105 19.003 21.991C19.473 21.938 19.916 21.735 20.266 21.412C21 20.736 21 19.187 21 16.09Z"
                      stroke="#060809"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15 6H9"
                      stroke="#060809"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block p-2  hover:scale-110 duration-200">
                <a className="" href="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.86403 16.455C3.00603 13.023 2.57703 11.308 3.47803 10.154C4.37803 9 6.14803 9 9.68503 9H14.315C17.853 9 19.621 9 20.522 10.154C21.423 11.307 20.994 13.024 20.136 16.455C19.59 18.638 19.318 19.729 18.504 20.365C17.69 21 16.565 21 14.315 21H9.68503C7.43503 21 6.31003 21 5.49603 20.365C4.68203 19.729 4.40903 18.638 3.86403 16.455Z"
                      stroke="#060809"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M19.5 9.5L18.79 6.895C18.516 5.89 18.379 5.388 18.098 5.009C17.8178 4.63246 17.4373 4.3424 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5L5.21 6.895C5.484 5.89 5.621 5.388 5.902 5.009C6.18218 4.63246 6.56269 4.3424 7 4.172C7.44 4 7.96 4 9 4"
                      stroke="#060809"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5H10C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4Z"
                      stroke="#060809"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 13V17M16 13V17M12 13V17"
                      stroke="#060809"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- cart count --> */}
          {/* <div className="ml-4 hidden sm:flex flex-col font-bold">
            <span className="text-xs text-gray-400">Your Cart</span>
            <span>$2,650,59</span>
          </div> */}

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <IndentDecrease className="size-8" />
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col justify-center my-5">
                  <Menus />
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <hr className="m-0 hidden lg:block" />
        <div className="flex justify-center">
          <ul className="hidden lg:flex justify-center">
            <Menus />
          </ul>
          <nav className="contents lg:hidden">
            <ul className="flex items-center justify-end gap-2 pb-4">
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200">
                <ProfileDropdown />
              </li>
              <li className="relative inline-block p-2  hover:scale-110 duration-200">
                <a className="" href="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 16.09V11.098C21 6.808 21 4.665 19.682 3.332C18.364 2 16.242 2 12 2C7.757 2 5.636 2 4.318 3.332C3 4.665 3 6.81 3 11.098V16.091C3 19.187 3 20.736 3.734 21.412C4.084 21.735 4.526 21.938 4.997 21.992C5.984 22.105 7.137 21.085 9.442 19.046C10.462 18.145 10.971 17.694 11.56 17.576C11.85 17.516 12.15 17.516 12.44 17.576C13.03 17.694 13.539 18.145 14.558 19.046C16.863 21.085 18.016 22.105 19.003 21.991C19.473 21.938 19.916 21.735 20.266 21.412C21 20.736 21 19.187 21 16.09Z"
                      stroke="#060809"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15 6H9"
                      stroke="#060809"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="relative inline-block p-2  hover:scale-110 duration-200">
                <a className="" href="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.86403 16.455C3.00603 13.023 2.57703 11.308 3.47803 10.154C4.37803 9 6.14803 9 9.68503 9H14.315C17.853 9 19.621 9 20.522 10.154C21.423 11.307 20.994 13.024 20.136 16.455C19.59 18.638 19.318 19.729 18.504 20.365C17.69 21 16.565 21 14.315 21H9.68503C7.43503 21 6.31003 21 5.49603 20.365C4.68203 19.729 4.40903 18.638 3.86403 16.455Z"
                      stroke="#060809"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M19.5 9.5L18.79 6.895C18.516 5.89 18.379 5.388 18.098 5.009C17.8178 4.63246 17.4373 4.3424 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5L5.21 6.895C5.484 5.89 5.621 5.388 5.902 5.009C6.18218 4.63246 6.56269 4.3424 7 4.172C7.44 4 7.96 4 9 4"
                      stroke="#060809"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5H10C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4Z"
                      stroke="#060809"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 13V17M16 13V17M12 13V17"
                      stroke="#060809"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="relative inline-block p-2  hover:scale-110 duration-200">
                <a className="" href="">
                  <Search />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
