import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Animations from "../animations/Animations";

const AboutUsCards = ({ title, desc, icon }) => {
  return (
    <Animations type="right-left-in">
      <div className={`about-card`}>
        <span className="card-border"></span>
        <FontAwesomeIcon icon={icon} className="icon" />
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </Animations>
  );
};

export default AboutUsCards;
