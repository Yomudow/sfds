import React from 'react'
import Dashboard from '../assets/Dashboard.png'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center px-2'>
        <div className=' mt-[6rem] px-[2.1rem] text-center text-[1.125rem]'>
            An AI tool made for conversion rate optimization
        </div >
        <div className='text-[3.25rem] text-center font-bold  '>Increase your <br />  conversion rate  <span className='text-blue-800'>using AI</span></div>
        <div className='bg-black text-white rounded-[0.625rem] px-[2rem] mt-[2rem] py-[1rem]'>
            <button className=''>
                Create account
            </button>
        </div>
        <div className='mt-[2rem] text-[1rem]'>30 Days free trial     <span className='px-2'>|</span>     No credit card required</div>
        <div className='mt-[5.5rem] sm:mt-[1.56rem]  md:mt-[5.5rem]   bg-white   rounded-[0.63rem]   '>
          <div className='p-[1rem]'> <svg xmlns="http://www.w3.org/2000/svg" width="44" height="10" viewBox="0 0 44 10" fill="none">
<circle cx="5" cy="5" r="5" fill="#FF4444"/>
<circle cx="22" cy="5" r="5" fill="#FDB241"/>
<circle cx="39" cy="5" r="5" fill="#65D81F"/>
</svg></div>
               <img className=' md:w-[55rem]' src={Dashboard} alt="" />
        </div>
    </div>
    
  )
}

export default Header
