import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import bg from "@/asset/image/Main.image/Background.png";
const Guide = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background Image"
          className="object-contain w-full h-fit"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
};

export default Guide;
