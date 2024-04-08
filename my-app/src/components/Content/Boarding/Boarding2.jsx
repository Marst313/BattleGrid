import React from 'react'
import icon_charter from "@/asset/image/Onboarding.image/charter.png";
import Image from "next/image";
const Boarding2 = () => {
  return (
    <div>
       <div className="relative z-10 flex items-center justify-between pl-24 py-4 ">
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

            <button className="bg-oren text-white px-4 py-1 rounded-md font-semibold w-40">
              Try Now !
            </button>
          </div>

          <div className="relative  right-8  top-12">
            <Image src={icon_charter} alt="Charter" className=" w-full" />
          </div>
        </div> 
    </div>
  )
}

export default Boarding2
