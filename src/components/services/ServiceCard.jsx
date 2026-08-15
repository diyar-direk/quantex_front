import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import Animations from "../animations/Animations";

const ServiceCard = ({ icon, title, subTitle, tags, theme }) => {
  return (
    <Animations type="fade-in">
      <div
        className={`service-card`}
        style={theme ? { "--main-color": theme } : {}}
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
    </Animations>
  );
};

export default ServiceCard;
