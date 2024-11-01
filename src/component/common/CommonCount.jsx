import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import CountUp from 'react-countup';
const CommonCount = ({CountNumber,CountIcon,CountText,CountPlus}) => {
  return (
    <>
      <div className="commoncountrow">
        <div className="singlecommoncounticon flex items-center gap-[6px]">
        <div className='text-3xl text-[#F2994A]' >
{CountIcon}

        </div>
        
        <CountUp className='text-[32px] font-bold font-inter text-[#333333]' end={CountNumber} />
        
        {/* <CountUp className='text-[32px] font-bold font-inter text-[#333333]' end={5} /> */}
        </div>
        <p className='text-lg font-normal font-inter text-[#A0A79A] pl-[34px]'>{CountText}</p>
      </div>
    </>
  )
}

export default CommonCount
