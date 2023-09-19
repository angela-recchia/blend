import { Trail, useFBO, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useAnimate, useMotionValue, useSpring } from "framer-motion";
import { useControls } from "leva";
import React, { useEffect, useRef, useState } from "react";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import * as THREE from "three";
const Lights = () => {
  const light = useRef();

  // const light = new DirectionalLight(0xffffff);
  // const helper = new DirectionalLightHelper(light, 5);
  // scene.add(helper);

  const [intensity, setIntensity] = useState(0);

  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const _setPointer = (e) => {
      setPointer({
        x: e.clientX / e.view.innerWidth - 0.5,
        y: e.clientY / e.view.innerHeight - 0.5,
      });
    };
    document.addEventListener("mousemove", _setPointer);

    return () => {
      document.removeEventListener("mousemove", _setPointer);
    };
  }, []);
  useEffect(() => {
    const controls = animate(0, 4, {
      duration: 3,
      delay: 3,
      onUpdate(value) {
        setIntensity(value);
      },
    });
  }, []);

  const position = useControls("Directional Light Position", {
    x: { value: 10, min: -100, max: 1000, step: 1 },
    y: { value: 10, min: -100, max: 1000, step: 1 },
    z: { value: 10, min: -100, max: 1000, step: 1 },
  });

  useFrame(({ clock, viewport, gl, camera }) => {
    light.current.position.x = pointer.x * viewport.width;
    light.current.position.y = -pointer.y * viewport.height;
  });

  useHelper(light, THREE.PointLightHelper, "cyan");

  return (
    <>
      <pointLight
        position={[0, 0, 1.5]}
        castShadow
        ref={light}
        intensity={intensity * 2000}
        color={"#b7e6f9"}
      />

      {/* <ambientLight
        // position={[8, -4, 0]}
        // ref={light}
        intensity={intensity * 200}
        color={"red"}
      /> */}

      <directionalLight
        position={[4, 17, -63]}
        castShadow
        intensity={intensity * 10}
      />
    </>
  );
};

export default Lights;
