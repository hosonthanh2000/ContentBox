import React, { useContext, useMemo} from 'react'
import styles from '../styles/ContentBorderStyle.module.scss'
import { ThemeContext } from '../contexts/ThemeContextProvider'
import { ServiceContext } from '../contexts/ServiceContextProvider'
const ContentBorderStyle = () =>{

    const {Theme} = useContext(ThemeContext);
    const {isTheme} = Theme;
    const className = isTheme?styles.pannel:styles.pannel_black

    const {setBorderStyle} = useContext(ServiceContext);
    const {setBorderStyleType} = useContext(ServiceContext);
    const {valueDefault} = useContext(ServiceContext);
    const {border} = valueDefault;
    const {border_style} = border;

    const array = [
        'solid' ,
        'double' ,
        'none' ,
        'hidden' ,
        'dotted' ,
        'groove' ,
        'ridge' ,
        'inset' ,
        'outset' 
    ]
    const arrayDefault = [
        'solid' ,
        'double' ,
        'none' ,
        'hidden' ,
        'dotted' ,
        'groove' ,
        'ridge' ,
        'inset' ,
        'outset' 
    ]
   
   return useMemo(()=>{
    const handleOnClick = (value,index) =>{
        if(border_style.isCategory){
            setBorderStyle(value)
        }else{            
            if(border_style.multiples.includes(value)){
                for(var i = 0 ; i < border_style.multiples.length ; i++){
                    if(border_style.multiples[i] === value){
                        border_style.multiples.splice(i,1)
                    }
                }
                setBorderStyle(border_style.multiples);
            }else{
                if(border_style.multiples.length < 4){
                    border_style.multiples.push(value)
                    setBorderStyle(border_style.multiples);
                }
            }
        }
        
    }
    
    const handleOnClickType = (value) => {
        setBorderStyleType(value)
    }

    const setStyle = (value) => {
        if(border_style.isCategory){
            if(value === border_style.default){
                return ({
                    border: '5px',
                    borderStyle: 'solid',
                    borderColor:'#94bbe9',
                })
            }
            return (null)
        }else{
            if(border_style.multiples.includes(value)){
                return ({
                    border: '5px',
                    borderStyle: 'solid',
                    borderColor:'#94bbe9',
                })
            }
            return (null)
        }
       
    }

    let element_title = () => {
        if(border_style.isCategory){
            return (
                <span>{border_style.default}</span>                
            )
        }else{
            return (
                border_style.multiples.map((value,index)=>{
                   return (<span key={index}> {value} </span>)
                })
            )
        }
    }

    let element_Style = () => {
       if(border_style.isCategory){
           return  arrayDefault.map((value,index)=>{
            return (
                <button
                style={setStyle(value)}
                key={index}
                className={styles.button_control}
                onClick={() => handleOnClick(value,index)}>
                    {value}
                </button>
            )
        })
       }else{
        return  array.map((value,index)=>{
            return (
                <button
                style={setStyle(value)}
                key={index}
                className={styles.button_control}
                onClick={() => handleOnClick(value,index)}>
                    {value}
                </button>
            )
        })
       } 
      
    }
    return (
    <div className={className}>
        <div className={styles.title}>
           <span>border-style: </span>
           {element_title()}
        </div>
        <div className={styles.title}>
            <button className={styles.bt} onClick={()=>handleOnClickType(true)}>Default</button>    
            <button className={styles.bt} onClick={()=>handleOnClickType(false)}>Multiples</button>    
        </div>
        <div className={styles.content}>
           {element_Style()}
        </div>
    </div>
    )
   },[border_style,className])
   
}

export default React.memo(ContentBorderStyle)