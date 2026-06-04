"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { type RefObject, Suspense, useMemo, useRef } from "react";
import { AdditiveBlending, BackSide, type Group } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

function BrandOrb() {
  const groupRef = useRef<Group>(null);
  const logoRef = useRef<Group>(null);
  const elapsedRef = useRef(0);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    const elapsed = elapsedRef.current;

    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.18;
      groupRef.current.rotation.x = Math.sin(elapsed * 0.42) * 0.08;
    }

    if (logoRef.current) {
      logoRef.current.position.z = Math.sin(elapsed * 1.2) * 0.05;
      logoRef.current.rotation.z = Math.sin(elapsed * 0.65) * 0.035;
      logoRef.current.rotation.y = Math.sin(elapsed * 0.5) * 0.12;
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

      <LogoModel logoRef={logoRef} />
    </group>
  );
}

function LogoModel({ logoRef }: { logoRef: RefObject<Group | null> }) {
  const svg = useLoader(SVGLoader, "/public/y.svg");
  const logoShapes = useMemo(
    () => svg.paths.flatMap((path) => SVGLoader.createShapes(path)),
    [svg],
  );
  const extrudeSettings = useMemo(
    () => ({
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.55,
      bevelThickness: 0.8,
      curveSegments: 24,
      depth: 8,
    }),
    [],
  );
  const scale = 0.026;

  return (
    <group
      ref={logoRef}
      position={[-58.5 * scale, 39 * scale, 0.18]}
      scale={[scale, -scale, scale]}
    >
      {logoShapes.map((shape) => (
        <mesh key={shape.uuid}>
          <extrudeGeometry args={[shape, extrudeSettings]} />
          <meshPhysicalMaterial
            color="#3d60e0"
            emissive="#3d60e0"
            emissiveIntensity={0.34}
            roughness={0.18}
            metalness={0.18}
            clearcoat={0.95}
            clearcoatRoughness={0.1}
          />
        </mesh>
      ))}
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
    </div>
  );
}
