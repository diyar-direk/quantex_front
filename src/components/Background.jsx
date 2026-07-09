"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground() {
  const myRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: myRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,

        color: 0x3f8cff,
        backgroundColor: "fff",

        points: 10,
        maxDistance: 20,
        spacing: 18,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={myRef}
      style={{
        width: "100%",
        height: "100vh",
      }}
    />
  );
}
