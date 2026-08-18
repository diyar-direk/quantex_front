import DBkeys from "@/constants/DBkeys";
import dateFormatter from "@/utils/dateFormatter";
import imgServerSrc from "@/utils/imgServerSrc";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "./card.css";
import { categories } from "@/constants/enums";
import { useTranslations } from "next-intl";

const Card1 = ({ data }) => {
  const text = new DOMParser()
    .parseFromString(data?.content, "text/html")
    .body.textContent.trim();
  const t = useTranslations();

  return (
    <div
      className="card card-padding"
      style={{ "--main-color": categories[data?.category].color }}
    >
      <div className="card-cover">
        <Image
          src={imgServerSrc(data?.image)}
          alt={data?.title}
          width={100}
          height={100}
          unoptimized
        />
      </div>
      <div className="card-body">
        <div className="card-info">
          <div className="btn-category">
            <FontAwesomeIcon icon={categories[data?.category].icon} />
            <p>{t(`enums.${data?.category}.title`)}</p>
          </div>
          <div className="btn-category">
            <FontAwesomeIcon icon={faClock} />
            {dateFormatter(data?.[DBkeys.createdAt], "fullDate")}
          </div>
        </div>
        <h2 className="two-line-ellipsis"> {data?.title} </h2>
        <p className="one-line-ellipsis"> {text} </p>
      </div>
    </div>
  );
};

export default Card1;
