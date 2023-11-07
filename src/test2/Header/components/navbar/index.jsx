import React, { useState } from 'react'
import { Popover } from '@headlessui/react'


const Navbar = () => {
    const [nav, setNav]=useState(true);
    const handeClick=()=>setNav(!nav)
  return (
       
      <div className=''>
          <div className='flex items-center justify-between md:justify-end gap-[2.5rem] text-white'>
          <Popover className="relative">
      <Popover.Button onClick={handeClick} >
        {nav ? (<svg className='md:hidden' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_9_18)">
                      <path d="M5 16H27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5 8H27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5 24H27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                      <clipPath id="clip0_9_18">
                          <rect width="32" height="32" fill="white" />
                      </clipPath>
                  </defs>
              </svg>) : (<div ><img  width={24} height={24} src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Grey_close_x.svg" alt="" /></div>) }
        </Popover.Button>

      <Popover.Panel className="absolute z-10 bg-blue-200 px-8 rounded-md">
      <ul className='flex flex-col  text-black font-manrope font-bold py-4 gap-4    justify-center text-[0.875rem]'>
                    <li>
                     Çözüm ve Hizmetler
                    </li>
                    <li>
                    Ürünler
                    </li>
                    <li>
                    Teknolojiler
                    </li>
                    <li>
                    İnsan Kaynakları
                    </li>
                    <li>
                    Kurumsal
                    </li>
                </ul>
      </Popover.Panel>
    </Popover>
              
              
              
              
              <menu className='hidden md:flex '>
                <ul className='flex text-black font-manrope font-bold gap-[2rem] lg:gap-[2.5rem] items-center justify-center text-[0.875rem]'>
                    <li>
                     Çözüm ve Hizmetler
                    </li>
                    <li>
                    Ürünler
                    </li>
                    <li>
                    Teknolojiler
                    </li>
                    <li>
                    İnsan Kaynaklari
                    </li>
                    <li>
                    Kurumsal
                    </li>
                </ul>
              </menu>
              <div className='px-[1.25rem] py-[0.625rem] bg-[#F84646] rounded-[0.3125rem] '>
                iletisim
              </div>
          </div>
      </div>
  )
}

export default Navbar
