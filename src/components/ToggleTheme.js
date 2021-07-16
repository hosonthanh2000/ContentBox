import React, { useState , useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun , faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../contexts/ThemeContextProvider'
const ToggleTheme = () =>{
    const {onSetTheme} = useContext(ThemeContext);
    const [value,setValue] = useState(0);    
    const handleOnChange = (e) =>{
        setValue(e.target.value)
        onSetTheme();
    }
    return (
        <div
        >
            <FontAwesomeIcon style={{verticalAlign:0}} icon={faSun} size="1x" color="white" />
            <input 
            type="range"
            max="100" value={value} step="100"
            onChange={handleOnChange}
            />  
           <FontAwesomeIcon style={{verticalAlign:0}} icon={faMoon} size="1x" color="white" />
        </div>
       
    )
}

export default ToggleTheme