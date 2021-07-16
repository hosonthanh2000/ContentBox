import React ,{useContext, useMemo} from 'react'
import styles from '../styles/ContentSize.module.scss'
import { ThemeContext } from '../contexts/ThemeContextProvider'
import { ServiceContext } from '../contexts/ServiceContextProvider'

const ContentSize = (props) => {

    const {Theme} = useContext(ThemeContext);
    const {isTheme} = Theme;
    const className = isTheme?styles.pannel:styles.pannel_black

    
    const {setSizeContent} = useContext(ServiceContext);
    const {valueDefault} = useContext(ServiceContext);
    const {size} = valueDefault;

    return useMemo(()=>{
        const handleOnClick = (value) => {
            setSizeContent(value)
        }
    
        return (
            <div className={className}>
                <div className={styles.title}>
                    <span>size:{size}rem</span>
                </div>
                <div className={styles.content}>
                    <button onClick={()=>handleOnClick(1)} className={styles.button_control}>Up</button>
                    <button onClick={()=>handleOnClick(-1)}  className={styles.button_control}>Down</button>
                </div>
            </div>
        )
    },[className,size])
    
}

export default ContentSize ;