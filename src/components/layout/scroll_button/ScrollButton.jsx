"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className="scroll-top-btn" onClick={scrollToTop}>
      <FontAwesomeIcon icon={faAnglesUp} />
    </div>
  );
};

export default ScrollButton;
