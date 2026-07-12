"use client";
import useDarkMode from "@/hooks/useDarkMode";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const { changeMode } = useDarkMode({
    changeState: setIsDark,
    setDefault: true,
  });

  return (
    <AppContext.Provider value={{ isDark, setIsDark, changeMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
