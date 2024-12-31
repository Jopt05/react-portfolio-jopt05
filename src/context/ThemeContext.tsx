import { createContext, useEffect, useState } from "react";

 interface ThemeState {
    isDarkMode: boolean;
}

const themeInitialState: ThemeState = {
    isDarkMode: false
}

interface ThemeContextPros {
    themeState: ThemeState;
    changeTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextPros);

export const ThemeProvider = ({ children }: any) => {

    const [ThemeState, setThemeState] = useState(themeInitialState)

    useEffect(() => {
      const isDarkMode = window.localStorage.getItem('theme');
      if( isDarkMode && isDarkMode == 'dark' ) {
        setThemeState({
            isDarkMode: true
        })
      } else {
        setThemeState({
            isDarkMode: false
        })
      }
    }, [])

    useEffect(() => {
        const htmlElement = document.getElementsByTagName('html')?.[0];
        if( !htmlElement ) return;
        if( ThemeState.isDarkMode ) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    }, [ThemeState])
    
    function changeTheme() {
        if( ThemeState.isDarkMode ) {
            window.localStorage.removeItem('theme');
        } else {
            window.localStorage.setItem('theme', 'dark')
        }
        setThemeState({
            isDarkMode: !ThemeState.isDarkMode
        })
    }

    return (
        <ThemeContext.Provider
            value={{
                changeTheme,
                themeState: ThemeState
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}