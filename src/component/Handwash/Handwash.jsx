import React from 'react'
import CommonHead from '../common/CommonHead'
import CommonCount from '../common/CommonCount'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import CommonButton from '../common/CommonButton';

const Handwash = () => {
  return (
    <>
     <section className='px-10'  >
              <div className="container bg-[#ECEBE6]">
                    <div className="frame_row flex items-center justify-center gap:[10px] lg:gap-[120px] flex-col lg:flex-row  ">
                           <div className="frame_text">
                              <div className='lg:pl-0 pl-[100px] w-[250px]'><CommonHead   CommonHeadText={'All skins types'} /></div>
                               <div className='flex gap:[40px] lg:gap-[80px] mt-5 lg:flex-row flex-col flex-wrap lg:pl-0 pl-[100px] '>
                               <CommonCount CountNumber={4} CountIcon={<MdOutlineStarPurple500 />} CountText={'Rating'} />
<CommonCount CountNumber={200} CountIcon={<FaShoppingBag />} CountText={'Product solds'} />
<CommonCount CountNumber={99} CountIcon={<FaFaceSmile />} CountText={'Review'} />
                               </div>
                                     <h2 className='text-[#C51605] font-serif font-normal text-[17px] lg:text-[36px] mt-[40px] mb-[52px] lg:pl-0 pl-[100px]'>Men’s Hand wash  lorem</h2>
                               <div className='flex gap-[20px] items-center font-serif font-[200px] lg:font-[400px] text-[25px] lg:text-[31px]  lg:flex-row flex-row-reverse '>
                                    <div className='mt-[30px] w-full lg:w-[]'> <CommonButton   CommonButton1={'Add to cart'}/></div>
                                     <h3 className='text-xl lg:text-4xl ml-[20px] text-[#C51605] pl-[100px] lg:pl-[0px] '>৳ 700</h3>
                                    </div>
                           </div>

                           <div className="frame_image mt-[110px] mb-[149px]">
                              <img className='' src="images/handwash.png" alt="" />
                           </div>
                    </div>
              </div>
        </section>
    </>
  )
}

export default Handwash
