import React from 'react'

const Navbar = () => {
  return (
    <div className=' mx-auto text-[1rem] mt-2 '>
       <div className='px-[2.63rem]   sm:px-[2.5rem]   flex items-center justify-between '>
       <div className=' lg:text-[2rem] md:text-[1.5rem] font-semibold'>Circle</div>
        <div className='  hidden md:flex'>
            <ul className='flex items-center justify-center lg:text-[1.5rem] md:text-[1rem] md:gap-[1.5rem] lg:gap-[4rem]'>
                <li >Features</li>
                <li >Pricing</li>
                <li >About Us</li>
                
            </ul>
        </div>
        <div className=' flex items-center justify-end gap-[2.75rem] lg:text-[1.5rem] md:text-[1rem]'>
            <div className='hidden md:flex'>Customer Login</div>
            <div className='md:p-[0.5rem]  hidden md:flex bg-black text-white rounded-md'>
            <button className=' w-[7.125rem] flex items-center justify-center' >Sign up</button>
           
            </div >
            <svg  className='md:hidden flex items-center justify-end'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2.3999 5.39999C2.3999 5.06862 2.66853 4.79999 2.9999 4.79999H20.9999C21.3312 4.79999 21.5999 5.06862 21.5999 5.39999C21.5999 5.73136 21.3312 5.99999 20.9999 5.99999H2.9999C2.66853 5.99999 2.3999 5.73136 2.3999 5.39999ZM2.3999 11.4C2.3999 11.0686 2.66853 10.8 2.9999 10.8H20.9999C21.3312 10.8 21.5999 11.0686 21.5999 11.4C21.5999 11.7314 21.3312 12 20.9999 12H2.9999C2.66853 12 2.3999 11.7314 2.3999 11.4ZM2.9999 16.8C2.66853 16.8 2.3999 17.0687 2.3999 17.4C2.3999 17.7313 2.66853 18 2.9999 18H20.9999C21.3312 18 21.5999 17.7313 21.5999 17.4C21.5999 17.0687 21.3312 16.8 20.9999 16.8H2.9999Z" fill="#212121"/>
            </svg>

        </div>
       </div>
      
    </div>
  )
}

export default Navbar
