import React from "react";
import discordLogo from "@/asset/image/login.image/discordLogo.png";
import googleLogo from "@/asset/image/login.image/googleLogo.png";
import icon_login from "@/asset/image/login.image/img.Logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const FormLogin = () => {
  return (
    <>
      <div className="mb-4 mt-6 flex justify-center">
        <Image src={icon_login} className="h-[157px] w-[239px]" />
      </div>
      <form>
        {/* Email */}
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
            className="w-full border rounded-md px-3 py-2 text-gray-500 text-sm focus:outline-oren"
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

        <Button text="Login" className="w-full bg-oren" />
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
