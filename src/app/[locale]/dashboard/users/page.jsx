"use client";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Table from "@/components/table/Table";
import { endPoints } from "@/constants/endPoints";
import { pages } from "@/constants/pages";
import Add from "@/components/table_toolbar/Add";
import Delete from "@/components/table_toolbar/Delete";
import Filters from "@/components/table_toolbar/Filters";
import Search from "@/components/table_toolbar/Search";
import TableToolBar from "@/components/table_toolbar/TableToolBar";
import { useFetchData } from "@/hooks/useFetchData";
import dateFormatter from "@/utils/dateFormatter";
import { formatInputsData } from "@/utils/formatInputsData";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import DBkeys from "@/constants/DBkeys";

const columns = [
  {
    name: "username",
    sort: true,
    headerName: "username",
  },
  {
    name: DBkeys.createdAt,
    headerName: DBkeys.createdAt,
    sort: true,
    getCell: ({ row }) => dateFormatter(row[DBkeys.createdAt], "fullDate"),
  },
  {
    name: DBkeys.updatedAt,
    headerName: DBkeys.updatedAt,
    sort: true,
    getCell: ({ row }) => dateFormatter(row[DBkeys.updatedAt], "fullDate"),
  },
];

const AllUsers = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [sort, setSort] = useState("");

  const { data, isLoading, error, refetch } = useFetchData({
    endPoints: endPoints.users.all,
    page,
    "username[contains]": search,
    sort,
    ...formatInputsData(filters),
  });

  const { user } = useAuth();

  return (
    <>
      <Breadcrumbs />
      <main className="dashboard-main">
        <div className="table-container">
          <TableToolBar title={"users"}>
            <Search setSearch={setSearch} />
            <Add path={pages.dashboard.users.add} />
            <Delete
              data={data?.data}
              selectedItems={selectedItems}
              setPage={setPage}
              setSelectedItems={setSelectedItems}
              endPoint={endPoints.users.all}
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
            addBtnProps={{ href: pages.dashboard.users.add }}
            notSelectIf={(u) => user[DBkeys.id] === u[DBkeys.id]}
          />
        </div>
      </main>
    </>
  );
};

export default AllUsers;
