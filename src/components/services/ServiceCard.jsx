"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ icon, title, subTitle, tags, theme }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div
      className={`service-card ${inView ? "view" : ""}`}
      style={theme ? { "--main-color": theme } : {}}
      ref={ref}
    >
      <FontAwesomeIcon icon={icon} className="icon" />
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <div className="tags">
        {tags?.map((e, i) => (
          <span key={e.text + i}>
            {e.icon && <FontAwesomeIcon icon={e.icon} />} {e.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
