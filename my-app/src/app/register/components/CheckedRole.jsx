"use client";

import React, { useState } from "react";
import "@/style/index.css";
const CheckedRole = () => {
  const [isActivePlayer, setIsActivePlayer] = useState(true); // Mengatur default ke Player
  const [isActiveCreator, setIsActiveCreator] = useState(false);

  const handlePlayerClick = () => {
    setIsActivePlayer(true); // Menetapkan Player sebagai yang aktif
    setIsActiveCreator(false); // Reset status Tournament Creator
  };

  const handleCreatorClick = () => {
    setIsActiveCreator(true); // Menetapkan Tournament Creator sebagai yang aktif
    setIsActivePlayer(false); // Reset status Player
  };

  return (
    <>
      <div
        className={`flex items-center ps-4 border rounded w-full ${
          isActivePlayer ? "border-oren" : "border-gray-300"
        }`}
      >
        <input
          id="role-1"
          type="radio"
          name="bordered-radio"
          className={`w-4 h-4 radio-custom ${
            isActivePlayer ? "radio-active" : ""
          }`}
          onClick={handlePlayerClick}
          checked={isActivePlayer}
        />
        <label
          htmlFor="role-1"
          className={`w-full py-4 ms-2 text-sm font-medium ${
            isActivePlayer ? "text-oren" : "text-gray-300"
          }`}
        >
          Player
        </label>
      </div>

      <div
        className={`flex items-center ps-4 border rounded w-full ${
          isActiveCreator ? "border-oren" : "border-gray-300"
        }`}
      >
        <input
          id="role-2"
          type="radio"
          name="bordered-radio"
          className={`w-4 h-4 radio-custom ${
            isActiveCreator ? "radio-active" : ""
          }`}
          onClick={handleCreatorClick}
          checked={isActiveCreator}
        />
        <label
          htmlFor="role-2"
          className={`w-full py-4 ms-2 text-sm font-medium ${
            isActiveCreator ? "text-oren" : "text-white"
          }`}
        >
          Tournament Creator
        </label>
      </div>
    </>
  );
};

export default CheckedRole;
