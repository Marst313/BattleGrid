import React from 'react'
import line1 from "@/asset/image/guide/line1.png";
import line2 from "@/asset/image/guide/line2.png";
import line3 from "@/asset/image/guide/line3.png";
import line4 from "@/asset/image/guide/line4.png";
import line5 from "@/asset/image/guide/line5.png";
import pink from "@/asset/image/guide/pink.png";
import blue from "@/asset/image/guide/blue.png";
import blue2 from "@/asset/image/guide/biru2.png";
import Image from "next/image";
const CreatorTabContent = () => {
    return (
        <div>
          {" "}
          <div className="relative ">
            <span className="inset-0 z-auto rounded-full bg-oren px-12 py-3 text-center text-white ">
              Create Bracket
            </span>
            <Image src={line1} className=" absolute  left-[144px] top-3 -z-10" />
            <Image src={line2} className=" absolute  left-[400px] top-3 -z-10" />
            <Image src={line3} className=" absolute  left-[990px] top-3 -z-10" />
            <Image
              src={line4}
              className=" absolute  left-[602px] top-[360px]  -z-10"
            />
            <Image
              src={line4}
              className=" absolute  left-[210px] top-[360px]  -z-10"
            />
            <Image
              src={line5}
              className=" absolute  left-[10px] top-[360px]  -z-10"
            />
            
            <Image src={pink} className="absolute  -top-1 left-[370px] -z-10" />
            <Image src={blue} className="absolute  left-[980px] top-[345px] " />
            <Image src={blue2} className="absolute  left-[580px] top-[345px] " />
    
            <div className="absolute -top-2 left-[940px]  w-40 rounded-full bg-purple-600 px-7 py-3 text-center  ">
              Detail Tour
            </div>
    
            <div className="absolute left-[200px] top-[340px]  w-40 rounded-full bg-[#FD1414] px-7 py-3 text-center  ">
              Promote
            </div>
    
            <div className="absolute  left-[545px] top-[693px] w-64 rounded-full bg-[#FF4C29] px-7 py-4 text-center  ">
              Start The Competition
            </div>
    
            <p className="absolute  left-[995px] top-[320px] -z-10 text-sm text-gray-300">
              Add Rule
            </p>
            <p className="absolute  left-[990px]  top-[390px] -z-10 text-sm text-gray-300">
              And Schedule
            </p>
    
            <p className="absolute  left-[595px] top-[320px] -z-10 text-sm text-gray-300">
              Choose the
            </p>
            <p className="absolute  left-[595px]  top-[390px] -z-10 text-sm text-gray-300">
              Prizepool
            </p>
    
            <div className="relative">
              <p className="absolute  -top-14 left-[400px] -z-10 text-sm text-gray-300">
                Login /
              </p>
              <p className="absolute  -bottom-8 left-[390px] -z-10 text-sm text-gray-300">
                Register
              </p>
            </div>
          </div>
        </div>
      );
}

export default CreatorTabContent
