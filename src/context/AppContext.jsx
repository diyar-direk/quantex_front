"use client";
import useDarkMode from "@/hooks/useDarkMode";
import { createContext, useContext, useState } from "react";
import { AuthProvider } from "./AuthContext";

const AppContext = createContext({});

const AppProvider = ({ children, token }) => {
  const [isDark, setIsDark] = useState(false);
  const { changeMode } = useDarkMode({
    changeState: setIsDark,
    setDefault: true,
  });

  return (
    <AuthProvider token={token}>
      <AppContext.Provider value={{ isDark, setIsDark, changeMode }}>
        {children}
      </AppContext.Provider>
    </AuthProvider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
