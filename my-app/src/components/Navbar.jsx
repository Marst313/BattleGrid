"use client";
import Image from "next/image";

import icon from "@/asset/image/login.image/img.Logo.png";
import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window === undefined) return;
    const fixedNav = navbarRef.current.offsetTop;

    if (window.pageYOffset > fixedNav) {
      navbarRef.current.classList.add("fixed-navbar");
    } else {
      navbarRef.current.classList.remove("fixed-navbar");
    }
  };
  return (
    <nav
      className={`absolute top-0 flex w-full items-center justify-between bg-abu1 px-60 py-2 `}
      ref={navbarRef}
    >
      <Link href="/">
        <Image src={icon} className=" w-24" alt="battlegrid logo" />
      </Link>
      <Menu />

      <div className="flex items-center gap-8">
        <Link href={"/login"}>
          <p className="rounded-md bg-oren px-4 py-1">Sign In</p>
        </Link>
        <Link
          href={"/register"}
          className="rounded-md border-2 border-oren px-4 py-1"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
