"use client";

import React, { useState } from "react";
import PlayerTabContent from "./PlayerTabContent";
import CreatorTabContent from "./CreatorTabContent";
import Image from "next/image";
import bg from "@/asset/image/Main.image/Background.png";
import ScrollOnTop from "@/components/ScrollOnTop";
import Footer from "@/components/Footer";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Player");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="mx-auto flex w-full justify-center">
        <div className="absolute inset-0">
          <div className="mx-auto mb-4 mt-20  flex w-full items-center  justify-center  gap-6 py-20 ">
            <div
              className={`mr-2  px-4 py-2 ${activeTab === "Player" ? " border-b-4 border-b-oren text-oren" : ""} cursor-pointer text-xl font-semibold `}
              onClick={() => handleTabClick("Player")}
            >
              Player
            </div>
            <div
              className={`px-4 py-2 ${activeTab === "Creator" ? "border-b-4 border-b-oren text-oren" : ""} cursor-pointer text-xl font-semibold `}
              onClick={() => handleTabClick("Creator")}
            >
              Creator
            </div>
          </div>

          <div className="  mx-auto h-screen ">
            {activeTab === "Player" && (
              <div className="mx-auto h-screen items-center px-56 py-24 ">
                <PlayerTabContent />
              </div>
            )}
            {activeTab === "Creator" && (
              <div className="mx-auto h-screen items-center px-56 py-24 ">
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
      </div>
      <ScrollOnTop />
      <Footer />
    </>
  );
};

export default Tab;
