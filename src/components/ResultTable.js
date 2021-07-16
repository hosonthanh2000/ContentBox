import React, { useContext, useMemo, useRef } from 'react'
import styles from '../styles/ResultTable.module.scss'
import {ServiceContext} from '../contexts/ServiceContextProvider'
import { ThemeContext } from '../contexts/ThemeContextProvider'
const ResultTable = () => {
 
const {valueDefault} = useContext(ServiceContext)
const refs = useRef();

const {Theme} = useContext(ThemeContext);
const {isTheme} = Theme;
const className = isTheme?styles.bt_coppy_clipboard:styles.bt_coppy_clipboard_black


return useMemo(()=>{
     
 let element = () => {
    if(valueDefault.border.border_style.isCategory){
        return (
           <div className={styles.property}>border : 
               <span className={styles.value}> {valueDefault.border.border_width}px</span>
               <span className={styles.value}> {valueDefault.border.border_color}</span>
               <span className={styles.value}> {valueDefault.border.border_style.default}</span>;
            </div>
        )
    }else{
        return(
       <div>  
           <div className={styles.property}>border-width : 
               <span className={styles.value}> {valueDefault.border.border_width}px;</span>
           </div>
           <div className={styles.property}> border-color : 
               <span className={styles.value}> {valueDefault.border.border_color};</span>
           </div>
           <div className = {styles.property}>border-style : 
           {valueDefault.border.border_style.multiples.map((value,index)=>{
               return <span key={index} className={styles.value}> {value}</span>
           })};
           </div>
      </div>
        )
    }
}

const punctuation = '{';
const punctuation_reverse = '}';
   

const handleOnclick = () => {

       if(document.selection){
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById("dom"));
        range.select().createTextRange();
        document.execCommand("copy");
       }else if(window.getSelection){
            var range = document.createRange();
            range.selectNode(document.getElementById("dom"))
            window.getSelection().removeAllRanges()
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
       }
      

}
   return (
      <div className={styles.col_12}>
       <div id="dom" ref={refs} className={styles.content}>
           <span>.className{punctuation}</span>
           <div className={styles.pd_5}>
               <div className={styles.property}>color : 
                   <span className={styles.value}>{valueDefault.color};</span>
               </div>
               <div className={styles.property}>size : 
                   <span className={styles.value}>{valueDefault.size}rem;</span>
               </div>
               {element()}
               <div className={styles.property}>text-align: 
                   <span className={styles.value}>{valueDefault.text_align};</span>
               </div>
           </div>
           <span>{punctuation_reverse}</span>
       </div>
        <button className={className} onClick={()=> handleOnclick()}>coppy to Clipboard</button>
    </div>  
   )
},[valueDefault,className])

}


export default ResultTable