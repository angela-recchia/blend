import { Box, Sphere, useFBO } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Trail = () => {
  const three = useThree();

  const testRef = useRef();

  const customShader = {
    uniforms: {
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
        float const1 = 100000.0;
        float xSq = x*x;
        return (1.0-xSq)/(const1*xSq+1.0);
    }

      void main() {

        float dist = distance(vUv, vec2(0.5));
        // 1/(1+x*x)

        // float circle = smoothstep(.03, .0, dist);
        float circle = inverseFalloff(dist);
        
        gl_FragColor = vec4(dist * 40.,  .9, .9,  circle);
        // gl_FragColor = vec4(inputColor * .975);
      }
    `,
  };

  let renderBufferA = useFBO({ stencilBuffer: false });
  let renderBufferB = useFBO({ stencilBuffer: false });
  let taaRenderBuffer = useFBO({ stencilBuffer: false });

  const quadPlaneGeo = new THREE.PlaneGeometry(
    three.viewport.width,
    three.viewport.height
  );
  const quadPlaneMat = new THREE.ShaderMaterial({
    uniforms: {
      sampler: { value: null },

      time: { value: 0 },
      mouse: { value: { x: 0, y: 0 } },
      screen: { value: { x: 0, y: 0 } },
    },
    vertexShader: `
      varying vec2 vUv;

      void main () {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
      }
    `,
    fragmentShader: /* glsl */ `




    uniform sampler2D sampler;
    varying vec2 vUv;
    uniform vec2 mouse;
    uniform float time;
    uniform vec2 screen;


    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //  x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}



    void main () {
      

      float a = snoise(vec3(vUv * 1.0, time * 0.1)) * 0.0032;
float b = snoise(vec3(vUv * 1.0, time * 0.1 + 100.0)) * 0.0032;

      vec4 vT = texture2D(sampler,vUv + vec2(a, b));


      vec4 color = vec4(0.0);
      float blurAmount = 3.;
      // Blur using a 3x3 kernel
      float stepSize = blurAmount / screen.x;
      for (float x = -2.0; x <= 2.0; x += 2.0) {
        for (float y = -2.0; y <= 2.0; y += 2.0) {
          vec2 offset = vec2(x, y) * stepSize;
          color += texture2D(sampler, vUv + offset + vec2(a,b)) * .95;
        }
      }
      color /= 9.0;

            vec2 coords = gl_FragCoord.xy / screen;

      float d = distance(coords, mouse) + 1.;

      float circle = smoothstep(5., 1., d * 1.);


      gl_FragColor = color * circle;
      
    
      // gl_FragColor = vec4(vT * circle);
    }
  `,
  });

  const quadScene = new THREE.Scene();
  const quad = new THREE.Mesh(quadPlaneGeo, quadPlaneMat);

  quadScene.add(quad);

  useFrame(({ clock, viewport, pointer, gl, camera, scene }) => {
    testRef.current.position.x = (pointer.x * viewport.width) / 2;
    testRef.current.position.y = (pointer.y * viewport.height) / 2;

    customShader.uniforms.time.value = clock.getElapsedTime();

    quadPlaneMat.uniforms.screen.value = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
    quadPlaneMat.uniforms.time.value = clock.getElapsedTime();
    quadPlaneMat.uniforms.mouse.value.x = pointer.x + 1;
    quadPlaneMat.uniforms.mouse.value.y = pointer.y + 1;

    gl.autoClearColor = false;
    gl.setRenderTarget(renderBufferA);
    gl.render(quadScene, camera);
    gl.render(scene, camera);

    gl.setRenderTarget(null);

    quadPlaneMat.uniforms.sampler.value = renderBufferA.texture;
    quadPlaneMat.uniforms.screen.value = {
      x: window.innerWidth,
      y: window.innerHeight,
    };

    gl.render(quadScene, camera);

    const temp = renderBufferA;
    renderBufferA = renderBufferB;
    renderBufferB = temp;
  }, 1);
  return (
    <>
      <mesh ref={testRef}>
        <planeGeometry args={[20, 20]} />
        <shaderMaterial args={[customShader]} transparent={true} />
      </mesh>
    </>
  );
};

export default Trail;
