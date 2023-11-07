import React from 'react'
import { services } from '../utils'

const Quality = () => {
    return (
        <div className='mb-[6.75rem] px-[1.25rem] md:px-[5.38rem] mt-[3.75rem] '>
            <h2 className='font-bold text-[2.25rem] text-center'>Kalite ve Süreç Yönetimi</h2>
            <p className='mt-[1rem] text-[1.5rem] font-normal font-manrope text-center'>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
           <div className='flex-wrap flex'>
           {services.map((service)=>(
                 <div className='mt-[5rem] flex flex-col items-center gap-2 md:w-1/2 lg:w-1/3'>
                    <div >{service.icon}</div>
                    <div className='text-[1.5rem] font-bold'>{service.title}</div>
                    <div className='text-center text-[1.125rem] px-10'>{service.paragraph}</div>
                 </div>
            ))}
           </div>


        </div>
    )
}

export default Quality
