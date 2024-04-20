import React from "react";
import Image from "next/image";
import icon_charter from "@/asset/image/Onboarding.image/charter.png";
import Background from "@/asset/image/Onboarding.image/Background.png";
import Carousel from "./Boarding/Caraousel";

const OnBoarding = () => {
  return (
    <div className="relative max-w-[800px] px-8 py-8 ">
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-0">
          <Image
            src={Background}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg "
          />
          <div className="absolute  bg-black bg-opacity-25"></div>
        </div>

        <div className="relative ">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
