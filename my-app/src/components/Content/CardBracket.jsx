import React from "react";
import bracket from "@/asset/image/Onboarding.image/bracket.png";
import Image from "next/image";

const CardBracket = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="card_box  relative flex   h-[26rem] w-96  flex-col justify-between rounded-xl  bg-gradient-to-b from-oren2  to-oren p-5 text-center shadow-[0px_4px_4px_rgba(0,0,0,0.50)] transition-transform duration-300">
        <span className="span_element absolute left-[-10px] top-[-10px] flex h-[150px] w-[150px] items-center justify-center overflow-hidden"></span>
        <Image src={bracket} alt="bracket image" />

        <div className="mb-8">
          <h1 className=" text-2xl">Bracket Generator</h1>

          <div className="flex w-full items-center justify-center gap-5">
            <span className="h-3 w-2/5 rounded-full bg-red-100"></span>
            <span className="h-3 w-1/5 rounded-full  bg-red-100 "></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBracket;
