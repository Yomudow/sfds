import React from 'react'
import Countdown from '../../../components/timer'

const Today = () => {
  return (
    <div className='mt-[8.75rem]'>
        <div>
        <div className='flex items-center gap-[1rem]  flex-1'>
        <svg height={40} widths={20} xmlns="http://www.w3.org/2000/svg" width="20"  viewBox="0 0 20 40" fill="none">
            <rect width="20" height="40" rx="4" fill="#DB4444"/>
        </svg>
        <p className='text-[#DB4444] font-bold '>Today's</p>

        
        </div>
        <div className='flex items-center justify-between'>
        <div className='mt-[1.5rem] flex gap-[5.44rem]   font-semibold'>
            <div className='text-[2.25rem]   '>Flash Sales</div>
            <Countdown />
            
        </div>
        <div className='flex gap-[0.5rem]'>
            <div className='w-[2.875rem] h-[2.875rem] bg-[#F5F5F5] rounded-full flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11 5L4 12L11 19M4 12H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <div className='w-[2.875rem] h-[2.875rem] bg-[#F5F5F5] rounded-full flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        </div>
        </div>
       
        </div>
        
       
        
    </div>
  )
}

export default Today
