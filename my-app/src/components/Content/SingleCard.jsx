import React from "react";
import Button from "../Button";
import Background from "@/asset/image/Onboarding.image/Background.png";

import ringOrange from "@/asset/image/Onboarding.image/RingOrangeBg.png";
import ringWhite from "@/asset/image/Onboarding.image/RingWhiteBg.png";
import { CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const SingleCard = ({ title, description, button, image, alt }) => {
  return (
    <CarouselItem>
      <div className="p-1">
        <Card className="relative h-[26rem] border-none shadow-[0px_4px_4px_#000000]">
          <div className="absolute inset-0 z-0 rounded-lg">
            <Image
              src={Background}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute h-full w-full rounded-lg bg-black bg-opacity-50 backdrop-blur-md"></div>
          </div>

          <CardContent className="absolute ml-10 mt-10 rounded-lg   p-10 lg:mt-0 lg:p-24">
            <h1 className="max-w-lg text-lg lg:text-3xl">{title}</h1>

            <p className="mt-5 max-w-56">{description}</p>

            <Button
              text={button}
              className="mt-5 bg-oren text-2xl font-semibold shadow-[0px_4px_4px_#000000]"
              type="button"
            />
          </CardContent>

          {/* Backgorund Images */}

          <div className="absolute bottom-24 right-80  hidden h-16 w-16 rounded-full bg-oren xl:block"></div>

          <div className="absolute bottom-56 right-72  hidden h-10 w-10 rounded-full bg-white xl:block"></div>
          <Image
            src={image}
            alt="man with gun"
            className="absolute bottom-0 right-0 z-20 hidden xl:block"
            width={350}
          />

          <Image
            src={ringOrange}
            alt="ring orange"
            className="absolute bottom-0 right-0  hidden xl:block"
            width={270}
          />

          <Image
            src={ringWhite}
            alt="ring white"
            className="absolute bottom-0 right-0  hidden xl:block"
            width={170}
          />
        </Card>
      </div>
    </CarouselItem>
  );
};

export default SingleCard;
