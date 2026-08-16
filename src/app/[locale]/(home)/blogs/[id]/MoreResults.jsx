import Animations from "@/components/animations/Animations";
import Card2 from "@/components/cards/Card2";
import RepeatChildren from "@/components/RepeatChildren";
import Skeleton from "@/components/skeleton/Skeleton";
import DBkeys from "@/constants/DBkeys";
import { endPoints } from "@/constants/endPoints";
import { postTypes } from "@/constants/enums";
import { pagesActionRouts } from "@/constants/pages";
import { useFetchData } from "@/hooks/useFetchData";
import { Link } from "@/i18n/navigation";

const MoreResults = ({ id, category }) => {
  const { data, isLoading } = useFetchData({
    endPoints: endPoints.posts.all,
    type: postTypes.blog.value,
    [DBkeys.limit]: 4,
    "id[notIn][]": id,
    category,
  });

  if (isLoading)
    return (
      <div className="grid-2 more-results">
        <RepeatChildren count={4}>
          <Skeleton height="300px" />
        </RepeatChildren>
      </div>
    );

  console.log(id);

  if (!data?.totalCount) return;

  return (
    <>
      <h1 className="more-results">SIMILAR results</h1>
      <div className="grid-4">
        {data?.data?.map((e) => (
          <Animations key={e[DBkeys.id]}>
            <Link href={pagesActionRouts.blogs(e[DBkeys.id])}>
              <Card2 data={e} />
            </Link>
          </Animations>
        ))}
      </div>
    </>
  );
};

export default MoreResults;
