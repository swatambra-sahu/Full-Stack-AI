import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = ()=>{
        // setDarkMode(!darkMode)
        setDarkMode((prev)=>{return !prev})
}
        return <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            <div>
                {children}
            </div>
        </ThemeContext.Provider>
    
}


export function useTheme(){
    return useContext(ThemeContext);
}