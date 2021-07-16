import React, { useState } from 'react'

export const ThemeContext  = React.createContext();

const ThemeContextProvider = (props) =>{

    const [Theme,setTheme] = useState({
        isTheme : true,
    })    

    const onSetTheme = () =>{
        setTheme({
            isTheme:!Theme.isTheme,
        })
    }

    const ThemeContextProviderData = {
        Theme,
        onSetTheme,
    }

    return (
        <ThemeContext.Provider
            value={ThemeContextProviderData}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider