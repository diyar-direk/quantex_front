"use client";
import Button from "@/components/buttons/Button";
import ParticlesBackground from "@/components/ParticlesBackground";
import "@/styles/home.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main className="home-landing container main-section">
        <div className="landing-container">
          <h1>
            welcome to <span>quantex</span> company
          </h1>
          <TypeAnimation
            sequence={[
              "Diyar",
              2000,
              "Test",
              2000,
              "Next.js Developer",
              2000,
              "React Developer",
              2000,
            ]}
            wrapper="span"
            speed={200}
            repeat={Infinity}
            cursor={true}
            className="typing-text"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolor repellat corporis, temporibus pariatur eaque soluta ratione
            reprehenderit fugiat quae. At culpa unde repellendus minima nemo
            ducimus ullam praesentium repellat?
          </p>
          <div className="btns">
            <Button>explorer our services</Button>
            <Button className="join" btnStyleType="outlined">
              start now
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
