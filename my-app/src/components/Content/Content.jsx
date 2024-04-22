"use client";
import React from "react";
import Footer from "../Footer";
import Image from "next/image";
import bg from "@/asset/image/Main.image/Background.png";
import bracket from "@/asset/image/Onboarding.image/bracket.png";

import Section from "./Section/Section";
import CardBracket from "./CardBracket";
import { CarouselMain } from "./CarouselMain";
import { useCookies } from "react-cookie";

const Content = () => {
  const [cookies] = useCookies(['user'])
  console.log(cookies)
  return (
    <div>
      <div className="absolute inset-0">
        <div className="mx-auto mt-20 flex max-w-screen-xl flex-col justify-between gap-5 py-12 lg:flex-row">
          <CarouselMain />

          <CardBracket />
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
