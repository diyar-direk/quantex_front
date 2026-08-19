import Animations from "@/components/animations/Animations";
import Card4 from "@/components/cards/Card4";
import RepeatChildren from "@/components/RepeatChildren";
import Skeleton from "@/components/skeleton/Skeleton";
import DBkeys from "@/constants/DBkeys";
import { endPoints } from "@/constants/endPoints";
import { postTypes } from "@/constants/enums";
import { pagesActionRouts } from "@/constants/pages";
import { useFetchData } from "@/hooks/useFetchData";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const MoreResults = ({ id, category }) => {
  const { data, isLoading } = useFetchData({
    endPoints: endPoints.posts.all,
    type: postTypes.Project.value,
    [DBkeys.limit]: 3,
    "id[notIn][]": id,
    category,
  });

  const t = useTranslations();

  if (isLoading)
    return (
      <div className="grid-3 more-results">
        <RepeatChildren count={3}>
          <Skeleton height="300px" />
        </RepeatChildren>
      </div>
    );

  if (!data?.totalCount) return;

  return (
    <>
      <h1 className="more-results">{t("posts.more_results")}</h1>
      <div className="grid-3">
        {data?.data?.map((e) => (
          <Animations key={e[DBkeys.id]} type="fade-in">
            <Link href={pagesActionRouts.projects(e[DBkeys.id])}>
              <Card4 data={e} />
            </Link>
          </Animations>
        ))}
      </div>
    </>
  );
};

export default MoreResults;
