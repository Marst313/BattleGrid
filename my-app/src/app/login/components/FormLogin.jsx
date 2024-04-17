import React from "react";
import icon_discord from "@/asset/image/login.image/discordLogo.png";
import icon_google from "@/asset/image/login.image/googleLogo.png";
import icon_login from "@/asset/image/login.image/img.Logo.png";
import Image from "next/image";
import Link from "next/link";

const FormLogin = () => {
  return (
    <>
      <div className="mb-4 mt-6 flex justify-center">
        <Image src={icon_login} className="h-[157px] w-[239px]" />
      </div>
      <form>
        {/* Email */}
        <div className="mb-6">
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

        <div className="flex justify-end py-2">
          <Link href={"/"}>
            <p className=" text-sm font-medium text-gray-500">
              Forgot password ?
            </p>
          </Link>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-oren px-4 py-3 text-sm font-bold text-white"
        >
          Login
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

export default FormLogin;
