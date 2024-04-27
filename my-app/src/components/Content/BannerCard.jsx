import Link from "next/link";
import React from "react";
import Button from "../Button";

const BannerCard = () => {
  return (
    <div className="mx-auto my-20 max-w-screen-xl p-5 xl:p-0">
      <div className="relative h-[30rem] ">
        {/* Trapezium */}
        <div className="trapezium absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded-sm bg-white/10 p-5 backdrop-blur-sm lg:p-10">
          <h1 className="text-center font-light lg:text-start">
            Join the Action,{" "}
            <span className="font-semibold text-oren">Sign Up </span>
            Now!
          </h1>

          <p className="max-w-xl text-center">
            By signing up now, you gain exclusive access to thrilling
            tournaments, pulse-pounding matches, and the chance to prove your
            skills against the best in the gaming community.
          </p>

          <Link
            className="rounded-md bg-oren px-10 py-2.5 text-2xl font-bold shadow-[0px_4px_4px_rgba(0,0,0,0.5)] hover:bg-opacity-80"
            href={"/register"}
          >
            Sign Up Now !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
