import { useCallback, useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("isDark");
    return saved ? JSON.parse(saved) : false;
  });

  const changeMode = useCallback(() => {
    setIsDark((prev) => {
      const changedValue = !prev;
      localStorage?.setItem("isDark", changedValue);
      return changedValue;
    });
  }, []);

  useEffect(() => {
    if (isDark) return document.body.classList.add("dark");
    document.body.classList.remove("dark");
  }, [isDark]);

  return { isDark, changeMode, setIsDark };
};

export default useDarkMode;
