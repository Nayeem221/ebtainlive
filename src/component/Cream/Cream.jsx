import React from 'react'
import CommonHead from '../common/CommonHead'
import CommonAccro from '../common/CommonAccro'
import CommonButton from '../common/CommonButton'

const Cream = () => {
  return (
    <>
      <section className='lg:pt-[110px] lg:pb-[157px] px-10'>
        <div className="container">
          <div className="creamrow flex flex-wrap gap-[30px] lg:gap-[120px]">
            <div className="creamimage">
              <img src="images/cream.png" alt="" />
            </div>
           <div className="commonheadtext">
           <CommonHead CommonHeadText={'All skins types'} />
           <h2 className='text-[30px] font-normal font-ptserif lg:text-[48px] w-[215px] lg:w-[215px] text-[#333333] my-[31px]'> Men’s day
cream</h2>
<CommonAccro Accro={'How to use'}/>
<CommonAccro Accro={'Ingredients'}/>
<CommonAccro Accro={'Benefits'}/> 
<div className='mt-[37px] flex gap-[27px] ' >
<CommonButton  CommonButton1={'Add to cart'}/ >
  <p className='text-xl   font-ptserif font-normal text-[30px] text-[#C51605] mt-[5px] '>৳ 500</p>
</div>
           </div>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Cream
