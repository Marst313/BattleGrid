"use client";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Image from "next/image";
import bg from "@/asset/image/Main.image/Background.png";
import OnBoarding from "./OnBoarding";
import bracket from "@/asset/image/Onboarding.image/Bracket.png";
import Carousel from "./Boarding/Caraousel";
import Section from "./Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const Content = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative h-dvh">
      <div className="absolute inset-0 z-10  ">
        <div className="flex justify-center py-12">
          <OnBoarding />
          <Image src={bracket} className=" w-auto pr-4"></Image>
        </div>
        <Section />
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-oren text-white px-4 py-2 rounded-full shadow-lg focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        )}
      </div>

      <Image
        src={bg}
        alt="Background Image"
        className="object-cover w-full h-fit"
      />

      <Footer />
    </div>
  );
};

export default Content;
