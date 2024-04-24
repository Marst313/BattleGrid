"use client";
import React from "react";
import Footer from "../Footer";

import Section from "./Section/Section";
import CardBracket from "./CardBracket";
import { CarouselMain } from "./CarouselMain";
import { useCookies } from "react-cookie";
import BannerCard from "./BannerCard";

const Content = () => {
  const [cookies] = useCookies(["user"]);
  console.log(cookies);
  return (
    <div className="bg">
      <div className="mx-auto mt-20 flex max-w-screen-xl flex-col justify-between gap-5 py-12 lg:flex-row">
        <CarouselMain />

        <CardBracket />
      </div>

      <Section />

      <BannerCard />

      <Footer />
    </div>
  );
};

export default Content;
