import { createContext, useContext } from "react";

// creating context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})

// creating context provider variable
export const ThemeProvider = ThemeContext.Provider;


// creating custom Hoook to consume context and avoid code repetition
export default function useTheme() {
    return useContext(ThemeContext)
}