import Filter from "@/components/search/Filter";
import ListTournaments from "@/components/search/ListTournaments";
import React from "react";

const page = () => {
  return (
    <div className="bg px-5 pt-40">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-5 rounded-lg bg-abu1 p-10">
        <h2>Search</h2>
        <hr className=" w-20 rounded-lg border-4 border-oren" />

        <h3>Tournament Search</h3>

        {/* Filter */}
        <Filter />

        {/* List Tournament */}
        <ListTournaments />
      </div>
    </div>
  );
};

export default page;
