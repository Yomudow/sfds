import React from 'react'
import Language from '../language'

const Header = () => {
  return (
    <div className='hidden sm:flex text-[12px] md:text-[14px] bg-black h-[48px] text-white  justify-center items-center '>
        <div className='mx-4 lg:mx-[135px] w-full justify-end flex gap-20 md:gap-30'>
            <div className='flex gap-2 items-center justify-center w-full'>
             <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
             <p className='underline'>shop now!</p>
            </div>
        
      <Language/>
        </div>
    
    </div>
  )
}

export default Header
