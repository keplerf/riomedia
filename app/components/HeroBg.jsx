"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Particles({ count = 160, mouse }) {
  const meshRef = useRef(null);

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      vel[i] = Math.random() * 0.004 + 0.001;
    }
    return [pos, vel];
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;
    const arr = meshRef.current.geometry.attributes.position.array;
    const mx = mouse.current.x * 12;
    const my = mouse.current.y * 7;
    for (let i = 0; i < count; i++) {
      // Keep original upward drift
      arr[i * 3 + 1] += velocities[i];
      if (arr[i * 3 + 1] > 7) arr[i * 3 + 1] = -7;
      // Subtle attraction toward mouse within radius
      const dx = mx - arr[i * 3];
      const dy = my - arr[i * 3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3 && dist > 0) {
        arr[i * 3] += (dx / dist) * 0.008;
        arr[i * 3 + 1] += (dy / dist) * 0.008;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#c8ff00"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function AccentParticles({ count = 30, mouse }) {
  const meshRef = useRef(null);

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3;
      vel[i] = Math.random() * 0.006 + 0.002;
    }
    return [pos, vel];
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;
    const arr = meshRef.current.geometry.attributes.position.array;
    const mx = mouse.current.x * 12;
    const my = mouse.current.y * 7;
    for (let i = 0; i < count; i++) {
      // Keep original upward drift
      arr[i * 3 + 1] += velocities[i];
      if (arr[i * 3 + 1] > 7) arr[i * 3 + 1] = -7;
      // Subtle attraction toward mouse within radius
      const dx = mx - arr[i * 3];
      const dy = my - arr[i * 3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 4 && dist > 0) {
        arr[i * 3] += (dx / dist) * 0.012;
        arr[i * 3 + 1] += (dy / dist) * 0.012;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#ca3507"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroBG() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      gl={{ alpha: true, antialias: false }}
      style={{ background: "transparent" }}
    >
      <Particles mouse={mouse} />
      <AccentParticles mouse={mouse} />
    </Canvas>
  );
}
