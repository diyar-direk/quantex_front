import RepeatChildren from "@/components/RepeatChildren";
import Skeleton from "@/components/skeleton/Skeleton";
import DBkeys from "@/constants/DBkeys";
import { endPoints } from "@/constants/endPoints";
import { postTypes } from "@/constants/enums";
import { pagesActionRouts } from "@/constants/pages";
import { useFetchData } from "@/hooks/useFetchData";
import { Link } from "@/i18n/navigation";
import dateFormatter from "@/utils/dateFormatter";
import imgServerSrc from "@/utils/imgServerSrc";
import { faNewspaper, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const PostSideBar = ({ data }) => {
  const { data: moreResults, isLoading } = useFetchData({
    endPoints: endPoints.posts.all,
    type: postTypes.Announcement.value,
    [DBkeys.limit]: 4,
    "id[notIn][]": data?.id,
    category: data?.category,
  });

  return (
    <aside className="post-s2-sidebar">
      {data?.video && (
        <section>
          <h3>
            <FontAwesomeIcon icon={faVideo} /> video
          </h3>
          <video src={imgServerSrc(data?.video)} controls />
        </section>
      )}

      <section>
        <h3>
          <FontAwesomeIcon icon={faNewspaper} /> simlar results
        </h3>
        {isLoading && (
          <RepeatChildren count={4}>
            <Skeleton height="20px" style={{ marginTop: "10px" }} />
          </RepeatChildren>
        )}

        {moreResults?.data?.map((e) => (
          <Link
            href={pagesActionRouts.announcements(e[DBkeys.id])}
            className="more-results-s2"
            key={e[DBkeys.id]}
          >
            <div className="image">
              <Image
                src={imgServerSrc(e.image)}
                alt="cover image"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <article>
              <h4 className="one-line-ellipsis">{e.title}</h4>
              <p> {dateFormatter(e[DBkeys.createdAt], "fullDate")} </p>
            </article>
          </Link>
        ))}
      </section>
    </aside>
  );
};

export default PostSideBar;
