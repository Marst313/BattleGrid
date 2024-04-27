"use client";

import Image from "next/image";
import { listBracket } from "@/utils/constants";
import { Switch } from "@/components/ui/switch";
import { useRef, useState } from "react";
import BracketList from "./BracketList";

const FormBracket = () => {
  const ref3Rd = useRef(null);
  const [value, setValue] = useState(0);
  const [currentBracket, setCurrentBracket] = useState(0);

  const handleOnClick = () => {
    console.log(ref3Rd.current.dataset.state);
  };

  const handleParticipants = (type) => {
    if (type === "increment") {
      setValue(value + 1);
    } else {
      setValue((oldValue) => {
        let currentValue = oldValue - 1;

        if (currentValue < 0) {
          currentValue = 0;
        }

        return currentValue;
      });
    }
  };

  const handleOnSubmit = () => {};

  return (
    <form className="flex flex-col gap-5">
      <p className="max-w-2xl">
        Discover the intricacies of various formats, from single-elimination to
        round-robin, and gain insights into how matches are organized and
        scored.
      </p>

      <ul
        className="mt-5 grid grid-cols-1 gap-14 lg:grid-cols-4 
"
      >
        {listBracket.map((bracket) => {
          return (
            <BracketList
              key={bracket.id}
              {...bracket}
              currentBracket={currentBracket}
              setCurrentBracket={setCurrentBracket}
            />
          );
        })}
      </ul>

      <h3>Single Elimination Settings</h3>

      <div className="flex items-center space-x-2">
        <Switch id="include_3rd" ref={ref3Rd} onClick={handleOnClick} />
        <label htmlFor="include_3rd" className="text-white/80">
          Include a match for 3rd place
        </label>
      </div>

      <div>
        <label htmlFor="numberOfParticipants">Number of paricipants</label>

        <div className="relative mt-5 flex w-60 flex-col justify-center">
          <button
            type="button"
            className="absolute h-10 w-16 rounded-md bg-abu text-center text-4xl font-bold"
            onClick={() => handleParticipants("decrement")}
          >
            -
          </button>
          <input
            value={value}
            placeholder="0"
            type="number"
            className="h-8 w-60 bg-abu2 px-20 text-center font-bold text-white [appearance:textfield] focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <button
            type="button"
            className="absolute right-0 h-10 w-16 rounded-md bg-abu text-center text-4xl font-bold"
            onClick={() => handleParticipants("increment")}
          >
            +
          </button>
        </div>
      </div>

      <hr className="my-10 rounded-md border border-white/20" />

      <div className="flex w-52 flex-col gap-5">
        <label htmlFor="tournamentName">Tournament Name</label>
        <input
          type="text"
          id="tournamentName"
          className="rounded-lg bg-abu2 px-5 py-2.5 focus:outline-none focus:ring-0"
          placeholder="Enter your tournament name"
        />
      </div>

      <button type="submit" className="mt-2 w-32 rounded-full bg-oren py-2">
        Submit
      </button>
    </form>
  );
};

export default FormBracket;
