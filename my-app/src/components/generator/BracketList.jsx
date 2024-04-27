import Image from "next/image";
import React from "react";

const BracketList = ({
  currentBracket,
  id,
  title,
  description,
  image,
  setCurrentBracket,
}) => {
  return (
    <li
      className={`flex w-64 cursor-pointer flex-col items-center justify-between gap-5 rounded-md bg-abu2 p-5 ${currentBracket === id ? "ring-2 ring-oren" : "ring-2 ring-abu2"}`}
      onClick={() => setCurrentBracket(id)}
    >
      <h5>{title}</h5>
      <Image src={image} alt={title} />
      <p>{description}</p>
    </li>
  );
};

export default BracketList;
