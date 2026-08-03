import "./button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * @typedef {Object} IconButtonProps
 * @property {string} [className]
 * @property {React.ReactNode} [icon]
 * @property {string} [title]
 * @property {"top" | "bottom" | "left" | "right"} [placement]
 * @property {"body-color" | "secondry-color" | "main" | "delete" | "save" | "cancel" | "update" } [color]
 * @property {"contained" | "outlined" | "transparent"} [styleType]
 */

/**
 * @param {IconButtonProps & React.HTMLAttributes<HTMLButtonElement>} props
 */

const IconButton = ({
  children,
  className,
  title,
  placement = "bottom",
  color = "body-color",
  styleType = "contained",
  icon,
  ...props
}) => {
  const classNameMemo = `${className || ""} ${color} icon-button ${styleType}`;

  return (
    <button type={props.type || "button"} {...props} className={classNameMemo}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
      {title && <p className={`${placement} icon-button-hover`}> {title} </p>}
    </button>
  );
};

export default IconButton;
