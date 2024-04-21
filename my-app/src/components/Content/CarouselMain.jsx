"use client";

import {
  CaraouselIndicator,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { carouselItem } from "@/utils/constants";
import SingleCard from "./SingleCard";
import { useState } from "react";

export function CarouselMain() {
  const [current, setCurrent] = useState(0);

  return (
    <Carousel className="w-full p-2 ">
      <CarouselContent className="">
        {carouselItem.map((item, index) => (
          <SingleCard key={item.id} {...item} />
        ))}
      </CarouselContent>

      <CaraouselIndicator items={carouselItem} />

      {/* Arrow */}
      <CarouselPrevious
        orientation="horizontal"
        className="absolute left-10 top-0 mt-10 rotate-90 border-none bg-transparent"
      />
      <CarouselNext className="absolute bottom-0 left-10 mt-44 rotate-90 border-none bg-transparent" />
    </Carousel>
  );
}
