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
      <hr className="mx-auto my-4 h-[1px] w-full rounded border-0 bg-abu md:my-10 " />
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-normal text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border px-3 py-2 text-sm text-gray-500 focus:outline-oren"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-6 ">
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-normal text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border px-3 py-2 text-sm text-gray-500 focus:outline-oren"
            placeholder="Your password"
            required
          />
        </div>

        <div className="mb-6 ">
          <label
            htmlFor="confirmPassword"
            className="mb-1 block text-sm font-normal text-gray-300"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="ConfirmPassword"
            className="w-full rounded-md border px-3 py-2 text-sm text-gray-500 focus:outline-oren"
            placeholder="Confirm password"
            required
          />
        </div>

        <Button
          text="Create account"
          className="mt-10 w-full bg-oren  text-white hover:bg-oren2 "
        />
      </form>

      {/* Divider */}
      <div className="mt-5 flex w-full items-center justify-between">
        <hr className="w-[45%]" />
        <p>Or</p>
        <hr className="w-[45%]" />
      </div>

      {/* Social Login*/}
      <div className="mt-5 flex w-full justify-center gap-10 font-bold">
        {/* Discord Button */}

        <Button
          src={discordLogo}
          alt="discord logo"
          text="Discord"
          className="w-56 bg-discord text-white"
        />

        {/* Google Button */}

        <Button
          src={googleLogo}
          alt="google logo"
          text="Google"
          className="w-56 bg-white text-abu"
        />
      </div>
    </>
  );
};

export default FormRegister;
