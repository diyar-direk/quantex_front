"use client";
import Button from "@/components/buttons/Button";
import {
  faBrain,
  faCode,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  return (
    <main className="home-landing">
      <section className="company-info container">
        <div className="service">
          <FontAwesomeIcon icon={faServer} />
          <h2>Software Development</h2>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faShieldHalved} />
          <h2>Software Development</h2>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faBrain} />
          <h2>Software Development</h2>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faCode} />
          <h2>Software Development</h2>
        </div>
      </section>
      <div className="landing-container container main-section">
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
          <Button btnStyleType="outlined">start now</Button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
