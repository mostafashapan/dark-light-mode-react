import React, { useEffect, useState } from 'react'
import Darklightmode from './darklightmode'
import { themeContext,themes } from '../context/theme-context'
export default function Main () {
    const [theme,setTheme]=useState(themes.light)

    function handleclick(){
        theme==themes.light ? setTheme(themes.dark) :  setTheme(themes.light)

       
    }
useEffect(()=>{
var docbody=document.body.classList
switch(theme){
    case themes.light:
        docbody.remove("bg-dark") ;
        docbody.remove("text-light");
        docbody.add("bg-light") ;
        docbody.add("text-dark");
        break;
    case themes.dark:
        docbody.remove("bg-light") ;
        docbody.remove("text-dark");
        docbody.add("bg-dark") ;
        docbody.add("text-light");
        break;


}

},[theme])
  return (
    <themeContext.Provider value={{theme,handleclick}}>
        
        <Darklightmode />
        
        
         </themeContext.Provider>
  )
}
