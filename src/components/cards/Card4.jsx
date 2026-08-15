import DBkeys from "@/constants/DBkeys";
import dateFormatter from "@/utils/dateFormatter";
import imgServerSrc from "@/utils/imgServerSrc";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "./card.css";
import { categories } from "@/constants/enums";

const Card4 = ({ data }) => {
  const text = new DOMParser()
    .parseFromString(data?.content, "text/html")
    .body.textContent.trim();

  return (
    <div
      className="card"
      style={{ "--main-color": categories[data?.category].color }}
    >
      <div className="card-cover style-4">
        <Image
          src={imgServerSrc(data?.image)}
          alt={data?.title}
          width={100}
          height={100}
          unoptimized
        />
        <button className="category">
          <FontAwesomeIcon icon={categories[data?.category].icon} />
          {data?.category}
        </button>
      </div>
      <div className="card-body">
        <div className="btn-category">
          <FontAwesomeIcon icon={faClock} />
          {dateFormatter(data?.[DBkeys.createdAt], "fullDate")}
        </div>
        <h2 className="two-line-ellipsis"> {data?.title} </h2>
        <p className="one-line-ellipsis"> {text} </p>
      </div>
    </div>
  );
};

export default Card4;
