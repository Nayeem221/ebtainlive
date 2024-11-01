import React from 'react'
import { MdShoppingCart } from "react-icons/md";
const CommonButton = ({CommonButton1}) => {
  return (
    <>
      <button className='text-[10px] commonbutton lg:py-[13px] py-[5px] px-[10px] text-sm w-[full] lg:px-[35px] bg-[#E52525] rounded-[5px]   lg:text-lg font-medium font-inter text-white flex gap-4 items-center mb-[31px] hover:bg-slate-400'><MdShoppingCart className='text-2xl' />{CommonButton1}</button>
    </>
  )
}

export default CommonButton
