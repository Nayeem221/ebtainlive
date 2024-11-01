import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
// custom use state
const Navbar = () => {

const[show,setShow]=useState(false)
const tapshow=()=>{
  setShow(!show)
}

  return (
    <>
      <nav className='mainmenu px-[10px] xl:px-0 lg:pt-[33px] pt-[10px]'>
       <div className="container  ">
        <div className="menu flex justify-between items-center">
          <div className="logo">
           <img className='cursor-pointer' src="images/logo.png" alt="logo.png" />
          </div>
          <div className="bar relative ">
          <HiMiniBars3BottomLeft onClick={tapshow} className='lg:text-3xl rotate-180 text-xl active:text-brandColor cursor-pointer' />
          {
            show&&
            <ul className='w-[200px] bg-brandColor rounded-[10px] flex flex-col items-center gap-1 py-5 absolute right-0 '>
            <li><Link className='text-lg font-medium font-inter text-white' to={'#'}>Home</Link></li>
            <li><Link className='text-lg font-medium font-inter text-white' to={'#'}>About Us</Link></li>
            <li><Link className='text-lg font-medium font-inter text-white' to={'#'}>Product</Link></li>
            <li><Link className='text-lg font-medium font-inter text-white' to={'#'}>Contact</Link></li>
          </ul>
          }
         
          </div>
        </div>
       </div>
      </nav>
    </>
  )
}

export default Navbar
