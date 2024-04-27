import React from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Sort } from "./Sort";
import { filterSort, gameSort, statusSort } from "@/utils/constants";

const Filter = () => {
  return (
    <form>
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div className="relative w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg bg-abu2 px-5 py-2.5 pr-12 placeholder:font-bold placeholder:text-white/50 focus:outline-none lg:w-auto"
          />

          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-5 top-3 h-5 w-5"
          />
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <Sort title="Sort By" data={filterSort} />
          <Sort title="Game" data={gameSort} />
          <Sort title="Status" data={statusSort} />
        </div>
      </div>
    </form>
  );
};

export default Filter;
