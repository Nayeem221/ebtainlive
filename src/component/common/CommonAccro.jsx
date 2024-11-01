import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

const CommonAccro = ({Accro}) => {
    const [show,setShow]=useState(false)
    const click=()=>{
        setShow(!show)
      }
  return (
    <>
      <div className="accrohead ">

     
        <h2 onClick={click} className='text-[22px] font-inter font-normal text-[#333333]  flex items-center'> <TiArrowSortedDown className='text-3xl  ' />{Accro}</h2>
        {
        show&&
        <p className=' w-full text-lg font-medium font-inter text-yellow-300 bg-red-500 lg:w-[450px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi omnis dolor explicabo alias beatae. Aspernatur, doloremque! Deleniti odit quia eveniet?</p>
       }                                  
      </div>
      
     
    </>
  )
}

export default CommonAccro
