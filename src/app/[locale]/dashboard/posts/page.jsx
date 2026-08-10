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
import Link from "next/link";
import DBkeys from "@/constants/DBkeys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import imgServerSrc from "@/utils/imgServerSrc";
import ImgViewPopup from "@/components/popup/ImgViewPopup";

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
        headerName: "title",
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
        name: "category",
        headerName: "category",
      },
      {
        name: "image",
        headerName: "image",
        getCell: ({ row }) => (
          <Image
            src={imgServerSrc(row.image)}
            alt={row.title}
            width={50}
            height={50}
            onClick={() => setViewImg(imgServerSrc(row.image))}
            style={{ borderRadius: "6px", cursor: "pointer" }}
          />
        ),
      },
      {
        name: "createdAt",
        headerName: "createdAt",
        sort: true,
        getCell: ({ row }) => dateFormatter(row.createdAt, "fullDate"),
      },
      {
        name: "updatedAt",
        headerName: "updatedAt",
        sort: true,
        getCell: ({ row }) => dateFormatter(row.updatedAt, "fullDate"),
      },
      {
        name: "actions",
        headerName: "actions",
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

  return (
    <>
      <Breadcrumbs />
      <main className="dashboard-main">
        <div className="table-container">
          <TableToolBar title={"posts"}>
            <Search setSearch={setSearch} />
            <Add path={pages.dashboard.posts.add} />
            <Delete
              data={data?.data}
              selectedItems={selectedItems}
              setPage={setPage}
              setSelectedItems={setSelectedItems}
              endPoint={endPoints.posts.all}
            />
            <Filters filters={filters} setFilters={setFilters} />
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
