"use client";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

const AboutUsCards = ({ title, desc, icon }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    
  });

  return (
    <div className={`about-card ${inView ? "view" : ""}`} ref={ref}>
      <FontAwesomeIcon icon={icon} className="icon" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default AboutUsCards;
