import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const Search = ({ delay = 500, setSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const [debouncedValue] = useDebounce(inputValue, delay);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  const t = useTranslations();

  return (
    <label className="table-toolbar-search">
      <input
        type="text"
        placeholder={t("actions.search")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </label>
  );
};

export default Search;
