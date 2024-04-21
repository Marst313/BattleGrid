"use client"
import React from "react";
import Dashboard from "./components/Dashboard";
import { getCookies } from "@/utils";


const page = () => {
  const jwt = getCookies("jwt")
  console.log(jwt)
  var allcookies = document.cookie;
  var arrayb = allcookies.split(";");
  console.log(allcookies)
  return (
    <section className="flex w-full">

      <Dashboard />
    </section>
  );
};

export default page;
