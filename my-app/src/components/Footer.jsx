"use client";

import React from "react";
import Image from "next/image";

import icon from "@/asset/image/login.image/img.Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ className }) => {
  return (
    <footer className={` border-t bg-abu1 py-2 text-white ${className}`}>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center  gap-10 py-12 lg:flex-row ">
        <Image
          src={icon}
          alt="battlegrid logo"
          className="h-full w-32 lg:self-start"
        />

        <div className="mx-auto flex h-48 flex-col  gap-4">
          <h1 className=" text-2xl">Explore</h1>
          <p className=" text-sm text-white/50">Search Competition</p>
          <p className=" text-sm text-white/50">Create New Bracket</p>
          <p className=" text-sm text-white/50">Pricing</p>
        </div>

        <div className="mx-auto flex h-48 flex-col  gap-4 ">
          <h1 className=" text-2xl">Navigation</h1>

          <p className=" text-sm text-white/50">Home</p>
          <p className=" text-sm text-white/50">Competition</p>
          <p className=" text-sm text-white/50">About</p>
          <p className=" text-sm text-white/50">Guides</p>
        </div>

        <div className="mx-auto flex h-48 flex-col  gap-4">
          <h1 className=" text-2xl">Get In Touch</h1>

          <ul className=" flex gap-2 text-sm text-white/50">
            <li>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </a>
            </li>{" "}
            <li>
              <a href="">
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
              </a>
            </li>{" "}
            <li>
              <a href="">
                <FontAwesomeIcon icon={faYoutube} size="2xl" />
              </a>
            </li>
          </ul>
          <p className=" text-sm text-white/50">Partners</p>
          <p className=" text-sm text-white/50">Contact Us</p>
        </div>
      </div>
      <div className="mb-4 mt-8 text-center text-sm font-bold">
        <p>© 2024 Battle Grid. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
