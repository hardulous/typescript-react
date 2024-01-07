import { createContext } from "react";
import { theme } from "./2-Theme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

// Here by type inference the theme value is of type object with primary and secondary property
export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  return (

    // Here ts will do its job if we try to pass value props other than of type themeContext then ts will throw error

    // <ThemeContext.Provider value={"sd"}>{children}</ThemeContext.Provider>

    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>

  );
};

// Here we will type react context in ts and in our ex we will have a theme object which we will provide to our react component down the provider for theme desigining which is most commone use case of context api
