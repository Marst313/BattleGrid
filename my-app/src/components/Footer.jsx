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

const Footer = () => {
  return (
    <footer className="  mt-20  border-t bg-abu1 py-2 text-white">
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

          <p className=" text-sm text-white/50">Home</p>
          <p className=" text-sm text-white/50">Competition</p>
          <p className=" text-sm text-white/50">About</p>
          <p className=" text-sm text-white/50">Guides</p>
        </div>

        {/* <div className="flex flex-col gap-4">
          <div className="mb-3">
            <h1 className="text-2xl">Get In Touch</h1>
          </div>
          <div className="flex gap-4">
            <a
              href="link-to-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="link-to-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="link-to-youtube" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>

          <p className="text-sm text-gray-400">Partners</p>
          <p className="text-sm text-gray-400">Contact Us</p>
        </div> */}
      </div>
      <div className="mb-4 mt-8 text-center text-sm font-bold">
        <p>© 2024 Battle Grid. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
