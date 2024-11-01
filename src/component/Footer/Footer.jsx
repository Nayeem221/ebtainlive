import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineInstagram } from "react-icons/ai";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <>
    <section className='bg-[#C51605] py-[64px] '>
<h3 className='text-center text-[34px] font-inter text-white lg:w-[296px] m-auto mb-[43px]'>EbTan Cosmetics</h3>
<ul className='flex flex-wrap justify-center items-center gap-[33px] mt-[50px] mb-[19px]'>
    <li><Link to='' className='text-white font-medium font-inter text-[18px]'>Home</Link></li>
    <li><Link to='' className='text-white font-medium font-inter text-[18px]' >About us</Link></li>
    <li><Link to= '' className='text-white font-medium font-inter text-[18px]'>Product</Link></li>
    <li><Link to= '' className='text-white font-medium font-inter text-[18px]'>Contact</Link></li>
    </ul>
    <div className="icon flex items-center justify-center gap-[29px]  mt-[50px] mb-[19px]">
   <Link to='https://www.facebook.com/nayeem.islam.1291'><AiOutlineInstagram className='text-white text-4xl' /></Link> 
   <Link><PiTelegramLogoDuotone className='text-white text-4xl' /></Link> 
   <Link> <CiFacebook className='text-white text-4xl' /></Link> 
    
   


    </div>
    <p className='text-center text-white font-medium font-inter text-[18px]'>© 2024 All Rights Reserved.</p>
    </section>
    </>
  )
}
export default Footer