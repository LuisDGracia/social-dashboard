import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [ themeMode, setThemeMode ] = useState("lightTheme");
  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === "lightTheme") {
        return "darkTheme";
      } else {
        return "lightTheme";
      }
    });
  };

  const value = { themeMode, toggleTheme };
  const costumeTheme = theme[themeMode];

  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={costumeTheme}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>)
}

export default AppProvider;
