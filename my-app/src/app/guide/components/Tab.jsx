"use client";

import React, { useState } from "react";
import PlayerTabContent from "./PlayerTabContent";
import CreatorTabContent from "./CreatorTabContent";
import Image from "next/image";
import bg from "@/asset/image/Main.image/Background.png";
import ScrollOnTop from "@/components/ScrollOnTop";
const Tab = () => {
  const [activeTab, setActiveTab] = useState("Player");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="mx-auto w-full flex justify-center">
      <div className="absolute inset-0">
        <div className="mx-auto mb-4 mt-20 flex items-center justify-center  py-20 gap-6 w-full">
          <div
            className={`mr-2  px-4 py-2 ${activeTab === "Player" ? " border-b-4 text-oren border-b-oren" : ""} cursor-pointer text-xl font-semibold `}
            onClick={() => handleTabClick("Player")}
          >
            Player
          </div>
          <div
            className={`px-4 py-2 ${activeTab === "Creator" ? "border-b-4 text-oren border-b-oren" : ""} cursor-pointer text-xl font-semibold `}
            onClick={() => handleTabClick("Creator")}
          >
            Creator
          </div>
        </div>

        <div className="items-center py-24  ">
          {activeTab === "Player" && (
            <div className="px-56">
              <PlayerTabContent />
            </div>
          )}
          {activeTab === "Creator" && (
            <div className="px-56">
              <CreatorTabContent />
            </div>
          )}
        </div>
      </div>

      <Image
        src={bg}
        alt="Background Image"
        className="h-fit w-full object-cover"
      />
      <ScrollOnTop />
    </div>
  );
};

export default Tab;
