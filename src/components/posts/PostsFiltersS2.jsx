import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import DBkeys from "@/constants/DBkeys";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useClickOutside } from "@/hooks/useClickOutside";
import { categories } from "@/constants/enums";
import { useTranslations } from "next-intl";

const sortOption = [
  { value: `-${DBkeys.createdAt}`, text: "latest" },
  { value: DBkeys.createdAt, text: "oldest" },
];

const PostsFiltersS2 = ({ filters, setFilters }) => {
  const [search, setSearch] = useState("");

  const [debouncedValue] = useDebounce(search, 500);

  useEffect(() => {
    setFilters((p) => ({ ...p, "title[contains]": debouncedValue }));
  }, [debouncedValue, setFilters]);

  const { isOpen, ref, toggleOpen } = useClickOutside();
  const {
    isOpen: categoryOpen,
    ref: categoryRef,
    toggleOpen: toggleCategory,
  } = useClickOutside();

  const t = useTranslations();

  return (
    <>
      <section className="posts-search">
        <label htmlFor="posts-search" className="posts-search-inp">
          <input
            type="text"
            name="search"
            id="posts-search"
            placeholder={t("actions.search")}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>

        <div className="relative flex-1">
          <div className="sort" onClick={toggleCategory} ref={categoryRef}>
            <span>
              {t(
                filters?.category
                  ? `enums.${filters?.category}.title`
                  : `actions.filters`,
              )}
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          {categoryOpen && (
            <div className="sort-options">
              <p
                className={!filters?.category ? "active" : ""}
                onClick={() => setFilters((p) => ({ ...p, category: "" }))}
              >
                {t("actions.all")}
              </p>

              {Object.values(categories).map((e) => (
                <p
                  key={e.value}
                  className={filters?.category === e.value ? "active" : ""}
                  onClick={() =>
                    setFilters((p) => ({ ...p, category: e.value }))
                  }
                >
                  <FontAwesomeIcon
                    icon={e.icon}
                    style={{ color: categories[e.value].color, opacity: 0.7 }}
                  />
                  {t(`enums.${e?.value}.title`)}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="relative flex-1">
          <div className="sort" onClick={toggleOpen} ref={ref}>
            <span>
              {t(
                `actions.${sortOption.find((e) => e.value === filters?.sort)?.text}`,
              )}
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          {isOpen && (
            <div className="sort-options">
              {sortOption.map((e) => (
                <p
                  key={e.value}
                  onClick={() => setFilters((p) => ({ ...p, sort: e.value }))}
                  className={e.value === filters?.sort ? "active" : ""}
                >
                  {t(`actions.${e.text}`)}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PostsFiltersS2;
