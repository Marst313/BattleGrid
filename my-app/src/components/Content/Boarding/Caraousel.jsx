"use client";

import React, { useState } from "react";
import Boarding1 from "./Boarding1";
import Boarding3 from "./Boarding3";
import Boarding2 from "./Boarding2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import line_aktif from "@/asset/image/Onboarding.image/line_aktif.png";
import line_nonaktif from "@/asset/image/Onboarding.image/line_nonaktif.png";
import Image from "next/image";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const totalSlides = 3;

  const disablePrev = currentSlide === 0;
  const disableNext = currentSlide === totalSlides - 1;
  const lines = Array.from({ length: totalSlides }, (_, index) => index);
  return (
    <div className="pl-8 py-4 relative flex items-center justify-center ">
      <button onClick={prevSlide} disabled={disablePrev} className=" disabled:text-gray-500 text-oren">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="flex flex-col justify-center items-center">
       
          {currentSlide === 0 && <Boarding1 />}
          {currentSlide === 1 && <Boarding2 />}
          {currentSlide === 2 && <Boarding3 />}
    
      </div>
      <button onClick={nextSlide} disabled={disableNext} className="mr-8 disabled:text-gray-500 text-oren">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
export default Carousel;
