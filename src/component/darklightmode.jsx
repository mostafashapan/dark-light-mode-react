import React, { useContext } from 'react'
import Button from './Button'
import { themeContext } from '../context/theme-context';

export default function Darklightmode() {


const {theme,handleclick} =useContext(themeContext);
var boody=document.body.background
  return (
    <>
    
   <Button text={theme==="light"?"dark":"light"} onClick={handleclick}/>
   
    
    <div 
    
    
    
    
    className={`   center p-5  rounded-3 m-2 float-end  
     ` }
      size={40}

    >
      
      
      
      Lorem {theme}, sit amet consectetur
     adipisicing elit. Ipsum sapiente 
     ad fugiat ratione, 
     nulla cupiditate alias accusamus
      mollitia delectus assumenda quae minima, 
      asperiores rerum eos modi quod harum,
       vero recusandae.</div>
       
       </>
  )
}
