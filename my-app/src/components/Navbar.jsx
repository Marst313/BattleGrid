"use client";
import Image from "next/image";

import icon from "@/asset/image/login.image/img.Logo.png";
import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
const Navbar = () => {
  const navbarRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);

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

  const handleNavbar = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="absolute top-0 z-10 w-full bg-abu1 p-2" ref={navbarRef}>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between ">
        {/* Logo BattleGrid */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={icon} className="w-24" alt="battlegrid logo" />
        </Link>

        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <div className="hidden items-center gap-5 md:flex">
            <Link href={"/login"}>
              <p className="rounded-md border-2 border-oren bg-oren px-4 py-1 transition-all hover:bg-opacity-80">
                Sign In
              </p>
            </Link>
            <Link
              href={"/register"}
              className="rounded-md border-2 border-oren px-4 py-1 transition-all hover:bg-oren/80"
            >
              Sign Up
            </Link>
          </div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white hover:scale-105 focus:outline-none md:hidden">
            <span className="sr-only">Open main menu</span>
            <input type="checkbox" id="checkbox" onClick={handleNavbar} />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1" />
              <div className="bars" id="bar2" />
              <div className="bars" id="bar3" />
            </label>
          </div>
        </div>

        {/* Mobile View */}
        <div
          className={`${openNav ? "block opacity-100" : "hidden opacity-0"} absolute right-5 top-0 z-10 mt-16 h-96 w-96 rounded-lg border-2 border-abu2 bg-abu shadow-xl transition-all md:hidden`}
        >
          <Menu />
        </div>

        {/* Menu  */}
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
