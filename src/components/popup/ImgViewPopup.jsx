/**
 * @typedef {Object} divProps
 * @property {string} src
 * @property {() => void} [onClose]
 */

import { memo, useMemo } from "react";
import IconButton from "../buttons/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popups.css";
import { faClose, faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

/**
 * @param {divProps & React.HTMLAttributes<HTMLDivElement>} props
 */
const ImgViewPopup = ({
  src = false,
  onClose = () => {},
  className,
  imgProps,
  ...props
}) => {
  const popupClassName = useMemo(() => `popup ${className || ""}`, [className]);

  if (!src) return;

  return (
    <div className="overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={popupClassName}
        {...props}
      >
        <div className="close-btn gap-10">
          <a href={src} download={src} target="_blank">
            <IconButton
              color="save"
              styleType="transparent"
              title="download"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faDownload} />
            </IconButton>
          </a>
          <IconButton
            color="delete"
            styleType="transparent"
            title="close"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </IconButton>
        </div>
        <Image
          src={src}
          alt="view-img"
          {...imgProps}
          width={300}
          height={300}
          unoptimized
          className="pop-up-view-image"
        />
      </div>
    </div>
  );
};

export default memo(ImgViewPopup);
