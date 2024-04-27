"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import bgImage from "@/asset/image/Tourney.search/default.png";
import defaultProfile from "@/asset/image/Tourney.search/img.Logo (1).png";
import {
  faCalendar,
  faGamepad,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const ListTournaments = () => {
  const [allTour, setAllTour] = useState([]);

  // http://127.0.0.1:3000/api/v1/competition/

  const getTourney = async () => {
    const { data } = await axios.get(
      "http://127.0.0.1:3000/api/v1/competition/",
    );

    setAllTour(data.data.allCompetition);
  };

  useEffect(() => {
    getTourney();
  }, []);

  useEffect(() => {}, [allTour]);

  return (
    <ul className="mt-5 grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
      {allTour.map((tournament) => {
        const createdAt = new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(new Date(tournament.createdAt));

        const startedAt = new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(new Date(tournament.startDate));

        console.log(tournament);
        return (
          <li key={tournament.id} className="h-full w-full ">
            <Image src={bgImage} alt="test" className="w-full" />

            <div className="flex w-full flex-col gap-3 rounded-b-lg bg-abu p-5">
              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center rounded-full border-2 bg-abu p-1 grayscale">
                  <Image
                    src={tournament.thumbnail}
                    alt="icon"
                    width={45}
                    height={45}
                    className=" grayscale"
                  />
                </div>

                <p className="text-sm font-semibold">{tournament.title}</p>
              </div>

              {/* Game Name */}
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faGamepad}
                  className="h-5 w-5 text-white"
                />
                <p className="text-sm font-medium capitalize text-white/60">
                  {tournament.FormatTour.game.replaceAll("_", " ")}
                </p>
              </div>

              {/* Participants */}
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="h-5 w-5 text-white"
                />
                <p className="text-sm font-medium text-white/60">
                  {tournament.FormatTour.currentParticipants}/
                  {tournament.FormatTour.maxParticipants} Participants
                </p>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="h-5 w-5 text-white"
                />
                <p className="text-sm font-medium text-white/60">{startedAt}</p>
              </div>

              <div className="my-2 flex items-center gap-3">
                <p className="text-sm font-bold text-white">
                  Created at {createdAt}
                </p>
              </div>

              <button
                type="button"
                className="w-32 self-center rounded-full bg-oren py-1 font-semibold hover:bg-opacity-90"
              >
                Join
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListTournaments;
