import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  useGLTF,
  Text,
  Sparkles,
  Cloud,
  useHelper,
  Text3D,
} from "@react-three/drei";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import * as THREE from "three";
import PokiName from "../htmlPage/pokiName";
import PokiStats from "../htmlPage/pokiStats";
import PokiType from "../htmlPage/pokiType";
import PokiDetail from "../htmlPage/pokiDetail";

// const url =
//   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf";

const material = new THREE.MeshNormalMaterial()

export default function Experience() {
  const computer = useGLTF("./pokedex.glb");
  const light2 = useRef();
  const light = useRef();
  const [name, setName] = useState([]);

  useHelper(light, THREE.PointLightHelper, 3);
  let [num, setNum] = useState(0);
  // console.log("nummsa", num);
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=898");
    const d = await data.json();
    setName(d.results);
  };

  const [loadPoki, setLoadPoki] = useState(false);

  const [pokemon, setPokemon] = useState({});

  const fetchPoke = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num + 1}`);
    const data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPoke();
    fetchData();
    // const val = localStorage.getItem("num",)
  }, []);

  return (
    <>
      {/* <Environment preset="city" /> */}

      <Sparkles count={500} size={3} speed={0.3} scale={10} color={"#ffffff"} />
      {/* <Cloud/> */}

      <color args={["black"]} attach="background" />

      <OrbitControls makeDefault />
      {/* <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.95]}
          config={{ mass: 2, tension: 200 }}
          // snap={{ mass: 4, tension: 400 }}
        > */}
      {/* <ambientLight intensity={0.1}/> */}
      {/* <OrbitControls> */}
      <Float rotationIntensity={0.4}>
        {/* <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ffffff"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          /> */}
        {/* <pointLight  intensity={4.5} ref={light} position={[-1, 0, 1]} color={"#1457ff"} /> */}
        <spotLight
          intensity={5.5}
          ref={light2}
          position={[-1, 0, -3]}
          color={"gray"}
        />
        {/* <pointLightHelper light={light}></pointLightHelper> */}
        <directionalLight
          ref={light2}
          castShadow
          position={[-4, 2, 1.5]}
          intensity={2.5}
          shadow-normalBias={0.04}
        />
        {/* <ambientLight intensity={0.5} /> */}
        <primitive object={computer.scene} position-x={1.0} position-y={-0.3} scale={0.5} rotation-y={0}>
          <Html
            transform
            wrapperClass="htmlScreen"
            // prepend
            fullscreen
            occlude="blending"
            // occlude
            // distanceFactor={0.94}
            // position={[0, 1.56, -1.4]}
            distanceFactor={0.94}
            position={[-2.5, 1.12, -0.2]}
            // rotation-x={-0.256}
          >
            <div className="relative">
              {loading && (
                <p className="text-[100px] absolute top-24 left-14 z-50 text-white">
                  loading...
                </p>
              )}
              <picture>
                <img
                  src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
                    num + 1
                  }.svg`}
                  alt=""
                  loading="lazy"
                  onLoad={() => {
                    setLoading(false);
                  }}
                />
              </picture>
            </div>

            {/* <iframe
                    src="https://trojanstore.vercel.app/"
                    
                  ></iframe> */}
          </Html>
          <Html
            transform
            wrapperClass="Screen"
            // distanceFactor={0.94}
            // position={[0, 1.56, -1.4]}
            distanceFactor={1.5}
            zIndexRange={[100, 0]}
            position={[1.8, -2.55, -0.3]}
            // rotation-x={-0.256}
          >
            <div>
              <p
                onClick={() => {
                  setLoading(true);
                  num <= 0 ? setLoading(false) : setNum(--num);
                  fetchPoke();
                }}
                style={{ fontSize: "50px", cursor: "pointer" }}
                className="border shadow-md shadow-white"
              >
                previous
              </p>
            </div>
          </Html>
          <Html
            transform
            wrapperClass="Screen"
            // distanceFactor={0.94}
            // position={[0, 1.56, -1.4]}
            distanceFactor={1.5}
            zIndexRange={[100, 0]}
            position={[3.76, -2.55, -0.3]}
            // rotation-x={-0.256}
          >
            <div>
              <p
                onClick={() => {
                  setLoading(true);
                  setNum(++num);
                  fetchPoke();
                }}
                style={{ fontSize: "50px", cursor: "pointer" }}
              >
                next
              </p>
            </div>
          </Html>
          <PokiDetail pokemon={pokemon} />
          <PokiStats pokemon={pokemon} />
          <PokiName name={name[num]?.name} />
        </primitive>
        {/* <Text3D
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          position={[2, 0.75, 0.75]}
          rotation-y={-1.25}
        >
          sdjysdf
        </Text3D> */}
         <Text3D
                material={ material }
                position={[-3.4, 0, 1.5]}
                font="./fonts/helvetiker_regular.typeface.json"
                size={ 0.5 }
                height={ 0.2 }
                curveSegments={ 24 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0.001 }
                bevelSegments={ 6 }
                rotation-y={1.25}
            >
                POKE DEX
            </Text3D>
        {/* <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            //   children={"REDDY\rROHIT"}
            maxWidth={2}
            textAlign={"center"}
          >
            TROJAN STORE
            <Text>by: REDDY ROHIT SIVA SAI</Text>
          </Text> */}
      </Float>
      {/* </OrbitControls> */}
      {/* </PresentationControls> */}

      {/* <ContactShadows position-y={-1.4} opacity={0.8} blur={2.4} scale={8} /> */}
    </>
  );
}

// -2.1
// 1.5
