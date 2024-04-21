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
    <footer className="  w-full border-t bg-abu1 py-2 text-white">
      <div className="">
        <div className="flex justify-evenly py-12 ">
          <Image src={icon} alt="battlegrid logo" className="h-full w-32" />

          <div className="flex flex-col gap-4">
            <div className="mb-3">
              <h1 className="text-2xl">Explore</h1>
            </div>
            <p className="text-sm text-gray-400">Search Competition</p>
            <p className="text-sm text-gray-400">Create New Bracket</p>
            <p className="text-sm text-gray-400">Pricing</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mb-3">
              {" "}
              <h1 className="text-2xl">Navigation</h1>{" "}
            </div>

            <p className="text-sm text-gray-400">Home</p>
            <p className="text-sm text-gray-400">Competition</p>
            <p className="text-sm text-gray-400">About</p>
            <p className="text-sm text-gray-400">Guides</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mb-3">
              {" "}
              <h1 className="text-2xl">Get In Touch</h1>{" "}
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
              <a
                href="link-to-youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>

            <p className="text-sm text-gray-400">Partners</p>
            <p className="text-sm text-gray-400">Contact Us</p>
          </div>
        </div>
        <div className="mb-4 mt-8 text-center text-sm">
          <p>© 2024 Battle Grid. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
