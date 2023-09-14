import {
  Box,
  Center,
  Environment,
  Html,
  OrbitControls,
  Plane,
  Sphere,
  Text,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import VirtualScroll from "virtual-scroll";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Lights from "../Lights";
import { PiramidTable } from "../Models/PiramidTable";
import { SpiralStair } from "../Models/SpiralStair";
import { motion } from "framer-motion";
import { useControls } from "leva";

const Stair = () => {
  const ref = useRef();
  const sphereRef = useRef();

  const position = useControls("Stair Position", {
    x: { value: 1, min: -10, max: 10, step: 0.5 },
    y: { value: 0, min: -10, max: 10, step: 0.5 },
    z: { value: -0.5, min: -10, max: 10, step: 0.5 },
  });

  const rotation = useControls("Stair rotation", {
    x: { value: 1, min: -10, max: 10, step: 0.1 },
    y: { value: 1, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });
  return (
    <>
      <group
        position={[1, -1, -0.5]}
        rotation={[0, 0, 0]}
        ref={ref}
        dispose={null}
      >
        <Center>
          <SpiralStair />
        </Center>
      </group>
    </>
  );
};

const Scene = () => {
  const [isEntrance, setIsEntrance] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntrance(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <motion.h1
        layout
        data-entrance={isEntrance}
        transition={{
          type: "keyframes",
          duration: 2,
        }}
      >
        BLEND
      </motion.h1>
      <div className="titleWrapper"></div>
      <Canvas
        camera={{ near: 0.1, far: 1000, position: [0, 0, 3] }}
        shadows={true}
      >
        <Html fullscreen>
          <motion.main>
            {/* <div className="titleWrapper">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{
                y: "0%",
                transition: {
                  duration: 1,
                  delay: 1,
                },
              }}
            >
              BLEND
            </motion.h1>
          </div> */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 5, duration: 4 } }}
              className="scroll"
            >
              SCROLL
            </motion.div>
          </motion.main>
        </Html>

        <Environment files="./studio_env.hdr" blur={1} />
        {/* <OrbitControls /> */}

        <Lights />
        <Stair />
        {/* <Text color={"white"} scale={[0.5, 0.5, 0.5]} position={[0, 0, 1]}>
        BLEND
      </Text> */}
      </Canvas>
    </>
  );
};

export default Scene;
