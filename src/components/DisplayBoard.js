import React , {useContext, useMemo} from 'react'
import styles from '../styles/Result.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import { ServiceContext } from '../contexts/ServiceContextProvider';


const useStylesDefault = makeStyles({
    bar: valueDefault => ({
      color: valueDefault.color,
      fontSize : valueDefault.size+'rem',
      border: valueDefault.border.border_width+'px '+valueDefault.border.border_style.default + ' ' +valueDefault.border.border_color,
      textAlign: valueDefault.text_align
    }),
  });
 
const useStylesMultiples = makeStyles({
  bar: valueDefault => ({
    color: valueDefault.color,
    fontSize : valueDefault.size+'rem',
    borderWidth: valueDefault.border.border_width+'px',
    borderColor: valueDefault.border.border_color,
    borderStyle: valueDefault.border.border_style.multiples.join(' '),
    textAlign: valueDefault.text_align,
  }),
});

const DisplayBoard = () => {
    const {valueDefault} = useContext(ServiceContext);
    let  stylesDefault_material = useStylesDefault(valueDefault);
    let  stylesMultiples_material = useStylesMultiples(valueDefault);
    return useMemo(()=>{
      const setClass = () => {
        if(valueDefault.border.border_style.isCategory){
          return stylesDefault_material
        }else{
          return stylesMultiples_material
        }
      } 
      return (
      <div className={styles.pannel}>
          <div className={styles.content}
          >
              <div className={setClass().bar}>
                 Content
              </div>
          </div>
      </div>
      )
    },[valueDefault])
   
}


export default  DisplayBoard