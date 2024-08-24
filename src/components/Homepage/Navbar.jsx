import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header class="bg-white">
      <div class="max-w-[1390px] mx-auto px-4 py-8 flex items-center justify-between">
        <div class="md:w-48 flex-shrink-0">
          <Image
            height={48}
            width={244}
            class="aspec-[48/244] w-[200px] h-auto"
            src="/images/logo-head.png"
            alt="img"
          />
        </div>

        <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
          <select
            class="bg-transparent uppercase font-bold text-sm p-4 mr-4"
            name=""
            id=""
          >
            <option>all categories</option>
          </select>
          <Input
            class=" border-gray-300 bg-transparent font-semibold text-sm w-full h-9 py-1.5 px-3"
            type="text"
            placeholder="Search for more than 20,000 products"
          />
          <svg
            class="ml-auto h-5 px-4 text-gray-500"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
            ></path>
          </svg>
          {/* <Button variant="outline" className="bg-primary w-full min-h-full">
            Search
          </Button> */}
        </div>

        {/* <div class="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
          <span class="font-bold md:text-xl">8 800 332 65-66</span>
          <span class="font-semibold text-sm text-gray-400">Support 24/7</span>
        </div> */}

        <nav class="contents">
          <ul class="ml-4 xl:w-48 flex items-center justify-end">
            <li class="ml-2 lg:ml-4 relative inline-block p-2">
              <a class="" href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                    stroke="#060809"
                    stroke-width="1.5"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#060809"
                    stroke-width="1.5"
                  />
                  <path
                    d="M17.97 20C17.81 17.108 16.925 15 12 15C7.07503 15 6.19003 17.108 6.03003 20"
                    stroke="#060809"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-2 lg:ml-4 relative inline-block p-2">
              <a class="" href="">
                {/* <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  3
                </div> */}
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
                    stroke-width="1.5"
                  />
                  <path
                    d="M15 6H9"
                    stroke="#060809"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-2 lg:ml-4 relative inline-block p-2">
              <a class="" href="">
                {/* <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  12
                </div> */}
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
                    stroke-width="1.5"
                  />
                  <path
                    d="M19.5 9.5L18.79 6.895C18.516 5.89 18.379 5.388 18.098 5.009C17.8178 4.63246 17.4373 4.3424 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5L5.21 6.895C5.484 5.89 5.621 5.388 5.902 5.009C6.18218 4.63246 6.56269 4.3424 7 4.172C7.44 4 7.96 4 9 4"
                    stroke="#060809"
                    stroke-width="1.5"
                  />
                  <path
                    d="M9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5H10C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4Z"
                    stroke="#060809"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8 13V17M16 13V17M12 13V17"
                    stroke="#060809"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- cart count --> */}
        {/* <div class="ml-4 hidden sm:flex flex-col font-bold">
          <span class="text-xs text-gray-400">Your Cart</span>
          <span>$2,650,59</span>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
