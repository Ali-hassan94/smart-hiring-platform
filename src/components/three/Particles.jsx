"use client";

import {
  Canvas,
} from "@react-three/fiber";

export default function Particles() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <ambientLight />

        <mesh>
          <sphereGeometry
            args={[1, 32, 32]}
          />

          <meshStandardMaterial
            wireframe
          />
        </mesh>
      </Canvas>
    </div>
  );
}