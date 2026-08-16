import { useState } from "react";
import ImgViewPopup from "../popup/ImgViewPopup";
import "./view-s2.css";
import Image from "next/image";
import imgServerSrc from "@/utils/imgServerSrc";
import { categories } from "@/constants/enums";
import dateFormatter from "@/utils/dateFormatter";
import DBkeys from "@/constants/DBkeys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostContent from "../editor/PostContent";

const PostViewS2 = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return;

  return (
    <>
      <main className="view-post-s2">
        <div className="view-cover" onClick={() => setIsOpen(true)}>
          <Image
            src={imgServerSrc(data?.image)}
            alt={data?.title}
            width={400}
            height={400}
            unoptimized
          />
        </div>

        <section className="main-view-section">
          <button
            className="category"
            style={{ "--main-color": categories[data?.category]?.color }}
          >
            <FontAwesomeIcon icon={categories[data?.category]?.icon} />
            {data?.category}
          </button>
          <h1 className="title"> {data?.title} </h1>

          <div className="dates-container">
            <article>
              <p className="key">created at</p>
              <p> {dateFormatter(data?.[DBkeys.createdAt], "fullDate")} </p>
            </article>
            <article>
              <p className="key">last update</p>
              <p> {dateFormatter(data?.[DBkeys.updatedAt], "fullDate")} </p>
            </article>
          </div>

          <PostContent content={data?.content} />
        </section>

        <ImgViewPopup
          src={isOpen && imgServerSrc(data?.image)}
          onClose={() => setIsOpen(false)}
        />
      </main>
    </>
  );
};

export default PostViewS2;
