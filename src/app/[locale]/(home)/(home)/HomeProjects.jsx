"use client";
import MainTitle from "@/components/main_title/MainTitle";
import Skeleton from "@/components/skeleton/Skeleton";
import { endPoints } from "@/constants/endPoints";
import { postTypes } from "@/constants/enums";
import { useFetchData } from "@/hooks/useFetchData";

const HomeProjects = () => {
  const { data, isLoading } = useFetchData({
    endPoints: endPoints.posts.all,
    type: postTypes.Project.value,
  });

  if (isLoading) return <Skeleton height="100px" />;

  if (!data?.limit) return;

  return (
    <main className="main-section container section-color posts">
      <MainTitle subTitle={"Lorem ipsum dolor sit"}>last projects</MainTitle>
    </main>
  );
};

export default HomeProjects;
