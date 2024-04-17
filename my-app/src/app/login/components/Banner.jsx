import React from "react";
import cartoon from "@/asset/image/login.image/undraw_drone_race_-0-sim 1.png";
import Image from "next/image";

const Loginbanner = () => {
  return (
    <div className="relative hidden w-[30rem]  flex-col rounded-2xl bg-gradient-to-b from-oren2 to-oren p-10 xl:flex">
      <h3>Battle Grid</h3>
      <Image
        src={cartoon}
        alt="banner images"
        height={400}
        width={400}
        className="mt-10"
      />
      <h2 className="mt-20 text-center leading-relaxed">Create Tourney</h2>
      <p className=" mt-10 text-center text-base">
        Simplifies tournament initiation with facilitating seamless tournament
        setup.
      </p>

      <div className="mt-10 flex items-center justify-center gap-5">
        <button className={`dot h-5 w-5 rounded-full bg-white`}></button>
        <button className={`dot h-5 w-5 rounded-full bg-white`}></button>
        <button className={`dot h-5 w-5 rounded-full bg-white`}></button>
      </div>
    </div>
  );
};

export default Loginbanner;
