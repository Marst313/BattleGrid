"use client";

import React, { useState } from "react";

const CheckedRole = ({
  isActiveCreator,
  isActivePlayer,
  selectedRole,
  setIsActiveCreator,
  setIsActivePlayer,
  setSelectedRole,
}) => {
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    if (e.target.value === "USER") {
      setIsActivePlayer(true);
      setIsActiveCreator(false);
    } else if (e.target.value === "ADMIN") {
      setIsActiveCreator(true);
      setIsActivePlayer(false);
    }
  };

  return (
    <>
      <div
        className={`flex w-full items-center rounded border ps-4 ${
          isActivePlayer ? "border-oren" : "border-gray-300"
        }`}
      >
        <input
          id="role-1"
          type="radio"
          name="bordered-radio"
          className={`radio-custom h-4 w-4 ${
            isActivePlayer ? "radio-active" : ""
          }`}
          onClick={handleRoleChange}
          value="USER"
          checked={selectedRole === "USER"}
        />
        <label
          htmlFor="role-1"
          className={`ms-2 w-full py-4 text-sm font-medium ${
            isActivePlayer ? "text-oren" : "text-gray-300"
          }`}
        >
          Player
        </label>
      </div>

      <div
        className={`flex w-full items-center rounded border ps-4 ${
          isActiveCreator ? "border-oren" : "border-gray-300"
        }`}
      >
        <input
          id="role-2"
          type="radio"
          name="bordered-radio"
          className={`radio-custom h-4 w-4 ${
            isActiveCreator ? "radio-active" : ""
          }`}
          onClick={handleRoleChange}
          value="ADMIN"
          checked={selectedRole === "ADMIN"}
        />
        <label
          htmlFor="role-2"
          className={`ms-2 w-full py-4 text-sm font-medium ${
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
