"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const path = usePathname();

  return (
    <div>
      {" "}
      <div className="flex gap-10 ">
        <Link href={"/"}>
          <p
            className={`${
              path === "/"
                ? "font-semibold border-b-2 border-oren w-fit text-center"
                : "text-gray-300 font-light"
            }`}
          >
            Home
          </p>
        </Link>

        <Link href={"/competition"}>
          <div
            className={`${
              path === "/competition" 
                ? "font-semibold border-b-2 border-oren w-fit text-center"
                : "text-gray-300 font-light"
            } flex items-center gap-2`}
          >
            <p>Competition</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </Link>

        <Link href={"/guide"}>
          <p
            className={`${
              path === "/guide"
                ? "font-semibold border-b-2 border-oren w-fit text-center"
                : "text-gray-300 font-light"
            }`}
          >
            Guide
          </p>
        </Link>

        <Link href={"/about"}>
          <p
            className={`${
              path === "/about"
                ? "font-semibold border-b-2 border-oren w-fit text-center"
                : "text-gray-300 font-light"
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
