"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { message } from "antd";

import { HandleLogin } from "@/Service/API/auth/auth";
import googleLogo from "@/asset/image/login.image/googleLogo.png";
import icon_login from "@/asset/image/login.image/img.Logo.png";
import discordLogo from "@/asset/image/login.image/discordLogo.png";
import Button from "@/components/Button";
import { getCookie } from "@/utils";

const FormLogin = () => {
  const router = useRouter();
  const [formDatas, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await HandleLogin(formDatas);

      router.push("/dashboard");
      message.success(response.message);
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const jwt = getCookie("jwt");

    if (jwt) router.push("/dashboard");
  }, []);

  return (
    <>
      <div className="mb-4 mt-6 flex justify-center">
        <Image
          src={icon_login}
          alt="battlegrid logo"
          className="h-[157px] w-[239px]"
        />
      </div>
      <form onSubmit={handleSubmit}>
        {/* Email */}
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
            name="email"
            value={formDatas.email}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 text-sm text-gray-500 focus:outline-oren"
            placeholder="Your email"
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
            className="w-full rounded-md border px-3 py-2 text-sm text-gray-500 focus:outline-oren"
            name="password"
            onChange={handleChange}
            value={formDatas.password}
            placeholder="•••••••••"
            required
          />
        </div>

        <div className="flex justify-end py-2">
          <Link href={"/"}>
            <p className=" text-sm font-medium text-gray-500">
              Forgot password ?
            </p>
          </Link>
        </div>

        <Button text="Login" className="w-full bg-oren" submit={handleSubmit} />
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

export default FormLogin;
