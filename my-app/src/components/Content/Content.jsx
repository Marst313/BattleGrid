"use client";
import React from "react";
import Footer from "../Footer";
import Image from "next/image";
import bg from "@/asset/image/Main.image/Background.png";
import OnBoarding from "./OnBoarding";
import bracket from "@/asset/image/Onboarding.image/Bracket.png";

import Section from "./Section/Section";

const Content = () => {
  return (
    <div className="relative h-dvh">
      <div className="absolute inset-0 z-10  ">
        <div className="flex justify-center py-12">
          <OnBoarding />
          <Image src={bracket} className=" w-auto pr-4"></Image>
        </div>
        <Section />
      </div>

      <Image
        src={bg}
        alt="Background Image"
        className="h-fit w-full object-cover"
      />

      <Footer />
    </div>
  );
};

export default Content;
