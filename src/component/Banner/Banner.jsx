import React from 'react'
import CommonHead from '../common/CommonHead'
import CommonButton from '../common/CommonButton'
import CommonCount from '../common/CommonCount'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import CommonText from '../common/CommonText';
import { ImStarFull } from "react-icons/im";
import { BiTestTube } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <section className='banner pt-[97px]'>
<div className="container">
    <div className="bannerrow flex flex-col-reverse lg:flex-row   gap-[72px] items-center justify-center">
        <div className="bannerimg w-[300px] lg:w-[469px]">
            <img  src="images/banner.png" alt="" />
        </div>
        <div className="bannertext">
            <CommonHead CommonHeadText={'Normal to oily skin'}    />
            <h1 className='text-[20px]   lg:text-[72px] font-ptserif text-secondcolor font-normal w-[300x] lg:w-[540px] mt-5 '>Men’s Sunscreen
hand & body</h1>
<p className='lg:text-lg w-[300px] text-[14px] mb-5  font-inter font-normal text-[#A0A79A] lg:w-[526px] mt-[20px] lg:mb-[64px] pl-[20px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
<CommonButton CommonButton1={'Add to cart'}   />
<div className='flex lg:gap-[49px] gap-1 w-[50px] '>
<CommonCount CountNumber={4} CountIcon={<MdOutlineStarPurple500 />} CountText={'Rating'} />
<CommonCount CountNumber={200} CountIcon={<FaShoppingBag />} CountText={'Product solds'} />
<CommonCount CountNumber={99} CountIcon={<FaFaceSmile />} CountText={'Review'} />


</div>
        </div>
    </div>
</div>
<div className="bannertext pt-[191px]">
  
<div className="bannertextcol">
  
  <div className="text flex justify-center items-center flex-col text-center ">
 <h2 className='text-[#333333] w-[300px] lg:w-[400px] font-serif font-200px lg:font-[400px] text-[30px] lg:text-[48px]' >Why <span className='text-[#C51605]'> choose </span>us</h2>
  <p className=' w-[300px]   lg:w-[526px] font-inter mt-[21px] mb-[60px] text-[12px]  lg:text-[18px] text-[#A0A79A]'>
  SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
  </p>
  </div>
  <div className='flex gap-[20px] justify-center items-center flex-col lg:flex-row  '>
                              <CommonText  bannericone={<ImStarFull />} bannertext={'Dermatologist Tested'} bannerlatter={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'}/>
                              <CommonText  bannericone={<BiTestTube  />} bannertext={'Allergy tested'} bannerlatter={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'}/>
                              <CommonText  bannericone={<FaAngleDown  />} bannertext={'Non-comedogenic'} bannerlatter={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'}/>
                         </div>
  </div>
</div>



        </section> 

    </>
  )
}

export default Banner
