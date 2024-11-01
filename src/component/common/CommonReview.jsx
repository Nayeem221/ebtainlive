import React from 'react'
import { IoStar } from "react-icons/io5";

const CommonReview = ({Reviewtext}) => {
  return (
    <>
      <div className='w-full lg:w-[441px]'>
        <ul className='flex gap-[25px] justify-center'>
            <li><IoStar className='lg:text-4xl text-2xl text-[#F2994A]' /></li>
            <li><IoStar className='lg:text-4xl  text-2xl text-[#F2994A]' /></li>
            <li><IoStar className='lg:text-4xl text-2xl text-[#F2994A]' /></li>
            <li><IoStar className='lg:text-4xl text-2xl text-[#F2994A]' /></li>
            <li><IoStar className='lg:text-4xl text-2xl text-[#F2994A]' /></li>
        </ul>
        <p className='lg:text-[20px] text-[12px] lg:w-[441px] w-[200px] lg:ml-0 ml-12 font-normal font-ptserif text-[#C51605] text-center my-[13px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <h2 className='text-[20px] lg:text-[36px] font-ptserif font-normal text-[#333333]'>{Reviewtext}</h2>
        <p className='text-[20px] text-xl font-normal font-ptserif text-[#F2994A] text-center'>actor</p>
      </div>
    </>
  )
}

export default CommonReview
