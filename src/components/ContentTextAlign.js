import React ,{useCallback, useContext, useMemo} from 'react'
import styles from '../styles/ContentTextAlign.module.scss'
import { ThemeContext } from '../contexts/ThemeContextProvider'
import {ServiceContext} from '../contexts/ServiceContextProvider'
const ContentTextAlign = (props) =>{

    
    const {Theme} = useContext(ThemeContext);
    const {isTheme} = Theme;
    const className = isTheme?styles.pannel:styles.pannel_black

    const {setTextAlign} = useContext(ServiceContext);
    const {valueDefault} = useContext(ServiceContext);
    const {text_align} = valueDefault;


    const arrayTextAlign = [
        'left',
        'center',
        'right',
    ]

    return useMemo(()=>{
        const handleOnClick = (value) => {
            setTextAlign(value)
        }
        const setStyle = (value) => {
            if(value === text_align){
                return ({
                    border: '5px',
                    borderStyle: 'solid',
                    borderColor:'#94bbe9',
                })
                }
            return (null)
        }
    
        const element = arrayTextAlign.map((value,index) =>{
            return(
                <button
                style={setStyle(value)}
                key={index}
                className={styles.button_control}
                onClick={()=>handleOnClick(value)}
                >
                    {value}
                </button>
            )
            
        })
        
        return (
            <div className={className}>
            <div className={styles.title}>
                <span>text-align : {text_align}</span>
            </div>
            <div className={styles.content}>
              {element}
             </div>
        </div>
        )
    
    },[text_align,className])
      
   
}

export default React.memo(ContentTextAlign)