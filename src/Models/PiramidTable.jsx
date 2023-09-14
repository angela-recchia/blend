import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PiramidTable(props) {
  const { nodes, materials } = useGLTF("/models/modern_pyramid_end_table.glb");
  console.log(materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Holder_End_Table_0.geometry}
        material={materials.End_Table}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pyramid_End_Table_0.geometry}
        material={materials.End_Table}
        position={[0, 45.055, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      /> */}
    </group>
  );
}

useGLTF.preload("/models/modern_pyramid_end_table.glb");
