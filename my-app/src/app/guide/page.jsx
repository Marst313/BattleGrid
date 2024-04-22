import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import bg from "@/asset/image/Main.image/Background.png";
import Tab from "./components/Tab";
import Footer from "@/components/Footer";
const Guide = () => {
  return (
    <main>
      <Navbar />
      <Tab />
      <Footer />
    </main>
  );
};

export default Guide;
