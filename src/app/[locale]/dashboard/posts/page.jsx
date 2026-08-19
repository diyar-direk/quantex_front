"use client";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Table from "@/components/table/Table";
import { endPoints } from "@/constants/endPoints";
import { pages, pagesActionRouts } from "@/constants/pages";
import Add from "@/components/table_toolbar/Add";
import Delete from "@/components/table_toolbar/Delete";
import Filters from "@/components/table_toolbar/Filters";
import Search from "@/components/table_toolbar/Search";
import TableToolBar from "@/components/table_toolbar/TableToolBar";
import { useFetchData } from "@/hooks/useFetchData";
import dateFormatter from "@/utils/dateFormatter";
import { formatInputsData } from "@/utils/formatInputsData";
import { useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";
import DBkeys from "@/constants/DBkeys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import imgServerSrc from "@/utils/imgServerSrc";
import ImgViewPopup from "@/components/popup/ImgViewPopup";
import SelectOptionInput from "@/components/inputs/SelectOptionInput";
import { categories, postTypes } from "@/constants/enums";
import { useTranslations } from "next-intl";

const AllPosts = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [sort, setSort] = useState("");

  const { data, isLoading, error, refetch } = useFetchData({
    endPoints: endPoints.posts.all,
    page,
    "title[contains]": search,
    sort,
    ...formatInputsData(filters),
  });

  const [viewImg, setViewImg] = useState(null);

  const columns = useMemo(
    () => [
      {
        name: "title",
        sort: true,
        headerName: "posts.title",
        getCell: ({ row }) => (
          <Link
            href={pagesActionRouts.dashboard.posts.view(row[DBkeys.id])}
            className="link-hover"
          >
            {row.title}
          </Link>
        ),
      },
      {
        name: "type",
        headerName: "posts.type",
        getCell: ({ row, t }) => t(`enums.${row.type}`),
      },
      {
        name: "category",
        headerName: "posts.category",
        getCell: ({ row, t }) => t(`enums.${row.category}.title`),
      },
      {
        name: "image",
        headerName: "posts.image",
        getCell: ({ row }) => (
          <Image
            src={imgServerSrc(row.image)}
            alt={row.title}
            width={50}
            height={50}
            onClick={() => setViewImg(imgServerSrc(row.image))}
            style={{ borderRadius: "6px", cursor: "pointer" }}
            unoptimized
          />
        ),
      },
      {
        name: DBkeys.createdAt,
        headerName: "actions.created_at",
        sort: true,
        getCell: ({ row }) => dateFormatter(row[DBkeys.createdAt], "fullDate"),
      },
      {
        name: DBkeys.updatedAt,
        headerName: "actions.updated_at",
        sort: true,
        getCell: ({ row }) => dateFormatter(row[DBkeys.updatedAt], "fullDate"),
      },
      {
        name: "actions",
        headerName: "tabel.actions",
        getCell: ({ row }) => (
          <div className="center gap-10">
            <Link
              href={pagesActionRouts.dashboard.posts.update(row[DBkeys.id])}
            >
              <Button btnStyleType="transparent" btnType="update">
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
            </Link>
            <Link href={pagesActionRouts.dashboard.posts.view(row[DBkeys.id])}>
              <Button btnStyleType="transparent" btnType="save">
                <FontAwesomeIcon icon={faEye} />
              </Button>
            </Link>
          </div>
        ),
      },
    ],
    [],
  );

  const t = useTranslations();

  return (
    <>
      <Breadcrumbs />
      <main className="dashboard-main">
        <div className="table-container">
          <TableToolBar title={t("pages.posts")}>
            <Search setSearch={setSearch} />
            <Add path={pages.dashboard.posts.add} />
            <Delete
              data={data?.data}
              selectedItems={selectedItems}
              setPage={setPage}
              setSelectedItems={setSelectedItems}
              endPoint={endPoints.posts.all}
            />
            <Filters filters={filters} setFilters={setFilters}>
              <SelectOptionInput
                label={t("posts.type")}
                notRequired
                onSelectOption={(e) =>
                  setFilters((p) => ({ ...p, type: e.value }))
                }
                options={Object.values(postTypes)?.map((e) => ({
                  text: t(`enums.${e.value}`),
                  value: e.value,
                  icon: e.icon,
                }))}
                value={filters?.type}
                placeholder={
                  filters?.type ? t(`eunms.${filters?.type}`) : t("actions.all")
                }
                customOptions={[
                  {
                    title: t("actions.all"),
                    onChange: () => setFilters((p) => ({ ...p, type: "" })),
                  },
                ]}
              />
              <SelectOptionInput
                label={t("posts.category")}
                notRequired
                onSelectOption={(e) =>
                  setFilters((p) => ({ ...p, category: e.value }))
                }
                options={Object.values(categories)?.map((e) => ({
                  text: t(`enums.${e.value}.title`),
                  value: e.value,
                  icon: e.icon,
                }))}
                value={filters?.category}
                placeholder={
                  filters?.category
                    ? t(`enums.${filters?.category}.title`)
                    : t("actions.all")
                }
                customOptions={[
                  {
                    title: t("actions.all"),
                    onChange: () => setFilters((p) => ({ ...p, category: "" })),
                  },
                ]}
              />
            </Filters>
          </TableToolBar>
          <Table
            currentPage={page}
            data={data?.data}
            dataLength={data?.totalCount}
            loading={isLoading}
            onRefetch={refetch}
            error={error}
            selectable
            setPage={setPage}
            setSort={setSort}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            colmuns={columns}
            sortBy={sort}
            addBtnProps={{ href: pages.dashboard.posts.add }}
          />
        </div>
      </main>
      <ImgViewPopup src={viewImg} onClose={() => setViewImg(null)} />
    </>
  );
};

export default AllPosts;
