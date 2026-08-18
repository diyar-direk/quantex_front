"use client";
import Button from "@/components/buttons/Button";
import Card from "@/components/cards/Card4";
import MainTitle from "@/components/main_title/MainTitle";
import RepeatChildren from "@/components/RepeatChildren";
import Skeleton from "@/components/skeleton/Skeleton";
import DBkeys from "@/constants/DBkeys";
import { endPoints } from "@/constants/endPoints";
import { postTypes } from "@/constants/enums";
import { pages, pagesActionRouts } from "@/constants/pages";
import { useFetchData } from "@/hooks/useFetchData";
import { Link } from "@/i18n/navigation";
import Animations from "@/components/animations/Animations";
import { useTranslations } from "next-intl";

const HomeProjects = () => {
  const { data, isLoading } = useFetchData({
    endPoints: endPoints.posts.all,
    type: postTypes.Project.value,
    [DBkeys.limit]: 3,
  });

  const t = useTranslations();

  if (isLoading)
    return (
      <main className="main-section container section-color">
        <div className="grid-3">
          <RepeatChildren count={3}>
            <Skeleton height="300px" />
          </RepeatChildren>
        </div>
      </main>
    );

  if (!data?.totalCount) return;

  return (
    <main className="main-section container section-color">
      <MainTitle subTitle={t("home.project_sub_title")}>
        {t("pages.projects")}
      </MainTitle>
      <div className="grid-3">
        {data?.data?.map((e) => (
          <Animations key={e[DBkeys.id]} type="fade-in">
            <Link href={pagesActionRouts.projects(e[DBkeys.id])}>
              <Card data={e} />
            </Link>
          </Animations>
        ))}
      </div>
      <div className="center" style={{ marginTop: "10px" }}>
        <Link href={pages.projects}>
          <Button>
            {t("home.explorer_project")} ({data?.totalCount})
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default HomeProjects;
