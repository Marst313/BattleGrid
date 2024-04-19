"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import DropdownCompetition from "./DropdownCompetition";

const Menu = () => {
  const path = usePathname();

  return (
    <div>
      {" "}
      <div className="flex items-center gap-10">
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

        <DropdownCompetition />

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
      </div>
    </div>
  );
};

export default Menu;
