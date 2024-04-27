"use client";

import React from "react";
import FormBracket from "../../../components/generator/FormBracket";

const page = () => {
  return (
    <div className="bg px-5 pt-40">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-5 rounded-lg bg-abu1 p-10">
        <h2>Bracket Generator</h2>

        <hr className=" w-20 rounded-lg border-4 border-oren" />

        <h3>Tournament Format</h3>

        <FormBracket />
      </div>
    </div>
  );
};

export default page;
