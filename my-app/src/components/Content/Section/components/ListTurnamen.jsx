import React from "react";
import dota_img from "@/asset/image/Section.image/dota.png";
import valorant_img from "@/asset/image/Section.image/valorant.png";
import csgo_img from "@/asset/image/Section.image/csgo.png";
import apex from "@/asset/image/Section.image/apex.png";
import overwatch from "@/asset/image/Section.image/overwatch.png";
import list from "@/asset/image/Section.image/listGame.png";
import card from "@/asset/image/Section.image/card.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const Data = [
  {
    id: 1,

    img: dota_img,
  },
  {
    id: 2,

    img: valorant_img,
  },
  {
    id: 3,

    img: csgo_img,
  },
  {
    id: 4,

    img: overwatch,
  },
  {
    id: 5,

    img: apex,
  },
];

const ListTurnamen = () => {
  return (
    <div className="">
      <div className="flex  items-center justify-evenly gap-4 px-48 py-12">
        <div className="">
          <p className="text-2xl font-semibold py-2">
            Find Your Tournament Search, Complete, Win !
          </p>
          <p className="w-[70%] text-sm text-gray-400">
            With our intuitive search feature, you can easily explore a diverse
            range of tournaments across various game genres and skill levels.
            Whether you're a casual player looking for friendly matches or a
            seasoned competitor seeking the ultimate challenge.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className=" bg-oren w-60 px-4 text-center gap-3 shadow-2xl flex items-center  py-1 justify-center rounded-md font-semibold ">
            <button>More Tournaments</button>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 ">
        <div className=" flex justify-center  gap-3 px-24">
          {Data.map((game) => (
            <div key={game.id} className="">
              <Image src={game.img} alt={game.Name} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-4">
        <div className="flex justify-center py-12 border-t w-fit ">
          <Image src={list} />
        </div>
      </div>

      <div className="flex justify-center py-32 relative">
        <Image src={card} />
        <div className="absolute flex flex-col items-center justify-center gap-8  py-9">
          <p className="text-center text-xl">
            Join the Action, <span className="text-oren font-bold">Sign Up </span> Now !{" "}
          </p>
          <p className="text-gray-400 text-base w-[40%] text-center">
            By signing up now, you gain exclusive access to thrilling
            tournaments, pulse-pounding matches, and the chance to prove your
            skills against the best in the gaming community.
          </p>
          <button className="bg-oren text-white px-4 py-1 rounded-md font-semibold w-40">
            Sign Up Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListTurnamen;
