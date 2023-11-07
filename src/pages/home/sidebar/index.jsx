import React from 'react'

const Sidebar = () => {
  return (
    <div className='mt-[2.5rem] text-[1rem] w-[217px]'>
      <ul className=' font-normal flex flex-col gap-[1rem]'>
        <li className='flex items-center justify-between' >
        Woman’s Fashion
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black"/>
        </svg>
        </li>
        <li className='flex items-center justify-between'>
        Men’s Fashion
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black"/>
        </svg>
        </li>
        <li>
        Electronics
        </li>
        <li>
        Home & Lifestyle
        </li>
        <li>
        Medicine
        </li>
        <li>
        Sports & Outdoor
        </li>
        <li>
        Baby’s & Toys
        </li>
        <li>
        Groceries & Pets
        </li>
        <li>
        Health & Beauty
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
