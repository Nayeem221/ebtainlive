import React from 'react'

const CommonBannerTex = ({bannericone , bannertext, bannerlatter}) => {
  return (
    <>
    
       <div className="banner_text_row">
           <div className="singel_banner ">
              <div className="singel_banner_text w-[300px] lg:w-[380px] h-[275px] mb-[121px] bg-[#F0EFEA] rounded-[5px] ">
                    <div className='w-[58px] h-[58px] mt-[33px] ml-[26px]  bg-[#CDD5CA] rounded-full pt-[10px] '>
                        <div className='flex  justify-center  items-start  text-[#C51605] text-[35px] '> {bannericone} </div>
                    </div>
                   <h3 className=' font-inter font-bold text-[15px] lg:text-[22px]  text-[#333333] mt-[20px] ml-[26px] '>{bannertext}</h3>
                   <p className='w-[200px] lg:w-[313px] font-inter font-medium text-[14px] lg:text-[18px] text-[#A0A79A] mt-[11px] ml-[26px] '>{bannerlatter}</p>
                  
              </div>

              
           </div>

       </div>

    
    
    </>
  )
}

export default CommonBannerTex