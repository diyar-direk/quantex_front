"use client";
import { useEffect, useRef } from "react";
import "./animations.css";
import { useInView } from "react-intersection-observer";

const Animations = ({
  children,
  type = "opacity",
  className = "",
  ...props
}) => {
  const containerRef = useRef();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      containerRef.current?.style.setProperty("overflow", "visible");
    }, 1000);

    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div
      className={`animations-container ${className}`}
      {...props}
      ref={containerRef}
    >
      <div ref={ref} className={`${type} ${inView ? "view" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Animations;
