import React from "react";
import icon_charter from "@/asset/image/Onboarding.image/charter.png";
import Image from "next/image";
const Boarding1 = () => {
  return (
    <div>
      <div className="relative flex items-center justify-between py-4 pl-24">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-medium text-white">
            Biggest Gaming Competition of the Year!
          </h1>
          <div className="w-52">
            <p className="text-sm text-gray-400">
              Complete against top-tier gamers and claim your spot among the
              champions!
            </p>
          </div>

          <button className="mt-5 w-40 rounded-md bg-oren px-4 py-1 font-semibold text-white">
            Find Now !
          </button>
        </div>

        <div className="relative  right-8  top-12">
          <Image src={icon_charter} alt="Charter" />
        </div>
      </div>
    </div>
  );
};

export default Boarding1;
