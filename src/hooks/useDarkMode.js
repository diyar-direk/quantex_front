import { useCallback, useEffect, useState } from "react";

const useDarkMode = ({ setDefault, changeState }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const isDeviceDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const savedValue = localStorage.getItem("isDark");
    const saved = savedValue ? JSON.parse(savedValue) : isDeviceDark || false;
    if (setDefault) changeState(saved);
    return saved;
  });

  const changeMode = useCallback(() => {
    setIsDark((prev) => {
      const changedValue = !prev;
      localStorage?.setItem("isDark", changedValue);
      if (changeState) changeState(changedValue);
      return changedValue;
    });
  }, [changeState]);

  useEffect(() => {
    if (isDark) return document.body.classList.add("dark");
    document.body.classList.remove("dark");
  }, [isDark]);

  return { isDark, changeMode, setIsDark };
};

export default useDarkMode;
