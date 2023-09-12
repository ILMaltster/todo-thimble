import React, {createContext, FC, useEffect, useState} from 'react';
import {TThemeVariants} from "../utils/types";
import {ThemeTypes} from "../utils/consts";

interface IThemeContextValue{
    currentTheme: TThemeVariants;
    toggleLightTheme: (value: boolean) => void;
}
export const ThemeContext = createContext<IThemeContextValue>({
    currentTheme: ThemeTypes.dark,
    toggleLightTheme: ()=>{}
});

const ThemeProvider: FC<React.PropsWithChildren> = ({children}) => {
    const [themeType, setThemeType] = useState<TThemeVariants>("dark");

    const toggleLightTheme = (value: boolean)=>{
        setThemeType(value ? ThemeTypes.light : ThemeTypes.dark)
    }

    useEffect(()=>{
        document.body.setAttribute('data-theme', themeType);
    }, [themeType])

    const contextValue: IThemeContextValue = {
        currentTheme: themeType,
        toggleLightTheme: toggleLightTheme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;