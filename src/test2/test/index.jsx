import React from 'react'
import { Tests } from '../utils'

const Test = () => {
  return (
    <div className=' bg-second-img bg-cover  '>
        <div className='pt-8 bg-red-600 px-[1.25rem] mix-blend-lighten'>
             <h1 className='text-[2.25rem] font-bold font-manrope text-center text-white'>Test Yönetimiyle Neler Sağlıyoruz?</h1>
             <p className='text-center text-white font-normal text-[0.875rem] font-manrope py-1'>IoT Destekli Çözümler</p>
              <div className='p-16 flex flex-col md:flex-row items-center gap-10 text-white  '>
                {Tests.map((test)=>(
                 
                   <div className='flex flex-col items-center  gap-10  md:w-1/4 '>
                    <div className='md:-rotate-90'>{test.icon}</div>
                    <div className='md:w-[180px] text-center'>{test.title}</div>
                   </div>
                
                ))}
                </div>
             
        </div>
      
    </div>
  )
}

export default Test
