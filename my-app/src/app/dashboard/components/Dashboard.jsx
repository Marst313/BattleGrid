"use client";

import { getCookies } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  // Gunakan useSelector untuk memilih bagian tertentu dari state Redux
  const { role, email, name } = useSelector((state) => state.user); // Ganti 'user' dengan nama slice Anda
  const route = useRouter();
  useEffect(() => {
    const token = getCookies("jwt");

    if (!token) {
      route.push("/login");
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Role: {role}</p>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default Dashboard;
