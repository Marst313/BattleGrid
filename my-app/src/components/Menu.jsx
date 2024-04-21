"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import DropdownCompetition from "./DropdownCompetition";

const Menu = () => {
  const path = usePathname();

  return (
    <ul className="relative mt-20 flex flex-col items-center gap-10 md:mt-0 md:flex-row">
      <li>
        <Link href={"/"}>
          <p
            className={`${
              path === "/"
                ? "w-fit border-b-2 border-oren text-center font-semibold"
                : "font-light text-gray-300"
            }`}
          >
            Home
          </p>
        </Link>
      </li>

      <li>
        <DropdownCompetition />
      </li>

      <li>
        <Link href={"/guide"}>
          <p
            className={`${
              path === "/guide"
                ? "w-fit border-b-2 border-oren text-center font-semibold"
                : "font-light text-gray-300"
            }`}
          >
            Guide
          </p>
        </Link>
      </li>

      <li>
        <Link href={"/about"}>
          <p
            className={`${
              path === "/about"
                ? "w-fit border-b-2 border-oren text-center font-semibold"
                : "font-light text-gray-300"
            }`}
          >
            About
          </p>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
