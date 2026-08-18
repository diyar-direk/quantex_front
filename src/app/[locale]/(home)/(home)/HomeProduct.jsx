"use client";
import Animations from "@/components/animations/Animations";
import Button from "@/components/buttons/Button";
import Card from "@/components/cards/Card3";
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

const Homeproducts = () => {
  const { data, isLoading } = useFetchData({
    endPoints: endPoints.posts.all,
    type: postTypes.Announcement.value,
    [DBkeys.limit]: 2,
  });

  const t = useTranslations();

  if (isLoading)
    return (
      <main className="main-section container body-color">
        <div className="grid-2">
          <RepeatChildren count={2}>
            <Skeleton height="300px" />
          </RepeatChildren>
        </div>
      </main>
    );

  if (!data?.totalCount) return;

  return (
    <main className="main-section container body-color">
      <MainTitle subTitle={t("home.producte_sub_title")}>
        {t("pages.products")}
      </MainTitle>
      <div className="grid-2">
        {data?.data?.map((e) => (
          <Animations key={e[DBkeys.id]} type="right-left-in">
            <Link href={pagesActionRouts.products(e[DBkeys.id])}>
              <Card data={e} />
            </Link>
          </Animations>
        ))}
      </div>
      <div className="center" style={{ marginTop: "10px" }}>
        <Link href={pages.products}>
          <Button>
            {t("home.explorer_producte")} ({data?.totalCount})
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Homeproducts;
