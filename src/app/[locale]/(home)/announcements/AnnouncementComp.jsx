"use client";
import Animations from "@/components/animations/Animations";
import Card from "@/components/cards/Card1";
import MainTitle from "@/components/main_title/MainTitle";
import PostsFiltersS2 from "@/components/posts/PostsFiltersS2";
import RepeatChildren from "@/components/RepeatChildren";
import Skeleton from "@/components/skeleton/Skeleton";
import DBkeys from "@/constants/DBkeys";
import { endPoints } from "@/constants/endPoints";
import { postTypes } from "@/constants/enums";
import { pagesActionRouts } from "@/constants/pages";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { Link } from "@/i18n/navigation";
import { formatInputsData } from "@/utils/formatInputsData";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

const AnnouncementComp = () => {
  const [filters, setFilters] = useState({
    "title[contains]": "",
    sort: `-${DBkeys.createdAt}`,
    category: "",
  });

  const { data, loadMoreRef, isFetching } = useInfiniteFetch({
    endPoint: endPoints.posts.all,
    type: postTypes.Announcement.value,
    ...formatInputsData(filters),
    [DBkeys.limit]: 3,
  });

  const results = useMemo(
    () => ({
      posts: data?.pages?.flatMap((e) => e.data),
      total: data?.pages?.[0]?.totalCount,
    }),
    [data],
  );

  const t = useTranslations();

  return (
    <>
        <MainTitle>{t("pages.announcements")}</MainTitle>

      <PostsFiltersS2 filters={filters} setFilters={setFilters} />

      <h1 className="post-results" data-count={results?.total}>
        {t("actions.results")}
      </h1>

      <div className="grid-3">
        {results?.posts?.map((e) => (
          <Animations key={e[DBkeys.id]}>
            <Link href={pagesActionRouts.announcements(e[DBkeys.id])}>
              <Card data={e} />
            </Link>
          </Animations>
        ))}
        {isFetching && (
          <RepeatChildren count={3}>
            <Skeleton height="300px" />
          </RepeatChildren>
        )}
        <div ref={loadMoreRef} />
      </div>

      {results?.total === 0 && (
        <div className="no-results-yet">
          <FontAwesomeIcon icon={faInbox} />
          <span>{t("actions.no_results_yet")}</span>
        </div>
      )}
    </>
  );
};

export default AnnouncementComp;
