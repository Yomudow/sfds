import React from 'react'

const Menu = () => {
  return (
    <div className='sm:flex hidden flex-1'>
      <ul className='flex gap-[3rem] text-[1rem] font-normal'>
        <li>
          Home
        </li>
        <li>
          Contact
        </li>
        <li>
           About
        </li>
        <li>
            Sign up
        </li>
      </ul>
    </div>
  )
}

export default Menu
