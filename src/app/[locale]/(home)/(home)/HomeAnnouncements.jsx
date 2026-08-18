"use client";
import Animations from "@/components/animations/Animations";
import Button from "@/components/buttons/Button";
import Card from "@/components/cards/Card1";
import MainTitle from "@/components/main_title/MainTitle";
import RepeatChildren from "@/components/RepeatChildren";
import Skeleton from "@/components/skeleton/Skeleton";
import DBkeys from "@/constants/DBkeys";
import { endPoints } from "@/constants/endPoints";
import { postTypes } from "@/constants/enums";
import { pages, pagesActionRouts } from "@/constants/pages";
import { useFetchData } from "@/hooks/useFetchData";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const HomeAnnouncement = () => {
  const { data, isLoading } = useFetchData({
    endPoints: endPoints.posts.all,
    type: postTypes.Announcement.value,
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
      <MainTitle subTitle={t("home.announcement_sub_title")}>
        {t("pages.announcements")}
      </MainTitle>
      <div className="grid-3">
        {data?.data?.map((e) => (
          <Animations key={e[DBkeys.id]}>
            <Link href={pagesActionRouts.announcements(e[DBkeys.id])}>
              <Card data={e} />
            </Link>
          </Animations>
        ))}
      </div>
      <div className="center" style={{ marginTop: "10px" }}>
        <Link href={pages.announcements}>
          <Button>
            {t("home.explorer_announcement")} ({data?.totalCount})
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default HomeAnnouncement;
