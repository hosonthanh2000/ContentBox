import React, { useCallback, useState } from 'react'

export const ServiceContext = React.createContext();

const ServiceContextProvider = (props) => {

    const [valueDefault,setValueDefault] = useState({
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
    })


    const setColorContent = (params) => {
        setValueDefault((prestate) =>({
            ...prestate,
            color : params
        }))
    }
    
    const setBorderColor = (params) => {
        setValueDefault((prestate) => ({
            ...prestate,
            border:{
            ...prestate.border,
            border_color : params,
            }
        }))
    }


    const setSizeContent = (params) => {
    let sum = params + valueDefault.size;
    if(sum >= 1 && sum <= 8){
        setValueDefault((prestate) => ({
        ...prestate,
        size : sum
        }))
    }
    }

    const setBorderSize = (params)=>{
    let sum = params + valueDefault.border.border_width;
    if(sum >= 1 && sum <= 8){
        setValueDefault((prestate) => ({
        ...prestate,
        border : {
            ...prestate.border,
            border_width : sum,
        }
        }))
    }
    }

    const setTextAlign = (params) =>{
        setValueDefault((prestate) => ({
        ...prestate,
        text_align:params
    }))
    }

    const setBorderStyle = (params) => {
    if(valueDefault.border.border_style.isCategory){
        setValueDefault((prestate) => ({
        ...prestate,
        border: {
            ...prestate.border,
            border_style : {
                ...prestate.border.border_style,
                default : params
            }
        }
        }))
    }else{
        setValueDefault((prestate) => ({
        ...prestate,
        border: {
            ...prestate.border,
            border_style : {
                ...prestate.border.border_style,
                multiples : params
            }
        }
        }))
    }
    }

    const setBorderStyleType = (params) => {
        setValueDefault((prestate) => ({
        ...prestate,
        border: {
            ...prestate.border,
            border_style : {
            ...prestate.border.border_style,
            isCategory : params,
            }
        }
    }))
    }

    const resetValue = (params) => {
        setValueDefault(params)
    }


    const ServiceContextProviderData = useCallback({
        valueDefault,
        setColorContent,
        setBorderColor,
        setSizeContent,
        setBorderSize,
        setTextAlign,
        setBorderStyle,
        setBorderStyleType,
        resetValue,
    },)

    return (
        <ServiceContext.Provider
            value = {ServiceContextProviderData}
        >
            {props.children}
        </ServiceContext.Provider>
    )
}

export default React.memo(ServiceContextProvider)