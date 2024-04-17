"use client";

import Image from "next/image";
import React, { useState } from "react";

import discordLogo from "@/asset/image/login.image/discordLogo.png";
import googleLogo from "@/asset/image/login.image/googleLogo.png";
import Button from "@/components/Button";

const FormRegister = () => {
  const [selectedRole, setSelectedRole] = useState("player");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <>
      <div className="mt-10 flex  gap-5">
        {/* Player */}
        <div
          className={`flex items-center border ps-4 ${selectedRole === "player" ? "border-oren text-oren" : "border-white/80"} w-full cursor-pointer rounded `}
        >
          <input
            id="role-1"
            type="radio"
            name="bordered-radio"
            value="player"
            className="h-4 w-4 text-oren focus:ring-oren2  "
            checked={selectedRole === "player"}
            onChange={handleRoleChange}
          />
          <label
            htmlFor="role-1"
            className="ms-2 w-full cursor-pointer py-4 text-sm font-medium"
          >
            Player
          </label>
        </div>

        {/* Creator */}
        <div
          className={`flex items-center border ps-4 ${selectedRole === "creator" ? "border-oren text-oren" : "border-white/80"} w-full rounded`}
        >
          <input
            id="role-2"
            type="radio"
            name="bordered-radio"
            value="creator"
            className="h-4 w-4 text-oren focus:ring-oren2"
            checked={selectedRole === "creator"}
            onChange={handleRoleChange}
          />
          <label
            htmlFor="role-2"
            className="ms-2 w-full cursor-pointer py-4 text-sm font-medium"
          >
            Tournament Creator
          </label>
        </div>
      </div>

      <hr className="mx-auto my-4 h-[1px] w-full rounded border-0 bg-abu md:my-10 " />

      <form>
        <div className="mb-6">
          {/* Email */}
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-md bg-white p-2.5 text-sm text-abu1 placeholder-gray-400 ring-2 ring-oren focus:bg-gray-700 focus:text-white focus:outline-none focus:ring-white"
            placeholder="user@gmail.com"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full rounded-md bg-white p-2.5 text-sm text-abu1 placeholder-gray-400 ring-2 ring-oren focus:bg-gray-700 focus:text-white focus:outline-none focus:ring-white"
            placeholder="•••••••••"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            className="block w-full rounded-md bg-white p-2.5 text-sm text-abu1 placeholder-gray-400 ring-2 ring-oren focus:bg-gray-700 focus:text-white focus:outline-none focus:ring-white"
            placeholder="•••••••••"
            required
          />
        </div>

        <Button
          text="Create account"
          className="mt-10 w-full bg-oren  text-white hover:bg-oren2 sm:w-auto"
        />
      </form>

      {/* Social Login*/}
      <div className="mt-5 flex w-full items-center justify-between">
        <hr className="w-[45%]" />
        <p>Or</p>
        <hr className="w-[45%]" />
      </div>

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
