"use client";
import { memo, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./table.css";
import Paginations from "./Paginations";
import CloumnsVisible from "./CloumnsVisible";
import TableLoading from "./TableLoading";
import TabelError from "./TabelError";
import TableNoResults from "./TableNoResults";
import { usePathname } from "@/i18n/navigation";

/**
 * @typedef TableProps
 * @property {Array<object>} colmuns أعمدة الجدول
 * @property {boolean} selectable هل يمكن تحديد الصفوف
 * @property {object} addBtnProps
 * @property {boolean} loading حالة التحميل
 * @property {number} currentPage رقم الصفحة الحالية
 * @property {(page: number) => void} setPage دالة لتغيير الصفحة
 * @property {Array<object>} data بيانات الجدول
 * @property {string} error رسالة الخطأ للعرض
 * @property {()=>void} onRefetch  فنكشن لاعادة طلب البيانات في حال وجود خطأ
 * @property {number} dataLength عدد البيانات الكلي (لأجل الـ Pagination)
 * @property {(sort: any) => void} setSort دالة لتحديد الفرز
 * @property {Set<string|number>} selectedItems العناصر المحددة
 * @property {(items: Set<string|number>) => void} setSelectedItems دالة لتغيير العناصر المحددة
 */
/**
 * @param {TableProps} props
 */

const limit = 10;

const Table = ({
  colmuns = [],
  selectable,
  loading,
  currentPage,
  setPage,
  data,
  dataLength,
  setSort,
  selectedItems,
  setSelectedItems,
  error,
  onRefetch,
  addBtnProps,
  notSelectIf = () => {},
  sortBy,
}) => {
  const pathname = usePathname();

  const savedStatus = JSON.parse(localStorage?.getItem(pathname));

  const [columnsState, setColumnsState] = useState(() =>
    colmuns.map((col) => {
      const saved = savedStatus?.find((s) => s.name === col.name);
      return saved ? { ...col, hidden: saved.hidden } : col;
    }),
  );

  if (loading) return <TableLoading />;

  if (error) return <TabelError error={error} onRefetch={onRefetch} />;

  if (!data || data?.length === 0) return <TableNoResults {...addBtnProps} />;

  return (
    <>
      <div className="table-header">
        <article>
          <CloumnsVisible
            columns={columnsState}
            setColumns={setColumnsState}
            defaultColumns={colmuns}
            onRefetch={onRefetch}
          />
        </article>

        <div className="table">
          <table>
            <TableHeader
              selectable={selectable}
              setSelectedItems={setSelectedItems}
              column={columnsState}
              setSort={setSort}
              data={data}
              selectedItems={selectedItems}
              notSelectIf={notSelectIf}
              sortBy={sortBy}
            />
            <TableBody
              column={columnsState}
              data={data}
              selectable={selectable}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              notSelectIf={notSelectIf}
            />
          </table>
        </div>
      </div>
      <Paginations
        currentPage={currentPage}
        dataLength={dataLength}
        setPage={setPage}
        setSelectedItems={setSelectedItems}
        limit={limit}
      />
    </>
  );
};

export default memo(Table);
