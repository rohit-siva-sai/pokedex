import { Html } from "@react-three/drei";
import React from "react";

const PokiName = ({name}) => {
  return (
    <Html
      transform
     
      // distanceFactor={0.94}
      // position={[0, 1.56, -1.4]}
      distanceFactor={1.5}
      zIndexRange={[100, 0]}
      position={[-3.2,-2.75, -0.3]}
      // rotation-x={-0.256}
    >
      <div className="w-[450px]  h-[200px] border pointer-events-none">
       <div className="flex flex-col items-center mt-[20px] space-y-[20px] " >
        <p className="text-yellow-400 font-semibold text-4xl">Pokemon Name</p>
       <p className="text-6xl font-semibold text-white first-letter:uppercase">{name}</p>
       </div>
      </div>
    </Html>
  );
};

export default PokiName;
