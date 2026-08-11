"use client";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { endPoints } from "@/constants/endPoints";
import APIClient from "@/utils/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import IconButton from "@/components/buttons/IconButton";
import { pagesActionRouts } from "@/constants/pages";
import PostView from "@/components/posts/PostView";
import { Link } from "@/i18n/navigation";

const api = new APIClient(endPoints.posts.all);

const ViewPost = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: [endPoints.posts.all, id],
    queryFn: () => api.getOne(id),
  });

  return (
    <>
      <Breadcrumbs replace={[{ from: id, text: data?.title }]} />
      <main className="dashboard-main">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link href={pagesActionRouts.dashboard.posts.update(id)}>
            <IconButton
              icon={faPenToSquare}
              title="update"
              color="update"
              styleType="transparent"
            />
          </Link>
        </div>
        <PostView data={data} />
      </main>
    </>
  );
};

export default ViewPost;
