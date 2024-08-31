import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode:"dark",
    lightTheme: () => {},
    darkTheme: () => {},
})

const ThemeProvider = ThemeContext.Provider
const useTheme = () => {
    return useContext(ThemeContext);
}

export {
    ThemeContext,
    ThemeProvider,
    useTheme
}