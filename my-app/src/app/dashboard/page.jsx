
"use client"
import { getCookie } from "@/utils";
import React from "react";


const page = () => {
  const get = getCookie("jwt")
  console.log(get)
  return (
    <div>
      <h1>Hello from the dashboard</h1>
    </div>
  );
};

export default page;
