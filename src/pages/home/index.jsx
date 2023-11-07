import React from 'react'
import Sidebar from './sidebar'
import Slider from './slider'
import Today from './today'

const Home = () => {
  return (
      <div >
        <div className='flex'>
         <Sidebar/>
         <div>
            <div className='w-[1px] h-full opacity-[0.3] bg-black ml-[1rem]'></div>
          </div>
          <Slider/>
     </div>
     <Today/>
       

    </div>
  )
}

export default Home
