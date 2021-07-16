import React, { useContext , useCallback, useMemo } from 'react'
import styles from '../styles/ContentBorderColor.module.scss'
import { ThemeContext } from '../contexts/ThemeContextProvider'
import { ServiceContext } from '../contexts/ServiceContextProvider'

const ContentBorderColor = () => {

    const {Theme} = useContext(ThemeContext);
    const {isTheme} = Theme;
    const className = isTheme?styles.pannel:styles.pannel_black

    const {setBorderColor} = useContext(ServiceContext);
    const {valueDefault} = useContext(ServiceContext);
    const  border_color = valueDefault.border.border_color;

    const arrayColor = [
        'black',
        'white',
        'red',
        'blue',
        'pink',
        'yellow',
        'gray',
        'green',
        'brown',
    ]

 return useMemo(()=>{
    const handleOnClick=(value) => {
        setBorderColor(value);
    }
   
    const setStyle = (value) => {
        if(value === border_color){
            return ({
                width : '110px',
                height:'110px',
                border: '5px',
                borderStyle: 'solid',
                borderColor:'#94bbe9',
                backgroundColor : value,
            })
            }
        return ({
            backgroundColor : value,
        })
    }
       
    let element = arrayColor.map((value,index)=>{
        return (
           <button
             key={index}
             style = {setStyle(value)}
             className={styles.button_color}
             onClick={()=>handleOnClick(value)}
           >
           </button>
        )
    })
  
    return (
        <div className={className}>
            <div className={styles.title}>
                <span >border-color : {border_color}</span>
            </div>
            <div className={styles.content}>
                {element}
            </div>
        </div>
    )},[border_color,className])
}



export default React.memo(ContentBorderColor);