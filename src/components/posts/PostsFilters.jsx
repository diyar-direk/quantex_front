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

const sortOption = [
  { value: `-${DBkeys.createdAt}`, text: "latest" },
  { value: DBkeys.createdAt, text: "oldest" },
];

const PostsFilters = ({ filters, setFilters }) => {
  const [search, setSearch] = useState("");

  const [debouncedValue] = useDebounce(search, 500);

  useEffect(() => {
    setFilters((p) => ({ ...p, "title[contains]": debouncedValue }));
  }, [debouncedValue, setFilters]);

  const { isOpen, ref, toggleOpen } = useClickOutside();

  return (
    <>
      <section className="posts-search">
        <label htmlFor="posts-search" className="posts-search-inp">
          <input
            type="text"
            name="search"
            id="posts-search"
            placeholder="search...."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <div className="sort" onClick={toggleOpen} ref={ref}>
          {sortOption.find((e) => e.value === filters?.sort)?.text}
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
                {e.text}
              </p>
            ))}
          </div>
        )}
      </section>

      <div className="categories-filter">
        <button
          className={!filters?.category ? "active" : ""}
          onClick={() => setFilters((p) => ({ ...p, category: "" }))}
        >
          all
        </button>
        {Object.values(categories).map((e) => (
          <button
            key={e.value}
            style={{ "--main-color": e.color }}
            className={filters?.category === e.value ? "active" : ""}
            onClick={() => setFilters((p) => ({ ...p, category: e.value }))}
          >
            <FontAwesomeIcon icon={e.icon} />
            {e.value}
          </button>
        ))}
      </div>
    </>
  );
};

export default PostsFilters;
