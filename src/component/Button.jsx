import React, { useState } from 'react'
import { FaRegMoon } from "react-icons/fa";
export default function Button({text,onClick}) {
 
 
  const  mystyle={
  
       backgroundColor:"#0fb299",
       color:"",
       position:"center",
       width:"300px",
       pointer:"cursor"
  
   };
 
  return (

    <div >

<button  className={`btn btn-${text } float-end p-3 m-5`} onClick={onClick}  > {text}<FaRegMoon/> </button>

   </div>)

  // const style={

    
  // }  
//   const [dark,setDark]=useState()
//   const [theme,setTheme]=useState(true)


//   function handleclick () {
//     setTheme(false)
//   if(theme){

//     setDark("btn btn-dark")
//   }
//   else{
//     setDark("btn btn-light")
//   }

// }
//   return (
  // onClick={handleclick}
{/* theme?"btn btn-dark ":"btn btn-light" */}
  
}
