"use client";

import React from "react";
import icon_discord from "@/asset/image/login.image/mingcute_discord-line.png";
import icon_google from "@/asset/image/login.image/devicon_google.png";
import icon_login from "@/asset/image/login.image/img.Logo.png";
import Image from "next/image";
import Link from "next/link";
import Loginbanner from "./Banner";
const Login = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-evenly ">
        <div>
          <Loginbanner />
        </div>

        <div className="w-[40%] pr-32">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <div className="flex gap-2 items-center">
            <h1 className="text-sm text-gray-400">Dont have an account ?</h1>
            <p className="text-base">Register</p>
          </div>

          <div className="flex justify-center mt-6 mb-4">
            <Image src={icon_login} className="h-[157px] w-[239px]" />
          </div>
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

            <div className="flex justify-end py-2">
              <Link href={"/"}>
                <p className=" text-sm text-gray-500 font-medium">
                  Forgot password ?
                </p>
              </Link>
            </div>
            <button
              type="submit"
              className="bg-oren text-white w-full font-bold text-sm px-4 py-3 rounded-md"
            >
              Login
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
        </div>
      </div>
    </div>
  );
};

export default Login;
