import React,{useContext, useMemo} from 'react'
import styles from '../styles/ContentBorderSize.module.scss'
import { ThemeContext } from '../contexts/ThemeContextProvider'
import { ServiceContext} from '../contexts/ServiceContextProvider'
const ContentBorderSize = (props) => {
    const {Theme} = useContext(ThemeContext);
    const {isTheme} = Theme;
    const className = isTheme?styles.pannel:styles.pannel_black

    const  {setBorderSize} = useContext(ServiceContext);
    const {valueDefault} = useContext(ServiceContext);
    const {border} = valueDefault;
    const {border_width} = border;

    return useMemo(()=>{
        const handleOnClick = (value) => {
            setBorderSize(value)
        }
        return (
            <div className={className}>
                <div className={styles.title}>
                    <span>border-width: {border_width}px</span>
                </div>
                <div className={styles.content}>
                    <button onClick={()=>handleOnClick(1)} className={styles.button_control}>Up</button>
                    <button onClick={()=>handleOnClick(-1)}  className={styles.button_control}>Down</button>
                </div>
            </div>
        )
    },[className,border_width])
   
}

export default React.memo(ContentBorderSize) ;