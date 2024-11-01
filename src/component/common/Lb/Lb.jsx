import React from 'react'
import CommonHead from '../CommonHead'
import CommonAccro from '../CommonAccro'
import CommonButton from '../CommonButton'

const Lb = () => {
  return (
    <>
      <section className='lg:pt-[110px] lg:pb-[157px] px-10 '>
        <div className="container">
          <div className="creamrow lg:flex  gap-[30px] lg:gap-[190px] ">
           
           <div className="commonheadtext">
           <CommonHead CommonHeadText={'All skins types'} />
           <h2 className='text-[30px] font-normal font-ptserif lg:text-[48px] w-[215px] lg:w-[479px] text-[#333333] my-[31px]'> Men's lip balm lasting 
(25 gr)</h2>
<CommonAccro Accro={'How to use'}/>
<CommonAccro Accro={'Ingredients'}/>
<CommonAccro Accro={'Benefits'}/> 
<div className='mt-[37px] flex gap-[27px] ' >
<CommonButton  CommonButton1={'Add to cart'}/ >
  <p className='text-xl font-ptserif font-normal text-[30px] text-[#C51605] mt-[5px]'>৳ 300</p>
</div>
           </div>
           <div className="creamimage">
              <img src="images/lb.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Lb
