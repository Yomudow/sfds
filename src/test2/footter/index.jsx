import React from 'react'
import { contacts, kurumsals, products, socials, solvings } from '../utils'

const Footer = () => {
  return (
    <div className='bg-red-500 mt-[5rem] md:px-[3rem] lg:px-[5rem] flex flex-col gap-[3rem]'>
    <div className='px-[1.25rem] gap-4   flex flex-col md:flex-row justify-between  pt-[5rem] '>
        
      <div className='flex flex-col gap-[1.3rem] '>
        <div className='text-white'>Cozum ve Hizmetler</div>
        {
            solvings.map((solving)=>(
                <div className='text-[#E6E6E6]'>{solving.title}</div>
            ))
        }
      </div>
      <div className='flex flex-col gap-[1.3rem]' >
        <div className='text-white'>Urunler</div>
        {products.map((product)=>(
            <div className='text-[#E6E6E6]'>{product.title}</div>
        ))}
      </div>
      <div className='flex flex-col gap-[1.3rem]'>
        <div className='text-white'>Kurumsallar</div>
        {
            kurumsals.map((kurumsal)=>(
                <div className='text-[#E6E6E6]'>{kurumsal.title}</div>
            ))
        }
      </div>
      <div className='flex flex-col gap-[1.3rem]'>
        <div className='text-white'>Contacts</div>
        {contacts.map((contact)=>(
            <div className='text-[#E6E6E6]'>{contact.title}</div>
        ))}
      </div>

      
    </div>
    <div className='mt-4 px-[1.25rem] flex md:items-center justify-between md:flex-row flex-col gap-8 pb-8 '>
    <div className='flex gap-4 md:order-2'>
        {
            socials.map((social)=>(
                <div>{social.icon}</div>
            ))
        }
    </div>
    <div className='text-white'>© Copyright 2023-2024 - Agamyrat Yomudow</div>
  </div>
  </div>
  )
}

export default Footer
