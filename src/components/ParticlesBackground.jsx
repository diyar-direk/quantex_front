"use client";

import { useAppContext } from "@/context/AppContext";
import { NextParticles, NextParticlesProvider } from "@tsparticles/nextjs";
import { useMemo } from "react";

const init = async (engine) => {
  const { loadSlim } = await import("@tsparticles/slim");
  await loadSlim(engine);
};

export default function ParticlesBackground() {
  const { isDark } = useAppContext();

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: isDark ? "#010007" : "#a8acb1",
        },
      },
      fpsLimit: 60,

      particles: {
        number: {
          value: 80,
        },

        links: {
          enable: true,
          color: isDark ? "#333a42" : "#94a3b8",
          distance: 100,
          opacity: 0.5,
          width: 1,
        },

        paint: {
          fill: {
            enable: true,
            color: {
              value: "#052147",
            },
          },
        },

        move: {
          enable: true,
          speed: 1,
        },

        size: {
          value: 2,
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
      },
    }),
    [isDark],
  );

  return (
    <>
      <div className={`grid-bg`} />
      <NextParticlesProvider init={init}>
        <NextParticles id="tsparticles" options={options} />
      </NextParticlesProvider>
    </>
  );
}
