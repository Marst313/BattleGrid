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
import { convertDate } from "@/utils/functions";
import Link from "next/link";

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

  if (!allTour) {
    return <h1>There is no tournaments yet</h1>;
  }

  return (
    <ul className="mt-10  grid w-full grid-cols-1 gap-5 lg:grid-cols-4 ">
      {allTour.map((tournament) => {
        console.log(tournament);

        return (
          <li
            key={tournament.id}
            className="h-full w-full overflow-hidden rounded-lg"
          >
            <Image
              src={tournament.thumbnail}
              alt="test"
              width={400}
              height={400}
              className="h-[250px] w-[400px] bg-abu2"
            />

            <div className="flex w-full flex-col gap-3 rounded-b-lg bg-abu p-5">
              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center rounded-full border-2 bg-abu p-1 grayscale">
                  <Image
                    src={tournament.thumbnail}
                    alt="icon"
                    width={400}
                    height={400}
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
                <p className="text-sm font-medium text-white/60">
                  {convertDate(tournament.startDate)}
                </p>
              </div>

              <div className="my-2 flex items-center gap-3">
                <p className="text-sm font-bold text-white">
                  Created at {convertDate(tournament.createdAt)}
                </p>
              </div>

              <Link
                href={`/tourney/${tournament.id}`}
                className="flex w-32 items-center justify-center self-center rounded-full bg-oren py-1 font-semibold hover:scale-105"
              >
                Join
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListTournaments;
