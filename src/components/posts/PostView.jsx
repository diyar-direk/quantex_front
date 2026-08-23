"use client";
import imgServerSrc from "@/utils/imgServerSrc";
import {
  faArrowsRotate,
  faClock,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ImgViewPopup from "../popup/ImgViewPopup";
import { useState } from "react";
import dateFormatter from "@/utils/dateFormatter";
import "./style.css";
import DBkeys from "@/constants/DBkeys";
import PostContent from "../editor/PostContent";
import { useTranslations } from "next-intl";
import { categories } from "@/constants/enums";

const PostView = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations();

  return (
    <>
      <h1 className="view-title"> {data?.title} </h1>
      <div className="card-view">
        <main className="main-view-section" style={{ maxWidth: "100%" }}>
          {data?.image && (
            <div className="view-cover" onClick={() => setIsOpen(true)}>
              <Image
                src={imgServerSrc(data?.image)}
                alt={data?.title}
                width={400}
                height={400}
                unoptimized
              />
            </div>
          )}

          <PostContent content={data?.content} />
        </main>

        <aside className="view-sidebar">
          {data?.video && (
            <video
              src={imgServerSrc(data?.video)}
              controls
              width={"100%"}
              style={{ borderRadius: "6px" }}
            />
          )}
          <div className="view-info">
            <article>
              <p className="key">
                <FontAwesomeIcon icon={faLayerGroup} /> {t("posts.category")}
              </p>
              <p
                className="value"
                style={{ color: categories[data?.category]?.color }}
              >
                {t(`enums.${data?.category}.title`)}
              </p>
            </article>
            <article>
              <p className="key">
                <FontAwesomeIcon icon={faClock} /> {t("actions.created_at")}
              </p>
              <p className="value">
                {dateFormatter(data?.[DBkeys.createdAt], "fullDate")}
              </p>
            </article>
            <article>
              <p className="key">
                <FontAwesomeIcon icon={faArrowsRotate} />
                {t("actions.updated_at")}
              </p>
              <p className="value">
                {dateFormatter(data?.[DBkeys.updatedAt], "fullDate")}
              </p>
            </article>
          </div>
        </aside>
      </div>
      <ImgViewPopup
        src={isOpen && imgServerSrc(data?.image)}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default PostView;
