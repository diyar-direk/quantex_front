"use client";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import PostView from "@/components/posts/PostView";
import { endPoints } from "@/constants/endPoints";
import APIClient from "@/utils/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import MoreResults from "./MoreResults";
import Skeleton from "@/components/skeleton/Skeleton";
import HandleError from "@/components/error/HandleError";

const api = new APIClient(endPoints.posts.all);
const ViewProject = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [endPoints.posts.all, id],
    queryFn: () => api.getOne(id),
  });

  if (isLoading)
    return (
      <div className="container main-section">
        <Skeleton height="500px" />
      </div>
    );

  if (error)
    return (
      <div className="container main-section">
        <HandleError error={error} refetch={refetch} />
      </div>
    );

  return (
    <>
      <Breadcrumbs replace={[{ from: id, text: data?.title }]} />
      <main className="container main-section">
        <PostView data={data} />
        <MoreResults id={id} category={data?.category} />
      </main>
    </>
  );
};

export default ViewProject;
