"use client";

import { getCookie } from "@/utils";
import React from "react";

const Dashboard = () => {
  const jwt = getCookie("jwt");

  return <div>Hello from dashboard</div>;
};

export default Dashboard;
