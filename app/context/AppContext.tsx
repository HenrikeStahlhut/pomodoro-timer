import { createContext, useContext, useState, type ReactNode } from "react";

interface AppContextType {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
  handleChangeTheme: () => void;
}

const themeDefault = "forest";

export const AppContext = createContext<AppContextType>({
  currentTheme: themeDefault,
  setCurrentTheme: () => {},
  handleChangeTheme: () => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<string>(themeDefault);

  // needs new selected theme from theme.tsx dropdown
  const handleChangeTheme = () => {};

  return (
    <AppContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        handleChangeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
