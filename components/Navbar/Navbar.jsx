"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'

const Navbar = () => {
  const [mobile,setMobile] = useState(false)

  return (
  <div className='w-[95%] md:w-[97%] rounded-lg mt-4 mx-auto bg-[#fadcd9] '>
     <div className='px-4 sm:px-8 md:px-12 lg:px-2 md:max-w-7xl mx-auto py-3 '>
     <div>
      
     <div className='flex flex-row items-center justify-between  text-black '>

     <div className='z-50'>
     <Link className='flex flex-col' href='/'>  
     <p className='text-[22px] font-[400] font-gilda '>OLOLADE <i>ELEJA</i></p>
     </Link>  
     </div>
     
     <div>
     <div className={mobile  ? 'mobileLink' : 'webLink'} onClick={() => setMobile(false)}>
     <Link className='uppercase font-[500] text-[20px] font-rale md:text-[15px] hover:text-red-600 md:font-rale' href='/about'>About</Link>
     <Link className='uppercase font-[500] text-[20px] font-rale md:text-[15px] hover:text-red-600 md:font-rale' href='/projects'>Projects</Link>  
     <Link className='uppercase font-[500] text-[20px] font-rale md:text-[15px] hover:text-red-600 md:font-rale' href='/contact'>Contact</Link>   
     <Link href='/'></Link>
     </div>   
     </div>

      {/*Mobile Nav */}
     <button className='menu' onClick={() =>setMobile(!mobile)}>
     {mobile ? <AiOutlineClose className='h-6 w-6'/> : <BiMenu/>  }  
     </button>
     
     </div>
     </div>
   </div>
  </div>
  )
}

export default Navbar