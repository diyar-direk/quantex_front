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

const PostView = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className="view-title"> {data?.title} </h1>
      <div className="card-view">
        <main className="main-view-section">
          {data?.image && (
            <div className="view-cover" onClick={() => setIsOpen(true)}>
              <Image
                src={"http://localhost:8000/images/test.png"}
                alt={data?.title}
                width={400}
                height={400}
              />
            </div>
          )}

          <div className="ql-container ql-snow">
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
          </div>
        </main>

        <aside className="view-sidebar">
          <div className="view-info">
            <article>
              <p className="key">
                <FontAwesomeIcon icon={faLayerGroup} /> category
              </p>
              <p className="value enum-style">{data?.category}</p>
            </article>
            <article>
              <p className="key">
                <FontAwesomeIcon icon={faClock} /> created at
              </p>
              <p className="value">
                {dateFormatter(data?.createdAt, "fullDate")}
              </p>
            </article>
            <article>
              <p className="key">
                <FontAwesomeIcon icon={faArrowsRotate} /> last update
              </p>
              <p className="value">
                {dateFormatter(data?.updatedAt, "fullDate")}
              </p>
            </article>
          </div>
          {data?.video && (
            <video
              src={imgServerSrc(data?.video)}
              controls
              width={"100%"}
              style={{ borderRadius: "6px" }}
            />
          )}
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
