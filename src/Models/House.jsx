import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function House(props) {
  const { nodes, materials } = useGLTF("models/house.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.material_29}
            position={[214.728, 29.432, 119.171]}
            rotation={[-Math.PI / 2, 0, -0.671]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.material_31}
            position={[215.596, 18.404, 119.568]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.kucuk_minder}
            position={[109.446, 49.558, -48.287]}
            rotation={[-1.324, 0.467, 1.083]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.kucuk_minder}
            position={[141.032, 57.647, -132.791]}
            rotation={[-0.271, 0.333, 0.071]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.kucuk_minder}
            position={[112.786, 56.344, -125.785]}
            rotation={[-0.398, 0.859, 0.288]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.kucuk_minder}
            position={[182.931, 57.336, -131.401]}
            rotation={[-0.272, -0.34, -0.113]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.kucuk_minder}
            position={[211.909, 57.11, -138.774]}
            rotation={[-0.174, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.material_29}
            position={[107.768, 54.621, -138.246]}
            rotation={[-Math.PI / 2, 0, -0.281]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.Koltuk_leg}
            position={[211.841, 5.921, -100.813]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.Big_minder}
            position={[212.17, 59.544, -155.143]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.Big_minder}
            position={[134.179, 59.383, -154.873]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.Big_minder}
            position={[295.45, 30.144, -120.683]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials.Big_minder}
            position={[213.049, 30.088, -121.076]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.Big_minder}
            position={[134.165, 29.909, -121.122]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials.Big_minder}
            position={[119.231, 30.935, 9.231]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials.Koltuk_back}
            position={[212.077, 32.931, -117.64]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials.Koltuk_alt}
            position={[152.806, 16.627, -39.079]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_17.geometry}
            material={materials.Sehpa}
            position={[265, 32.4, -0.87]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_18.geometry}
            material={materials.Sehpa}
            position={[265, 16.167, -0.949]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_19.geometry}
            material={materials.Dekor}
            position={[273.3, 49.91, 4.418]}
            rotation={[-Math.PI / 2, 0, 0.907]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_20.geometry}
            material={materials.Dekor}
            position={[259.864, 39.159, -4.589]}
            rotation={[-Math.PI / 2, 0, 0.907]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_21.geometry}
            material={materials.Dekor}
            position={[414.527, 157.875, 84.742]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_22.geometry}
            material={materials.Dekor}
            position={[419.661, 159.129, 44.282]}
            rotation={[Math.PI / 2, 1.306, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_23.geometry}
            material={materials.Dekor}
            position={[419.661, 159.129, 20.754]}
            rotation={[Math.PI / 2, 1.306, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_24.geometry}
            material={materials.Dekor}
            position={[419.661, 159.129, -2.611]}
            rotation={[Math.PI / 2, 1.306, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_25.geometry}
            material={materials.Dekor}
            position={[414.527, 121.968, -63.172]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_26.geometry}
            material={materials.Dekor}
            position={[414.527, 115.782, -89.118]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_27.geometry}
            material={materials.Dekor}
            position={[413.5, 102.989, 78.636]}
            rotation={[Math.PI / 2, 1.306, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_28.geometry}
            material={materials.Konsol}
            position={[385.2, 4.865, 2.3]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_29.geometry}
            material={materials.Konsol}
            position={[378.166, 32.636, 2.53]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_30.geometry}
            material={materials.Konsol}
            position={[392.441, 62.794, 2.53]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_31.geometry}
            material={materials.Konsol}
            position={[410.9, 145.085, 46.017]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_32.geometry}
            material={materials.Konsol}
            position={[414.402, 109.134, -40.674]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_33.geometry}
            material={materials.Grass}
            position={[380.471, 38.679, 145.144]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_34.geometry}
            material={materials.Candle}
            position={[-103.858, 113.405, 11.206]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_35.geometry}
            material={materials.Candle}
            position={[-103.86, 102.069, 11.201]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_36.geometry}
            material={materials.Candle}
            position={[-103.858, 113.405, 61.209]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_37.geometry}
            material={materials.Candle}
            position={[-103.86, 102.069, 61.204]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_38.geometry}
            material={materials.Tabaklar}
            position={[-84.644, 95.199, -14.203]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_39.geometry}
            material={materials.Tabaklar}
            position={[-84.644, 94.591, -14.203]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_40.geometry}
            material={materials.Tabaklar}
            position={[-84.644, 93.647, -14.203]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_41.geometry}
            material={materials.Tabaklar}
            position={[-84.644, 95.199, 37.668]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_42.geometry}
            material={materials.Tabaklar}
            position={[-84.644, 94.591, 37.668]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_43.geometry}
            material={materials.Tabaklar}
            position={[-84.644, 93.647, 37.668]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_44.geometry}
            material={materials.Tabaklar}
            position={[-84.644, 95.199, 90.85]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_45.geometry}
            material={materials.Tabaklar}
            position={[-84.644, 94.591, 90.85]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_46.geometry}
            material={materials.Tabaklar}
            position={[-84.644, 93.647, 90.85]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_47.geometry}
            material={materials.Tabaklar}
            position={[-84.575, 92.857, -14.185]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_48.geometry}
            material={materials.Tabaklar}
            position={[-84.575, 92.857, 37.341]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_49.geometry}
            material={materials.Tabaklar}
            position={[-84.575, 92.857, 90.928]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_50.geometry}
            material={materials.Bar_Sandalye_Ayak}
            position={[-52.01, 46.42, -15.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_51.geometry}
            material={materials.Bar_Sandalye_Ayak}
            position={[-52.01, 46.42, 37.933]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_52.geometry}
            material={materials.Bar_Koltuk}
            position={[-46.234, 74.315, 91.095]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_53.geometry}
            material={materials.Bar_Koltuk}
            position={[-46.234, 74.315, 38.24]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_54.geometry}
            material={materials.Bar_Koltuk}
            position={[-46.234, 74.315, -15.342]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_55.geometry}
            material={materials.Bar_Sandalye_Ayak}
            position={[-52.01, 46.42, 91.57]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_56.geometry}
            material={materials.Mutfak_Zemin}
            position={[50.069, 9.455, 62.351]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_57.geometry}
            material={materials.Mutfak_Zemin}
            position={[22.753, 19.344, 93.368]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_58.geometry}
            material={materials.Mutfak_Zemin}
            position={[-86.658, 18.279, -3.222]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_59.geometry}
            material={materials.Mutfak_Zemin}
            position={[-76.048, 8.183, 2.957]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_60.geometry}
            material={materials.Cam_Duvar_Cerceve}
            position={[-81.335, 214.703, -214.808]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_61.geometry}
            material={materials.Cam_Duvar_Cerceve}
            position={[-81.335, 133.16, -214.808]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_62.geometry}
            material={materials.Cam_Duvar_Cerceve}
            position={[-81.138, 48.673, -207.688]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_63.geometry}
            material={materials.Cam_Duvar_Cerceve}
            position={[-81.302, 215.556, -214.808]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_64.geometry}
            material={materials.Cam_Duvar_Cerceve}
            position={[199.507, 199.169, -214.808]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_65.geometry}
            material={materials.Cam_Duvar_Cerceve}
            position={[199.507, 122.207, -214.808]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_66.geometry}
            material={materials.Cam_Duvar_Cerceve}
            position={[199.507, 44.263, -207.688]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_67.geometry}
            material={materials.Cam_Duvar_Cerceve}
            position={[199.507, 198.011, -214.808]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_68.geometry}
            material={materials.Cati_Dekor}
            position={[33.341, 301.158, 90.913]}
            rotation={[0, -0.2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_69.geometry}
            material={materials.Cati_Dekor}
            position={[85.259, 301.158, 90.913]}
            rotation={[0, -0.2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_70.geometry}
            material={materials.Cati_Dekor}
            position={[137.888, 301.158, 90.913]}
            rotation={[0, -0.2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_71.geometry}
            material={materials.Big_minder}
            position={[294.854, 59.015, -154.609]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_72.geometry}
            material={materials.Cati_Dekor}
            position={[39.425, 302.801, 91.442]}
            rotation={[0, 0.092, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_73.geometry}
            material={materials.Cati_Dekor}
            position={[61.216, 303.865, 90.798]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_74.geometry}
            material={materials.Cati_Dekor}
            position={[91.343, 302.801, 91.442]}
            rotation={[0, 0.092, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_75.geometry}
            material={materials.Cati_Dekor}
            position={[113.134, 303.865, 90.798]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_76.geometry}
            material={materials.Cati_Dekor}
            position={[143.972, 302.801, 91.442]}
            rotation={[0, 0.092, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_77.geometry}
            material={materials.Cati_Dekor}
            position={[165.764, 303.865, 90.798]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_78.geometry}
            material={materials.Cati_Dekor}
            position={[196.246, 302.801, 91.442]}
            rotation={[0, 0.092, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_79.geometry}
            material={materials.Cati_Dekor}
            position={[190.162, 301.158, 90.913]}
            rotation={[0, -0.2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_80.geometry}
            material={materials.Cati_Dekor}
            position={[218.037, 303.865, 90.798]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_81.geometry}
            material={materials.Glass_Cerceve}
            position={[-83.647, 140.01, -246.192]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_82.geometry}
            material={materials.Glass_Cerceve}
            position={[199.597, 129.549, -223.602]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_83.geometry}
            material={materials.Glass}
            position={[-284.131, 172.843, 170.419]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_84.geometry}
            material={materials.Glass}
            position={[-83.634, 144.831, -246.192]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_85.geometry}
            material={materials.Glass}
            position={[199.597, 133.774, -224.003]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_86.geometry}
            material={materials.Light}
            position={[-95.702, 178.801, 89.747]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_87.geometry}
            material={materials.Light}
            position={[-95.702, 178.801, -9.663]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_88.geometry}
            material={materials.Light}
            position={[218.037, 191.2, -9.663]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_89.geometry}
            material={materials.Light}
            position={[218.037, 191.2, 192.18]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_90.geometry}
            material={materials.Kitchen_Kabin}
            position={[-260.157, 198.846, -101.693]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_91.geometry}
            material={materials.Kitchen_Kabin}
            position={[-260.157, 198.846, -12.413]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_92.geometry}
            material={materials.Tezgah}
            position={[-254.637, 93.998, -49.846]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_93.geometry}
            material={materials.Musluk}
            position={[-271.753, 124.87, -92.624]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_94.geometry}
            material={materials.material_8}
            position={[-89.925, 63.787, 4.411]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_95.geometry}
            material={materials.fayans}
            position={[0, 102.029, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_96.geometry}
            material={materials.Kitchen_Kabin}
            position={[-260.157, 198.846, 76.866]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_97.geometry}
            material={materials.material}
            position={[-258.351, 29.909, -48.019]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_98.geometry}
            material={materials.Kitchen_Kabin}
            position={[-254.637, 133.855, -182.385]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_99.geometry}
            material={materials.Kitchen_Kabin}
            position={[-254.637, 62.27, -127.991]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_100.geometry}
            material={materials.Kitchen_Kabin}
            position={[-254.637, 79.115, -55.257]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_101.geometry}
            material={materials.Kitchen_Kabin}
            position={[-254.637, 62.27, 26.333]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_102.geometry}
            material={materials.Kitchen_Kabin}
            position={[-254.637, 62.27, 87.965]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_103.geometry}
            material={materials.Sutun}
            position={[-254.637, 244.868, -48.019]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_104.geometry}
            material={materials.Cati_Dekor}
            position={[7.876, 303.865, 90.798]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_105.geometry}
            material={materials.Sutun}
            position={[110.168, 302.218, -9.609]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_106.geometry}
            material={materials.Sutun}
            position={[110.168, 302.218, 191.167]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_107.geometry}
            material={materials.Sutun}
            position={[32.628, 162.482, -202.566]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_108.geometry}
            material={materials.Sutun}
            position={[378.69, 133.282, -202.566]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_109.geometry}
            material={materials.Sutun}
            position={[141.713, 337.67, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_110.geometry}
            material={materials.Sutun}
            position={[-70.946, 295.301, -9.771]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_111.geometry}
            material={materials.Sutun}
            position={[271.783, 295.263, -9.771]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_112.geometry}
            material={materials.Sutun}
            position={[-170.055, 150.636, 125.218]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_113.geometry}
            material={materials.Stairs_wood}
            position={[-175.308, 95.233, 174.208]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_114.geometry}
            material={materials.Stairs_wood}
            position={[-154.369, 84.057, 174.208]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_115.geometry}
            material={materials.Stairs_wood}
            position={[-133.333, 72.856, 174.208]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_116.geometry}
            material={materials.Stairs_wood}
            position={[-112.252, 61.707, 174.208]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_117.geometry}
            material={materials.Stairs_wood}
            position={[-91.215, 50.506, 174.208]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_118.geometry}
            material={materials.Stairs_wood}
            position={[-70.276, 39.33, 174.208]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_119.geometry}
            material={materials.Stairs_Direk}
            position={[-270.544, 70.406, 135.807]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_120.geometry}
            material={materials.Stairs_Direk}
            position={[-197.328, 70.406, 135.807]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_121.geometry}
            material={materials.Stairs_Direk}
            position={[-75.294, 26.472, 135.807]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_122.geometry}
            material={materials.Stairs_Direk}
            position={[-97.098, 31.891, 135.807]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_123.geometry}
            material={materials.Stairs_Direk}
            position={[-116.591, 36.151, 135.807]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_124.geometry}
            material={materials.Stairs_Direk}
            position={[-137.57, 42.336, 135.807]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_125.geometry}
            material={materials.Stairs_Direk}
            position={[-159.981, 51.722, 135.807]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_126.geometry}
            material={materials.Stairs_Direk}
            position={[-180.167, 61.228, 135.807]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_127.geometry}
            material={materials.Stairs_Direk}
            position={[-75.294, 26.472, 207.326]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_128.geometry}
            material={materials.Stairs_Direk}
            position={[-97.098, 31.891, 207.326]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_129.geometry}
            material={materials.Stairs_Direk}
            position={[-116.591, 36.151, 207.326]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_130.geometry}
            material={materials.Stairs_Direk}
            position={[-137.57, 42.336, 207.326]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_131.geometry}
            material={materials.Stairs_Direk}
            position={[-159.981, 51.722, 207.326]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_132.geometry}
            material={materials.Stairs_Direk}
            position={[-180.167, 61.228, 207.326]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_133.geometry}
            material={materials.Stairs_Direk}
            position={[-269.961, 45.948, 252.317]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_134.geometry}
            material={materials.Stairs_Direk}
            position={[-198.21, 45.948, 252.317]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_135.geometry}
            material={materials.Stairs}
            position={[-144.772, 70.162, 181.336]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_136.geometry}
            material={materials.Stairs_wood}
            position={[-49.239, 28.129, 174.208]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_137.geometry}
            material={materials.Floor}
            position={[28.716, 152.421, 15.288]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/house.glb");
