import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";

export function SpiralStair(props) {
  const { nodes, materials } = useGLTF("/models/spiral_stair_3.glb");

  const material = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0.1,
    color: "grey",
  });

  return (
    <group {...props} dispose={null} scale={0.1}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={material}
          scale={0.2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={material}
          scale={0.2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={material}
          scale={0.2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={material}
          scale={0.2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/spiral_stair_3.glb");
