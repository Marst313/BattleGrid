"use client";

import React, { useEffect, useState } from "react";

import icon_discord from "@/asset/image/login.image/discordLogo.png";
import icon_google from "@/asset/image/login.image/googleLogo.png";

import CheckedRole from "./CheckedRole";
import { message } from "antd";
import { HandleRegister } from "@/Service/API/auth/auth";
import { getCookie, getCookies } from "@/utils";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useCookies } from "react-cookie";
const FormRegister = () => {
  const router = useRouter();
  const [isActivePlayer, setIsActivePlayer] = useState(true); // Mengatur default ke Player
  const [isActiveCreator, setIsActiveCreator] = useState(false);
  const [selectedRole, setSelectedRole] = useState("USER");
  const [formDatas, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: selectedRole,
  });
  const [jwt] = useCookies()
  console.log(jwt)

  const setSelectedRoleAndFormData = (role) => {
    setSelectedRole(role);
    setFormData({
      ...formDatas,
      role: role,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await HandleRegister(formDatas);
      message.success(response.message);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      });

      router.push("/dashboard");
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
   

    if (jwt) router.push("/dashboard");
  }, []);

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
      <form onSubmit={handleSubmit}>
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
          className="w-full rounded-md bg-oren px-4 py-3 text-sm font-bold text-white"
        >
          Create account
        </button>
      </form>

      <div className="mt-5 flex w-full items-center justify-between">
        <hr className="w-[45%]" />
        <p>Or</p>
        <hr className="w-[45%]" />
      </div>

      <div className="mt-5 flex w-full justify-center gap-10 font-bold">
        {/* Discord Button */}

        <Button
          src={icon_discord}
          alt="discord logo"
          text="Discord"
          className="w-56 bg-discord text-white"
        />

        {/* Google Button */}

        <Button
          src={icon_google}
          alt="google logo"
          text="Google"
          className="w-56 bg-white text-abu"
        />
      </div>
    </>
  );
};

export default FormRegister;
