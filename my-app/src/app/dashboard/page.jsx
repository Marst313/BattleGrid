
"use client"
import { getCookie } from "@/utils";
import React from "react";
import Dashboard from "./components/Dashboard";


const page = () => {
  const get = getCookie("jwt")
  console.log(get)
  return (
    <section className="flex w-full">
      <Dashboard />
    </section>
  );
};

export default page;
