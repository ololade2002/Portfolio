"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'

const Navbar = () => {
  const [mobile,setMobile] = useState(false)

  return (
  <div className='relative z-50 '>
     <div className='px-4 sm:px-8 md:px-12 lg:px-2 md:max-w-7xl mx-auto py-6 '>
     <div>
      
     <div className='flex flex-row items-center justify-between  text-white '>

     <div className='z-50'>
     <Link className='flex flex-col' href='/'>  
     <p className='text-lg '>ololadeeleja</p>
     </Link>  
     </div>
     
     <div>
     <div className={mobile  ? 'mobileLink' : 'webLink'} onClick={() => setMobile(false)}>
     <Link href='/about'>About</Link>
     <Link href='/projects'>Projects</Link>  
     <Link href='/contact'>Contact</Link>   
     <Link href='/'></Link>
     </div>   
     </div>

      {/*Mobile Nav */}
     <button className='menu' onClick={() =>setMobile(!mobile)}>
     {mobile ? <AiOutlineClose/> : <BiMenu/>  }  
     </button>
     
     </div>
     </div>
   </div>
  </div>
  )
}

export default Navbar