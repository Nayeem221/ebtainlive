import React from 'react'
import CommonReview from '../common/CommonReview'

const Review = () => {
  return (
    <>
      <section className='lg:pt-[142px] lg:pb[200px] py-[50px]'>
<div className="container">
    <div className="reviewrow text-center">
        <h2 className='text-brandColor lg:text-[48px] text-[20px] font-normal font-ptserif'>Review</h2>
        <p className='lg:w-[526px] w-full text-[#A0A79A] font-inter font-medium lg:text-[18px] text-[10px] px-[10px] mt-[21px] mx-auto lg:mb-[90px] mb-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <div className='flex justify-center lg:gap-[105px] gap-[30px] flex-wrap'>
        <CommonReview  Reviewtext={'Ebrahim Ahmed'} />
        <CommonReview  Reviewtext={'Ebrahim Ahmed'} />
        </div>
    </div>
  
</div>
      </section>
    </>
  )
}

export default Review