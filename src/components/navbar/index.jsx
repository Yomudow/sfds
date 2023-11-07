import React from 'react'
import Logo from './logo'
import Menu from './menu'
import Rightbar from './rightbar'

const Navbar = () => {
  return (
    <div className=' sm:mt-[2.5rem] flex justify-between items-center px-4 gap-4 '>
       <Logo/>
       <Menu/>
       <Rightbar/>
    </div>
  )
}

export default Navbar
