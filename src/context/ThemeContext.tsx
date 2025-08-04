import { createContext, useContext, useEffect, useState } from "react";
import type { themeType } from "../type";


interface ThemeContextType {
    theme: themeType;
    setTheme: (theme: themeType) => void;
}

const ThemeContext =  createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<themeType>(() => {
        return (localStorage.getItem("theme") as themeType) || "theme1";
    });
    useEffect(() => {  
        localStorage.setItem("theme", theme);
        document.documentElement.className = "" // Clear existing classes
        document.documentElement.classList.add(theme); 
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}   

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}