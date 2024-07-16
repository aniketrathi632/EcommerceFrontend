import { createContext, useState } from "react";


export let ThemeStyle = createContext()

function ThemeContext( {children}){
    let [Theme, setTheme]=useState("light")

    return (
        <div>
          <ThemeStyle.Provider value={[ Theme, setTheme ]}>
            {children}
          </ThemeStyle.Provider>
        </div>)
}

export default ThemeContext;