"use client"
import React from "react";
import Dashboard from "./components/Dashboard";
import { getCookies } from "@/utils";
import { useCookies } from "react-cookie";


const page = () => {
  const jwt = getCookies("seru")
  const [cookies] = useCookies()
  console.log(cookies)
  console.log(jwt)
 
  return (
    <section className="flex w-full">

      <Dashboard />
    </section>
  );
};

export default page;
