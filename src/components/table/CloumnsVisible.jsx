"use client";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/context/AuthContext";
import IconButton from "@/components/buttons/IconButton";
import Button from "@/components/buttons/Button";
import { usePathname } from "@/i18n/navigation";

const CloumnsVisible = ({ columns, setColumns, defaultColumns, onRefetch }) => {
  const [search, setSearch] = useState("");
  const { user } = useAuth();

  const pathname = usePathname();

  const updateRows = useCallback(
    (column) => {
      const updated = columns?.map((col) =>
        col.name === column.name ? { ...col, hidden: !col.hidden } : col,
      );
      setColumns(updated);

      const status = updated.map((e) => ({
        name: e.name,
        hidden: e.hidden || false,
      }));
      localStorage.setItem(pathname, JSON.stringify(status));
    },
    [columns, setColumns, pathname],
  );

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const bodyClick = () => setIsOpen(false);

    window.addEventListener("click", bodyClick);
    return () => window.removeEventListener("click", bodyClick);
  }, [isOpen]);

  const resetDefaultColumns = useCallback(() => {
    setIsOpen(false);
    setColumns(defaultColumns);
    localStorage.removeItem(pathname);
  }, [setColumns, defaultColumns, pathname]);

  return (
    <div className="relative">
      <IconButton title="Refetch" onClick={onRefetch}>
        <FontAwesomeIcon icon={faRotateRight} />
      </IconButton>

      <IconButton title="Columns" onClick={toggleOpen}>
        <FontAwesomeIcon icon={faEllipsis} />
      </IconButton>

      {isOpen && (
        <article
          onClick={(e) => e.stopPropagation()}
          className="columns-visible"
        >
          <input
            type="text"
            className="search"
            placeholder="Search columns..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          {columns?.map((column) => {
            const headerName = column.headerName;

            return (
              (!column.allowedTo || column.allowedTo?.includes(user?.role)) &&
              (!search ? (
                <label key={column.name} htmlFor={`column-${column.name}`}>
                  {headerName}
                  <input
                    type="checkbox"
                    id={`column-${column.name}`}
                    checked={!column.hidden}
                    onChange={() => updateRows(column)}
                  />
                </label>
              ) : (
                (column.name.includes(search) ||
                  headerName.includes(search)) && (
                  <label
                    key={column.name}
                    htmlFor={column.name}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {headerName}
                    <input
                      type="checkbox"
                      id={column.name}
                      checked={!column.hidden}
                      onChange={() => updateRows(column)}
                    />
                  </label>
                )
              ))
            );
          })}

          <Button btnStyleType="outlined" onClick={resetDefaultColumns}>
            <FontAwesomeIcon icon={faRotateRight} />
            reset
          </Button>
        </article>
      )}
    </div>
  );
};

export default CloumnsVisible;
