"use client";

import React, { useState } from "react";
import Link from "next/link";
import icon_discord from "@/asset/image/login.image/discordLogo.png";
import icon_google from "@/asset/image/login.image/googleLogo.png";


import Image from "next/image";
import CheckedRole from "./CheckedRole";
const FormRegister = () => {
  const [selectedRole, setSelectedRole] = useState("player");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <>
      <div className="mt-10 flex  gap-5">
        {/* Player */}
        <CheckedRole />
        

        {/* Creator */}
      
      </div>
      <hr className="w-full h-[1px] mx-auto my-4 bg-abu border-0 rounded md:my-10 " />
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 font-normal text-sm text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md px-3 py-2 text-gray-500 text-sm focus:outline-oren"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-6 ">
          <label
            htmlFor="password"
            className="block mb-1 font-normal text-sm text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-md px-3 py-2 text-gray-500 text-sm focus:outline-oren"
            placeholder="Your password"
            required
          />
        </div>

        <div className="mb-6 ">
          <label
            htmlFor="confirmPassword"
            className="block mb-1 font-normal text-sm text-gray-300"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="ConfirmPassword"
            className="w-full border rounded-md px-3 py-2 text-gray-500 text-sm focus:outline-oren"
            placeholder="Confirm password"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-oren text-white w-full font-bold text-sm px-4 py-3 rounded-md"
        >
          Create account
        </button>
      </form>

      <div className="py-12">
        <div className="mt-4 text-sm flex items-center ">
          <div className="flex-grow border-t border-abu mr-2"></div>
          <p className="text-center text-gray-400">Or</p>
          <div className="flex-grow border-t border-abu ml-2"></div>
        </div>
      </div>
      <div className="flex justify-center mt-2 gap-3">
        <button className="bg-discord text-white text-sm px-4 py-2 rounded-lg mr-2 w-52 font-bold">
          <div className="flex items-center justify-evenly">
            <Image src={icon_discord} className="h-6 w-6" />
            <p>Discord</p>
          </div>
        </button>
        <button className="bg-white text-hitam px-4  text-sm py-2 rounded-lg  w-52 font-bold">
          <div className="flex items-center justify-evenly">
            <Image src={icon_google} className="h-6 w-6" />
            <p>Google</p>
          </div>
        </button>
      </div>
    </>
  );
};

export default FormRegister;
