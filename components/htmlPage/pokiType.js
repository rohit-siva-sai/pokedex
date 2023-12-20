import { Html } from "@react-three/drei";
import React from "react";
import PokiName from "./pokiName";
const typeColors = {
  normal: "#BCBCAC",
  fighting: "#BC5442",
  flying: "#669AFF",
  poison: "#AB549A",
  ground: "#DEBC54",
  rock: "#BCAC66",
  bug: "#ABBC1C",
  ghost: "#6666BC",
  steel: "#ABACBC",
  fire: "#FF421C",
  water: "#2F9AFF",
  grass: "#78CD54",
  electric: "#FFCD30",
  psychic: "#FF549A",
  ice: "#78DEFF",
  dragon: "#7866EF",
  dark: "#785442",
  fairy: "#FFACFF",
  shadow: "#0E2E4C",
};

const PokiType = ({ pokemon }) => {
  const getColor = (value) => {
    // console.log("value", typeColors);

    return typeColors[value];
  };

  return (
    <div>
      {pokemon?.types?.length > 1 ? (
        <div className="flex flex-col items-center space-y-3 pointer-events-none">
          <div className="text-green-300 text-4xl font-serif">Types</div>
          {pokemon.types && (
            <div
              className={`flex ${
                pokemon?.types.length > 1 ? "space-x-24" : "space-x-0"
              } `}
            >
              <div
                style={{
                  background: typeColors[pokemon?.types[0]?.type?.name],
                }}
                className="text-4xl px-[20px] py-2 font-semibold  text-white rounded-[15px]"
              >
                {pokemon?.types[0]?.type?.name}
              </div>
              <div
                style={{
                  background: typeColors[pokemon?.types[1]?.type?.name],
                }}
                className="text-4xl px-[20px] py-1 font-semibold text-white rounded-[15px]"
              >
                {pokemon?.types[1]?.type?.name}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-3">
          <div className="text-green-300 text-4xl font-serif">Type</div>
          {pokemon.types && (
            <div
              className={`flex ${
                pokemon?.types.length > 1 ? "space-x-24" : "space-x-0"
              } `}
            >
              <div
                style={{
                  background: typeColors[pokemon?.types[0]?.type?.name],
                }}
                className="text-4xl px-[20px] font-semibold text-white py-2 rounded-[15px]"
              >
                {pokemon?.types[0]?.type?.name}
              </div>
             
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PokiType;
