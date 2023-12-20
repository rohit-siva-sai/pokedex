'use client'
import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
// import Experience from "@/components/model/Experience.js";
import { useEffect } from "react";
import Experience from "./Experience";
// import { Environment } from "@react-three/drei";


export default function MainModel() {
  const [viewz, setViewz] = useState(4);

  useEffect(()=>{
    if (window.innerWidth <= 980) {
      setViewz(11);
    } else {
      setViewz(5.5);
    }
  },[viewz])

  return (
    <>
     <Suspense fallback={null}>
     <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [0.7, 1.0, viewz],
        }}
      >
        <Experience />
      </Canvas>
     </Suspense>
    </>
  );
}
