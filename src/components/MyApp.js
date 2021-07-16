import React , {useRef , useState,useEffect, useContext} from 'react'
import styles from '../styles/MyApp.module.scss'
import ContentColor from './ContentColor';
import DisplayBoard from './DisplayBoard';
import ContentBorderColor from './ContentBorderColor';
import ContentSize from './ContentSize';
import ContentBorderSize from './ContentBorderSize';
import ContentTextAlign from './ContentTextAlign';
import ContentBorderStyle from './ContentBorderStyle';
import Reset from './Reset';
import ResultTable from './ResultTable';
import ToggleTheme from './ToggleTheme';
import  { ThemeContext } from '../contexts/ThemeContextProvider';
import  ServiceContextProvider from '../contexts/ServiceContextProvider';
import { isNullableTypeAnnotation } from '@babel/types';
import Dashboard from './DashBoard';

const MyApp = () => {
    const {Theme} = useContext(ThemeContext);
    const {isTheme} = Theme;
    const className = isTheme?styles.myApp:styles.myApp_black;

    const reftop = useRef(null)
    const refBox = useRef(null);
    const refDashBoard = useRef(null)
    const refDragBar_1 = useRef(null);
    const refDragBar_2 = useRef(null);
    const refDisplayBoard = useRef(null);
    const [clientHeightRowFirst,setClientHeightRowFirst] = useState(0);
    const [clientHeightRowSecond,setClientHeightRowSecond] = useState(0);
    const [clientHeightRowThirst,setClientHeightRowThirst] = useState(0);
    const [clientMaxHeightRowTop,setClientMaxHeightRowTop] = useState(0);
    const [isDragBarFirst,setIsDragBarFirst] = useState(false);
    const [isDragBarSecond,setIsDragBarSecond] = useState(false);
    const [cursor,SetCursor] = useState("auto");

    const handleOnMouseDown = (isDragBar) => {
    switch(isDragBar){
        case 1 : {
        setIsDragBarFirst(true);
        break;
        }
        case 2 : {
        setIsDragBarSecond(true);
        break;
        }
        default : {
        break;
        }
    }
    }


    const endDrag = () => {
        setIsDragBarFirst(false);
        setIsDragBarSecond(false);
        window.removeEventListener('mousemove',onDrag)
        SetCursor("auto")
        }

    const onDrag = (e) => {
    
    if(isDragBarFirst){
        const heightRowSecond = reftop.current.clientHeight - e.clientY ;
        const heightRowFirst = e.clientY - refDragBar_1.current.clientHeight;
        if(heightRowSecond > 0 && heightRowFirst > 0){    
        setClientHeightRowFirst(heightRowFirst)
        setClientHeightRowSecond(heightRowSecond);
        setClientHeightRowThirst(refDisplayBoard.current.clientHeight)    
        SetCursor("n-resize")
        e.preventDefault();
        }
    }
    else if(isDragBarSecond){
        let heightRowSecond =  e.clientY - refDashBoard.current.clientHeight -  refDragBar_1.current.clientHeight -  refDragBar_2.current.clientHeight;
        let heightMaxRowTop = e.clientY - 15;
        let heightRowThirst = refBox.current.clientHeight  - e.clientY - 15 ;
        if(heightRowSecond >0 && heightRowThirst >0){
        setClientHeightRowSecond(heightRowSecond);
        setClientMaxHeightRowTop(heightMaxRowTop)
        setClientHeightRowThirst(heightRowThirst);
        e.preventDefault();
        }
    }
        
    }

    useEffect(()=>{
      const run = () =>{
        window.addEventListener('mousemove',onDrag)
        window.addEventListener('mouseup',endDrag)
      }
      run();
    return () => {
        window.removeEventListener('mouseup',endDrag)      
        window.removeEventListener('mousemove',onDrag)
        }
    },[isDragBarFirst, isDragBarSecond])

    console.log("render MyApp");
    return (
        <ServiceContextProvider>
        <div className={className}>
        <div
        ref={refBox}
        style = {
            {
            cursor : cursor,
            }
        }
        className={styles.box_resize}>
        <div
            ref={reftop}
            style={{
            maxHeight:clientMaxHeightRowTop === 0?null:clientMaxHeightRowTop,
            }}
            className={styles.rowtop}
        >
            <div 
                ref={refDashBoard}
                style={{
                    height: clientHeightRowFirst === 0?isNullableTypeAnnotation:clientHeightRowFirst+"px",
                }}
                className={styles.dashboard}>
            <div
                style={{
                height:  clientHeightRowFirst === 0?null:clientHeightRowFirst+"px",
                }}
                className={styles.container}
            >
                <Dashboard/>
              </div>  
            </div> 
            <div 
                ref={refDragBar_1}
                onMouseDown={() => handleOnMouseDown(1)} 
                className={styles.dragbar_height_1}></div>
            <div 
                style={{
                    height: clientHeightRowSecond === 0?null:clientHeightRowSecond+"px",
                }}
                className={styles.result_table}>
                <div
                style={{
                height:  clientHeightRowSecond === 0?null:clientHeightRowSecond+"px",
                }}
                className={styles.container}
                >
                <div 
                    className={styles.row}>
                    <ResultTable   />
                </div>
                </div>
                </div>
            </div>  
            <div
            ref={refDragBar_2}
            onMouseDown={() => handleOnMouseDown(2)} 
            className = {styles.dragbar_height_2}
            >
            </div>   
            <div
            ref={refDisplayBoard} 
            style={{
                height:clientHeightRowThirst === 0?null:clientHeightRowThirst+'px',
            }}
            className={styles.display_board}>
                <div
                style={{
                    height:clientHeightRowThirst === 0?150:clientHeightRowThirst+'px',
                }}
                className={styles.container}
                >
                <div className={styles.row}>
                    <DisplayBoard />
                </div>
                </div>
            </div> 
        </div> 
        <div className={styles.service}>
            <div className={styles.col}>
            <ToggleTheme/>
            </div>
        </div>
        </div>  
        </ServiceContextProvider>
    );
}

export default MyApp