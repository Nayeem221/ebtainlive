import React from 'react'

const Subscribe = () => {
  return (
    <>
      <section className='bg-[#ECEBE6] lg:pt-[80px] py-[50px] lg:pb-[77px] px-[10px]'>
        <div className="container">
       <div className="subscriberow flex gap-[111px] items-center flex-wrap">
        <div className="subscribetext">
            <h2 className='text-[48px] font-normal font-ptserif text-[#333333] lg:w-[356px] '>
            Subscribe to the 
daily <span className='text-[#C51605]'>updates</span>
            </h2>
        </div>     
        <div className="subscribeinput flex flex-wrap items-center justify-between p-5 w-full lg:w-[700px] lg:h-[92px] h-full border-[1px] border-[#A0A79A] rounded-[50px]">
         <input className='bg-transparent lg:w-[400px] w-full  outline-none' type="text" placeholder='Enter your email address' />
         <button className='py-[13px] h-[52px]  px-[35px] rounded-[50px] bg-brandColor text-lg font-medium font-inter text-white'>Subscribe now</button>
        </div>
       </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe
