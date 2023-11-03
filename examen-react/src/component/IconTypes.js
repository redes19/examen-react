import React from "react";
import IconNormal from "./image/normal-icon.png";
import IconELectric from "./image/electric-icon.png";
import IconWater from "./image/water-icon.png";
import IconFairy from "./image/fairy-icon.png";
import iconFighting from "./image/fighting-icon.png";
import iconIce from "./image/ice-icon.png";
import iconRock from "./image/rock-icon.png";
import IconFire from "./image/fire-icon.png";
import IconGrass from "./image/grass-icon.png";
import IconPoison from "./image/poison-icon.png";
import IconGround from "./image/ground-icon.png";
import IconFlying from "./image/flying-icon.png";
import IconPsychic from "./image/psychic-icon.png";
import IconBug from "./image/bug-icon.png";
import IconSteel from "./image/steel-icon.png";
import IconDragon from "./image/dragon-icon.png";

const pokemonTypes = {
  normal: {
    name: "normal",
    icon: IconNormal,
  },
  fire: {
    name: "fire",
    icon: IconFire,
  },
  water: {
    name: "water",
    icon: IconWater,
  },
  grass: {
    name: "grass",
    icon: IconGrass,
  },
  electric: {
    name: "electric",
    icon: IconELectric,
  },
  ice: {
    name: "ice",
    icon: iconIce,
  },
  fighting: {
    name: "fighting",
    icon: iconFighting,
  },
  poison: {
    name: "poison",
    icon: IconPoison,
  },
  ground: {
    name: "ground",
    icon: IconGround,
  },
  flying: {
    name: "flying",
    icon: IconFlying,
  },
  psychic: {
    name: "psychic",
    icon: IconPsychic,
  },
  bug: {
    name: "bug",
    icon: IconBug,
  },
  rock: {
    name: "rock",
    icon: iconRock,
  },
  steel: {
    name: "steel",
    icon: IconSteel,
  },
  dragon: {
    name: "dragon",
    icon: IconDragon,
  },
  dark: {
    name: "dark",
    icon: "dark-icon.png",
  },
  fairy: {
    name: "fairy",
    icon: IconFairy,
  },
};

// display icon
const IconTypes = ({ type }) => {
  const typeInfo = pokemonTypes[type];

  return (
    <div className="typeIcon">
      <img src={typeInfo.icon} alt={typeInfo.name} />
    </div>
  );
};

export default IconTypes;
