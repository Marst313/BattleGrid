import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import ListTournaments from "./components/ListTournaments";
import ListLogo from "./components/ListLogo";

const Section = () => {
  return (
    <div className=" px-8 lg:py-8 ">
      <div className="mx-auto  flex max-w-screen-xl flex-col  items-center justify-between gap-4 py-12 lg:flex-row">
        <div>
          <h5 className="py-2 text-center text-lg font-semibold lg:text-start lg:text-2xl">
            Find Your Tournament Search, Complete, Win !
          </h5>
          <p className="text-center text-sm text-gray-400 lg:max-w-2xl lg:text-start lg:text-base">
            With our intuitive search feature, you can easily explore a diverse
            range of tournaments across various game genres and skill levels.
            Whether you're a casual player looking for friendly matches or a
            seasoned competitor seeking the ultimate challenge.
          </p>
        </div>

        <button className="mt-5 flex w-60 items-center justify-center gap-5 rounded-lg bg-oren px-5 py-2.5 text-lg font-bold shadow-[0px_4px_4px_rgba(0,0,0,0.5)] hover:bg-opacity-80">
          More Tournaments
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <ListTournaments />

      <hr className="mx-auto my-10 max-w-screen-xl border  border-white/30" />

      <ListLogo />
    </div>
  );
};

export default Section;
