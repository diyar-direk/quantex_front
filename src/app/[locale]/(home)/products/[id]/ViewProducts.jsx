"use client";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import PostView from "@/components/posts/PostViewS2";
import { endPoints } from "@/constants/endPoints";
import APIClient from "@/utils/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import PostSideBar from "./PostSideBar";
import Skeleton from "@/components/skeleton/Skeleton";
import HandleError from "@/components/error/HandleError";
import "react-quill-new/dist/quill.snow.css";

const api = new APIClient(endPoints.posts.all);

const ViewProducts = () => {
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
      <main className="container main-section post-view-s2-container">
        <PostView data={data} />
        <PostSideBar data={data} />
      </main>
    </>
  );
};

export default ViewProducts;
