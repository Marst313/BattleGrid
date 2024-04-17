"use client";

import React, { useEffect, useState } from "react";

import icon_discord from "@/asset/image/login.image/discordLogo.png";
import icon_google from "@/asset/image/login.image/googleLogo.png";

import Image from "next/image";
import CheckedRole from "./CheckedRole";
import { message } from "antd";
import { HandleRegister } from "@/Service/API/auth/auth";
const FormRegister = () => {
  const [isActivePlayer, setIsActivePlayer] = useState(true); // Mengatur default ke Player
  const [isActiveCreator, setIsActiveCreator] = useState(false);
  const [selectedRole, setSelectedRole] = useState("player");
  const [formDatas, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: selectedRole, // Set nilai awal role ke selectedRole
  });

  const setSelectedRoleAndFormData = (role) => {
    setSelectedRole(role);
    setFormData({
      ...formDatas,
      role: role,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formDatas.password !== formDatas.confirmPassword) {
      message.info("password do not match")
      return; // Prevent form submission
    }

    try {

      const response = await HandleRegister(formDatas);



      console.log("Email:", formDatas.email);
      console.log("Password:", formDatas.password);
      console.log("Confirm Password:", formDatas.confirmPassword);
      console.log("Selected Role:", selectedRole);

      message.success("Registrasi berhasil")
      
    } catch (error) {
      
    }

    // Mendapatkan nilai dari FormData

    // Di sini Anda dapat menambahkan logika untuk mengirim data ke backend
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="mt-10 flex  gap-5">
        <CheckedRole
          isActiveCreator={isActiveCreator}
          isActivePlayer={isActivePlayer}
          setIsActiveCreator={setIsActiveCreator}
          setIsActivePlayer={setIsActivePlayer}
          setSelectedRole={setSelectedRoleAndFormData}
          selectedRole={selectedRole}
        />
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
            name="email"
            id="email"
            value={formDatas.email}
            onChange={handleChange}
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
            name="password"
            id="password"
            value={formDatas.password}
            onChange={handleChange}
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
            name="confirmPassword"
            id="ConfirmPassword"
            value={formDatas.confirmPassword}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 text-sm text-gray-500 focus:outline-oren"
            placeholder="Confirm password"
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full rounded-md bg-oren px-4 py-3 text-sm font-bold text-white"
        >
          Create account
        </button>
      </form>

      <div className="py-12">
        <div className="mt-4 flex items-center text-sm ">
          <div className="mr-2 flex-grow border-t border-abu"></div>
          <p className="text-center text-gray-400">Or</p>
          <div className="ml-2 flex-grow border-t border-abu"></div>
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-3">
        <button className="mr-2 w-52 rounded-lg bg-discord px-4 py-2 text-sm font-bold text-white">
          <div className="flex items-center justify-evenly">
            <Image src={icon_discord} className="h-6 w-6" />
            <p>Discord</p>
          </div>
        </button>
        <button className="w-52 rounded-lg bg-white  px-4 py-2 text-sm  font-bold text-hitam">
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
