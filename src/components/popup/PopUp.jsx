/**
 * @typedef {Object} divProps
 * @property {boolean} isOpen
 * @property {() => void} [onClose]
 */

import IconButton from "../buttons/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popups.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";

/**
 * @param {divProps & React.HTMLAttributes<HTMLDivElement>} props
 */
const PopUp = ({
  isOpen = false,
  onClose = () => {},
  className,
  children,
  ...props
}) => {
  const popupClassName = `popup ${className || ""}`;

  if (!isOpen) return;

  return (
    <div className="overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={popupClassName}
        {...props}
      >
        <div className="close-btn">
          <IconButton
            color="delete"
            styleType="transparent"
            title={"close"}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
