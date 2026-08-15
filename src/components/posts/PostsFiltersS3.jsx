import {
  faChevronDown,
  faFilter,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import DBkeys from "@/constants/DBkeys";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import PopUp from "../popup/PopUp";
import SelectOptionInput from "../inputs/SelectOptionInput";
import { categories } from "@/constants/enums";

const sortOption = [
  { value: `-${DBkeys.createdAt}`, text: "latest" },
  { value: DBkeys.createdAt, text: "oldest" },
];

const PostsFiltersS3 = ({ filters, setFilters }) => {
  const [search, setSearch] = useState("");

  const [debouncedValue] = useDebounce(search, 500);

  useEffect(() => {
    setFilters((p) => ({ ...p, "title[contains]": debouncedValue }));
  }, [debouncedValue, setFilters]);

  const [isOpen, setIsOpen] = useState(false);

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

        <div className="sort" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faFilter} />
          <span>filters</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <PopUp
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="posts-poup"
        >
          <div className="filters-container">
            <SelectOptionInput
              label="sort"
              notRequired
              options={sortOption}
              placeholder={
                sortOption.find((e) => e.value === filters?.sort)?.text
              }
              onSelectOption={(e) =>
                setFilters((p) => ({ ...p, sort: e.value }))
              }
            />
            <SelectOptionInput
              label="category"
              notRequired
              options={Object.values(categories).map((e) => ({
                text: e.value,
                icon: e.icon,
                value: e.value,
              }))}
              placeholder={filters?.category || "all"}
              onSelectOption={(e) =>
                setFilters((p) => ({ ...p, category: e.value }))
              }
              value={filters?.category}
              customOptions={[
                {
                  title: "all",
                  onChange: () => setFilters((p) => ({ ...p, category: "" })),
                },
              ]}
            />
          </div>
        </PopUp>
      </section>
    </>
  );
};

export default PostsFiltersS3;
