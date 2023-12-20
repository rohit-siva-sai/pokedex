import { Html } from "@react-three/drei";
import React from "react";
import PokiType from "./pokiType";

const PokiDetail = ({pokemon}) => {
  return (
    <Html
      transform
      // distanceFactor={0.94}
      // position={[0, 1.56, -1.4]}
      distanceFactor={1.5}
      zIndexRange={[100, 0]}
      position={[2.76, 1.62, -0.3]}
      // rotation-x={-0.256}
    >
      <div className="w-[910px] bg-gray-700 h-[350px] border rounded-[35px] pointer-events-none">
        <div className="grid grid-rows-3 grid-cols-1  place-content-center py-2">
          <div className="w-full grid grid-cols-2 justify-items-center align-middle place-items-center ">
            <div className="flex items-center space-x-6 ">
              <p className="text-sky-400 font-bold text-4xl">Height : </p>
              <p className="text-4xl font-semibold text-white">
                {pokemon?.height} m
              </p>
            </div>
            <div className="flex items-center space-x-6  ">
              <p className="text-pink-300 font-bold text-4xl">Weight : </p>
              <p className="text-4xl font-semibold text-white">
                {pokemon?.weight} kg
              </p>
            </div>
          </div>
          <div className="">
            <div className="text-orange-300 text-4xl font-semibold text-center">
              Abilities
            </div>
            {pokemon.abilities && (
              <div className="grid grid-cols-2  ">
                <p className="text-4xl font-semibold justify-self-center text-white">
                  {pokemon?.abilities[0].ability?.name}
                </p>
                <p className="text-4xl font-semibold justify-self-center text-white">
                  {pokemon?.abilities[1]?.ability?.name}
                </p>
              </div>
            )}
          </div>
          <div>
            <PokiType pokemon={pokemon} />
          </div>
        </div>
      </div>
    </Html>
  );
};

export default PokiDetail;
