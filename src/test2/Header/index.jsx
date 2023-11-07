import React from 'react'
import Navbar from './components/navbar'
import Section from './components/section'
import Input from './input'

const Header = () => {
  return (
    <div className=" bg-hero-pattern   bg-center bg-cover    mx-auto ">
        <div className='bg-gradient-radial  p-[1.25rem] sm:p-[2.18rem]  lg:px-[7.62rem] '>
          <Navbar/>
          <Section/>
          <Input/>
        </div>
      
    </div>
  )
}

export default Header
