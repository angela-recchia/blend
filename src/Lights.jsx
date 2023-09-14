import { Trail, useFBO, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useAnimate, useMotionValue, useSpring } from "framer-motion";
import { useControls } from "leva";
import React, { useEffect, useRef, useState } from "react";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import * as THREE from "three";
const Lights = () => {
  const light = useRef();
  const testRef = useRef();

  const { scene } = useThree();

  // const light = new DirectionalLight(0xffffff);
  // const helper = new DirectionalLightHelper(light, 5);
  // scene.add(helper);

  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const controls = animate(0, 4, {
      duration: 3,
      delay: 3,
      onUpdate(value) {
        setIntensity(value);
      },
    });
  }, []);

  const three = useThree();
  const target = useFBO({ stencilBuffer: false });
  const quadPlaneGeo = new THREE.PlaneGeometry(
    three.viewport.width,
    three.viewport.height
  );
  const quadPlaneMat = new THREE.ShaderMaterial({
    uniforms: {
      sampler: { value: null },
    },
    vertexShader: `
    varying vec2 vUv;

    void main () {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vUv = uv;
    }
  `,
    fragmentShader: `
  uniform sampler2D sampler;
  varying vec2 vUv;

  void main () {
    vec4 inputColor = texture2D(sampler, vUv);
    gl_FragColor = inputColor;
  
  }
`,
  });

  const quadScene = new THREE.Scene();
  const quad = new THREE.Mesh(quadPlaneGeo, quadPlaneMat);
  quadScene.add(quad);

  const position = useControls("Directional Light Position", {
    x: { value: 10, min: -100, max: 1000, step: 1 },
    y: { value: 10, min: -100, max: 1000, step: 1 },
    z: { value: 10, min: -100, max: 1000, step: 1 },
  });

  useFrame(({ clock, pointer, viewport, gl, camera }) => {
    light.current.position.x = (pointer.x * viewport.width) / 2;
    light.current.position.y = (pointer.y * viewport.height) / 2;

    testRef.current.position.x = (pointer.x * viewport.width) / 2;
    testRef.current.position.y = (pointer.y * viewport.height) / 2;

    customShader.uniforms.time.value = clock.getElapsedTime();

    // gl.setRenderTarget(target);
    // gl.render(scene, camera);

    // gl.setRenderTarget(null);

    // quadPlaneMat.uniforms.sampler.value = target.texture;

    // gl.render(quadScene, camera);
  });

  useHelper(light, THREE.PointLightHelper, "cyan");

  const customShader = {
    uniforms: {
      color: { type: "v", value: undefined },
      color2: { type: "v", value: undefined },
      time: { type: "f", value: 0 },
    },

    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
  
      void main () {
        vUv = uv;
        vNormal = normal;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPos;
        vPosition = (projectionMatrix * mvPos).xyz;
      }
    `,

    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float time;

      float inverseFalloff(float x){
        // 10 is a good number, but you can also try "iMouse.y" to test values
        float const1 = 1000.0;
        float xSq = x*x;
        return (1.0-xSq)/(const1*xSq+1.0);
    }

      void main() {
        float dist = distance(vUv, vec2(0.5));
        // 1/(1+x*x)

        // float circle = smoothstep(.03, .0, dist);
        float circle = inverseFalloff(dist);
        
        gl_FragColor = vec4(1.,1.,1.,  circle);
      }
    `,
  };
  return (
    <>
      <mesh ref={testRef} position-x={1}>
        <planeGeometry args={[7, 7]} />
        <shaderMaterial args={[customShader]} transparent={true} />
      </mesh>

      <pointLight
        position={[0, 0, 0.5]}
        castShadow
        ref={light}
        intensity={intensity}
        color={"#FDEFCD"}
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
        intensity={intensity}
      />
    </>
  );
};

export default Lights;
