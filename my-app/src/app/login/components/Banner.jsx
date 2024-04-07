import React from "react";
import bg from "@/asset/image/login.image/Rectangle.png";
import cartoon from "@/asset/image/login.image/undraw_drone_race_-0-sim 1.png";
import Image from "next/image";

const Loginbanner = () => {
  return (
    <div className="relative  ">
      <Image src={bg} className="h-[700px] w-[500px]" />
      <div className="absolute inset-0 flex flex-col gap-8 text-white ">
        <div className=" mt-12 px-10">
          <h1 className="text-base font-normal mb-4 leading-10 text-gray-300">
            Battle Grid
          </h1>
        </div>
        <div className="flex justify-center ">
          <Image src={cartoon} className="w-full px-20" />
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center py-4">
          Create Tourney
        </h2>
        <div className="flex justify-center">
          <p className="text-base text-center w-80">
            Simplifies tournament initiation with facilitating seamless
            tournament setup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginbanner;
