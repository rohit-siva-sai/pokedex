import { Html } from '@react-three/drei'
import React from 'react'

const PokiStats = ({pokemon}) => {
  return (
    <Html
    transform
    // wrapperClass="stats"
    // distanceFactor={0.94}
    // position={[0, 1.56, -1.4]}
    distanceFactor={1.5}
    zIndexRange={[100, 0]}
    position={[2.76, 0, -0.3]}
    // rotation-x={-0.256}
  >
    <div className="w-[980px] bg-transparent h-[290px] border font-semibold text-white text-5xl pointer-events-none">
    {pokemon.stats && <div className="grid grid-cols-4 justify-items-center align-middle  ">
        <div className="flex space-x-12 w-54 h-36  items-center">
            <p className=" text-3xl bg-[#ef3f3f] p-3 min-w-0 rounded-full">HP</p>
            <p className="font-bold">{pokemon?.stats[0]?.base_stat}</p>
        </div>
        <div className="flex space-x-12 w-54 h-36  items-center">
            <p className=" text-3xl bg-[#FF994D] p-3 min-w-0 rounded-full">ATK</p>
            <p className="font-bold">{pokemon?.stats[1]?.base_stat}</p>
        </div>
        <div className="flex space-x-12 w-54 h-36  items-center">
            <p className=" text-3xl bg-[#eecd3d] p-3 min-w-0 rounded-full">DEF</p>
            <p className="font-bold">{pokemon?.stats[2]?.base_stat}</p>
        </div>
        <div className="flex space-x-12 w-54 h-36  items-center">
            <p className=" text-3xl bg-[#85DDFF] p-3 min-w-0 rounded-full">SpA</p>
            <p className="font-bold">{pokemon?.stats[3]?.base_stat}</p>
        </div>
        <div className="flex space-x-12 w-54 h-36  items-center">
            <p className=" text-3xl bg-[#96da83] p-3 min-w-0 rounded-full">SpD</p>
            <p className="font-bold">{pokemon?.stats[4]?.base_stat}</p>
        </div>
        <div className="flex space-x-12 w-54 h-36  items-center">
            <p className=" text-3xl bg-[#FB94A8] p-3 min-w-0 rounded-full">SPD</p>
            <p className="font-bold">{pokemon?.stats[5]?.base_stat}</p>
        </div>
        <div className="flex space-x-12 w-54 h-36 col-span-2 items-center">
            <p className=" text-3xl bg-[#88AAEA] p-3 min-w-0 rounded-full">TOTAL</p>
            <p className="font-bold">{pokemon.stats[0].base_stat + pokemon.stats[1].base_stat + pokemon.stats[2].base_stat + pokemon.stats[3].base_stat + pokemon.stats[4].base_stat + pokemon.stats[5].base_stat}</p>
        </div>
       
      
      </div>}
     
    </div>
  </Html>
  )
}

export default PokiStats
