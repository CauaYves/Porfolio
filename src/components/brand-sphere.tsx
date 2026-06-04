"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useRef } from "react";
import {
  AdditiveBlending,
  BackSide,
  DoubleSide,
  type Group,
  type Mesh,
  TextureLoader,
} from "three";

function BrandOrb() {
  const groupRef = useRef<Group>(null);
  const logoRef = useRef<Mesh>(null);
  const logoTexture = useLoader(TextureLoader, "/public/y.svg");

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.18;
      groupRef.current.rotation.x = Math.sin(elapsed * 0.42) * 0.08;
    }

    if (logoRef.current) {
      logoRef.current.position.z = Math.sin(elapsed * 1.2) * 0.05;
      logoRef.current.rotation.z = Math.sin(elapsed * 0.65) * 0.035;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.75, 96, 96]} />
        <meshPhysicalMaterial
          color="#3d60e0"
          roughness={0.16}
          metalness={0.08}
          transmission={0.28}
          thickness={1.35}
          transparent
          opacity={0.23}
          clearcoat={1}
          clearcoatRoughness={0.08}
          depthWrite={false}
        />
      </mesh>

      <mesh scale={1.006}>
        <sphereGeometry args={[1.75, 48, 48]} />
        <meshBasicMaterial color="#8fa2ff" wireframe transparent opacity={0.12} />
      </mesh>

      <mesh scale={1.025}>
        <sphereGeometry args={[1.75, 96, 96]} />
        <meshBasicMaterial
          color="#00229e"
          side={BackSide}
          transparent
          opacity={0.18}
          blending={AdditiveBlending}
        />
      </mesh>

      <mesh ref={logoRef} position={[0, 0, 0.18]}>
        <planeGeometry args={[2.18, 1.46]} />
        <meshBasicMaterial
          map={logoTexture}
          transparent
          side={DoubleSide}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export function BrandSphere() {
  return (
    <div className="relative aspect-square min-h-[320px] w-full max-w-[520px] overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_48%,rgba(61,96,224,0.28),rgba(0,34,158,0.1)_42%,transparent_68%)] shadow-2xl shadow-[#00229e]/30 md:min-h-[430px]">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 4, 4]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-3, -2, 3]} intensity={1.8} color="#3d60e0" />
        <pointLight position={[0, 2.8, -2]} intensity={2} color="#8fa2ff" />
        <Suspense fallback={null}>
          <BrandOrb />
        </Suspense>
      </Canvas>
      <Image
        src="/public/y.svg"
        alt="Símbolo da marca Cauã Yves"
        width={240}
        height={160}
        priority
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[48%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_22px_58px_rgba(143,162,255,0.55)]"
      />
    </div>
  );
}
