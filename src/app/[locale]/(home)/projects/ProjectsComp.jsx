"use client";
import Card from "@/components/cards/Card4";
import MainTitle from "@/components/main_title/MainTitle";
import PostsFilters from "@/components/posts/PostsFilters";
import RepeatChildren from "@/components/RepeatChildren";
import Skeleton from "@/components/skeleton/Skeleton";
import DBkeys from "@/constants/DBkeys";
import { endPoints } from "@/constants/endPoints";
import { postTypes } from "@/constants/enums";
import { pagesActionRouts } from "@/constants/pages";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { formatInputsData } from "@/utils/formatInputsData";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";

const ProjectsComp = () => {
  const [filters, setFilters] = useState({
    "title[contains]": "",
    sort: `-${DBkeys.createdAt}`,
    category: "",
  });

  const { data, loadMoreRef, isFetching } = useInfiniteFetch({
    endPoint: endPoints.posts.all,
    type: postTypes.Project.value,
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

  return (
    <>
      <MainTitle>our projects</MainTitle>
      <PostsFilters filters={filters} setFilters={setFilters} />
      {results?.total > 0 && (
        <h1 className="post-results" data-count={results?.total}>
          results
        </h1>
      )}

      <div className="grid-3">
        {results?.posts?.map((e) => (
          <Card data={e} key={e[DBkeys.id]} view={pagesActionRouts.projects} />
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
          <span>no results yet</span>
        </div>
      )}
    </>
  );
};

export default ProjectsComp;
