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
          <p className="py-2 text-2xl font-semibold">
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
          <div className=" flex w-60 items-center justify-center gap-3 rounded-md bg-oren px-4  py-1 text-center font-semibold shadow-2xl ">
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
        <div className="flex w-fit justify-center border-t py-12 ">
          <Image src={list} alt="image game" />
        </div>
      </div>

      <div className="relative flex justify-center py-32">
        <Image src={card} alt="image game" />
        <div className="absolute flex flex-col items-center justify-center gap-8  py-9">
          <p className="text-center text-xl">
            Join the Action,{" "}
            <span className="font-bold text-oren">Sign Up </span> Now !{" "}
          </p>
          <p className="w-[40%] text-center text-base text-gray-400">
            By signing up now, you gain exclusive access to thrilling
            tournaments, pulse-pounding matches, and the chance to prove your
            skills against the best in the gaming community.
          </p>
          <button className="w-40 rounded-md bg-oren px-4 py-1 font-semibold text-white">
            Sign Up Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListTurnamen;
