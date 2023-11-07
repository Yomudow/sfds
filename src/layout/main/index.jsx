import React from 'react'
import Header from '../../test2/Header'
import Quality from '../../test2/quality'
import Test from '../../test2/test'
import Birinji from '../../test2/birinji'
import Ikinji from '../../test2/ikinji'
import Referance from '../../test2/referances'
import Contact from '../../test2/contact'
import Footer from '../../test2/footter'



// import Home from '../../pages/home'

const MainLayout = () => {
  return (

    <div className=' '>
          <Header/>
          <Quality/>
          <Test/>
          <Birinji/>
          <Ikinji/>
          <Referance/>
          <Contact/>
          <Footer/>

          {/* <Header/>


         <main className='
         '>
           <Navbar/>
        {/* </main>
        <div className='mt-[1rem] opacity-[0.3] w-full h-[1px] bg-black'></div>

        <main className='px-[135px]'>
          <Home/>
        </main>  */}




    </div>


  )
}

export default MainLayout