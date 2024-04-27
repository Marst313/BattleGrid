import manwithgun from "@/asset/image/Onboarding.image/manwithgun.png";

// Images
import dota_img from "@/asset/image/Section.image/dota2.png";
import valorant_img from "@/asset/image/Section.image/valorant2.png";
import csgo_img from "@/asset/image/Section.image/csgo2.png";
import apex_img from "@/asset/image/Section.image/apex2.png";
import overwatch_img from "@/asset/image/Section.image/overwatch2.png";

// Logo
import dota_logo from "@/asset/image/Section.image/dotaLogo.png";
import valorant_logo from "@/asset/image/Section.image/valorantLogo.png";
import csgo_logo from "@/asset/image/Section.image/csgoLogo.png";
import apex_logo from "@/asset/image/Section.image/apexLogo.png";
import overwatch_logo from "@/asset/image/Section.image/overwatchLogo.png";
import fortnite_logo from "@/asset/image/Section.image/fortniteLogo.png";
import rocketleague_logo from "@/asset/image/Section.image/rocketLogo.png";

// Bracket
import single_bracket from "@/asset/image/Tourney.generator/singleElimination.png";
import double_bracket from "@/asset/image/Tourney.generator/doubleElimination.png";
import robin_bracket from "@/asset/image/Tourney.generator/roundRobin.png";
import swiss_bracket from "@/asset/image/Tourney.generator/swiss.png";

export const carouselItem = [
  {
    id: 1,
    title: "Biggest Gaming Competition Of The Year!",
    description:
      "Compete against top-tier gamers and claim your spot among the champions !",
    button: "Find Now !",
    image: manwithgun,
    alt: "Man With Gun",
  },
  {
    id: 2,
    title: "Biggest Gaming Competition Of The Year!",
    description:
      "Compete against top-tier gamers and claim your spot among the champions !",
    button: "Find Now !",
    image: manwithgun,
    alt: "Man With Gun",
  },
  {
    id: 3,
    title: "Biggest Gaming Competition Of The Year!",
    description:
      "Compete against top-tier gamers and claim your spot among the champions !",
    button: "Find Now !",
    image: manwithgun,
    alt: "Man With Gun",
  },
];

export const listGame = [
  {
    id: 1,
    name: "Dota 2",
    image: dota_img,
  },
  {
    id: 2,
    name: "Valorant",
    image: valorant_img,
  },
  {
    id: 3,
    name: "CS:GO",
    image: csgo_img,
  },
  {
    id: 4,
    name: "Overwatch",
    image: overwatch_img,
  },
  {
    id: 5,
    name: "Apex",
    image: apex_img,
  },
];

export const listLogoGame = [
  {
    id: 1,
    name: "Dota 2",
    image: dota_logo,
  },
  {
    id: 2,
    name: "Valorant",
    image: valorant_logo,
  },
  {
    id: 3,
    name: "CS:GO",
    image: csgo_logo,
  },
  {
    id: 4,
    name: "Apex Legends",
    image: apex_logo,
  },
  {
    id: 5,
    name: "Fortnite",
    image: fortnite_logo,
  },
  {
    id: 6,
    name: "Rocket League",
    image: rocketleague_logo,
  },
  {
    id: 7,
    name: "Overwatch",
    image: overwatch_logo,
  },
];

export const listBracket = [
  {
    id: 0,
    title: "Single Elimination",
    image: single_bracket,
    description:
      "Participants compete in a series of matches, the winner of each match advancing to the next round and the loser being eliminated from the competition.",
  },
  {
    id: 1,
    title: "Double Elimination",
    image: double_bracket,
    description:
      "After losing a match in the upper bracket, participants move to the lower bracket, where they continue to compete against other participants who have also been defeated.",
  },
  {
    id: 2,
    title: "Round Robin",
    image: robin_bracket,
    description:
      "After all matches are completed, rankings are determined based on win-loss records, points earned, or other predetermined criteria.",
  },
  {
    id: 3,
    title: "Swiss",
    image: swiss_bracket,
    description:
      "A tournament format where players or teams compete in a series of rounds without being eliminated. Unlike single or double elimination tournaments.",
  },
];

export const filterSort = [
  {
    value: "sort by",
    label: "Sort By",
  },
  {
    value: "participants lowest",
    label: "Participants lowest",
  },
  {
    value: "participants higest",
    label: "Participants higest",
  },

  {
    value: "playing oldest",
    label: "Playing oldest",
  },
  {
    value: "playing newest",
    label: "Playing newest",
  },
];

export const gameSort = [
  {
    value: "game",
    label: "Game",
  },
  {
    value: "apex legends",
    label: "Apex Legends",
  },
  {
    value: "dota 2",
    label: "Dota 2",
  },
  {
    value: "cs:go",
    label: "CS:GO",
  },

  {
    value: "valorant",
    label: "Valorant",
  },
  {
    value: "overwatch",
    label: "Overwatch",
  },
];

export const statusSort = [
  {
    value: "status",
    label: "Status",
  },
  {
    value: "ongoing",
    label: "Ongoing",
  },
  {
    value: "complated",
    label: "Complated",
  },
  {
    value: "pending",
    label: "Pending",
  },
];
