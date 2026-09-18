"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const HeroObject = () => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += 0.004;

    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.15}
      floatIntensity={0.25}
    >
      <mesh ref={meshRef}>
        <boxGeometry args={[1.8, 0.9, 1]} />

        <meshStandardMaterial
          color="#181818"
          metalness={0.9}
          roughness={0.18}
        />
      </mesh>
    </Float>
  );
};

const Road = () => {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1.1, 0]}
    >
      <planeGeometry args={[12, 5]} />

      <meshStandardMaterial
        color="#080808"
        metalness={0.75}
        roughness={0.25}
      />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{
          position: [0, 1.1, 5.8],
          fov: 42,
        }}
        dpr={[1, 1.5]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />

        <directionalLight
          position={[4, 5, 4]}
          intensity={2}
        />

        <pointLight
          position={[2, 1, 2]}
          intensity={5}
          distance={8}
          color="#ff3333"
        />

        <pointLight
          position={[-3, 2, 1]}
          intensity={3}
          distance={7}
          color="#ffffff"
        />

        {/* Environment */}
        <Environment preset="city" />

        {/* Objects */}
        <HeroObject />

        <Road />
      </Canvas>
    </div>
  );
};

export default HeroScene;