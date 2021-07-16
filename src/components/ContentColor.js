import React,{useContext, useMemo} from 'react'
import styles from '../styles/ContentColor.module.scss'
import { ThemeContext } from '../contexts/ThemeContextProvider'
import { ServiceContext } from '../contexts/ServiceContextProvider'
const ContentColor = (props) => {
    const {Theme} = useContext(ThemeContext);
    const {isTheme} = Theme;
    const className = isTheme?styles.pannel:styles.pannel_black

    
    const {setColorContent} = useContext(ServiceContext);
    const {valueDefault} = useContext(ServiceContext);
    const {color} = valueDefault;

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
            setColorContent(value);
        }
    
       
        const setStyle = (value) => {
            if(value === color){
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
                 style ={setStyle(value)}
                 className={styles.button_color}
                 onClick={()=>handleOnClick(value)}
               >
    
               </button>
            )
        })
    
        return (
            <div className={className}>
                <div className={styles.title}>
                    <span >color : {color}</span>
                </div>
                <div className={styles.content}>
                    {element}
                </div>
            </div>
        )
    },[className,color])
   
}

export default ContentColor