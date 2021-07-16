import React ,{useContext} from 'react'
import styles from '../styles/Reset.module.scss'
import { ThemeContext } from '../contexts/ThemeContextProvider'
import { ServiceContext } from '../contexts/ServiceContextProvider'

const Reset = (props) => {

    const {Theme} = useContext(ThemeContext);
    const {isTheme} = Theme;
    const className = isTheme?styles.button:styles.button_black

    
    const {resetValue} = useContext(ServiceContext);

    const defaultValue = {
        color:'black',
        size: 1,
        border : {
             border_width : 1,
             border_color : 'black',
             border_style :  {
                  isCategory : true,
                  default: 'solid',
                  multiples : [  
                  'solid' ,
                  'double' ,
                  'none' ,
                  'hidden' ,],
             }
        },
        text_align : 'left'
    }

    const handleOnClick = () =>{
        resetValue(defaultValue);
    }

    return (
            <div>
                <button  className={className}  onClick={()=>handleOnClick()}>
                    <span>Reset</span>
                </button>
            </div>

    )
}

export default Reset