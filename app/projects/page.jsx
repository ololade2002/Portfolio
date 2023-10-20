
import React from 'react'
import Image from 'next/image'
import {AiOutlineGithub} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'
import entire from '../../public/entire-studios1.jpg'
import Link from 'next/link'
import img1 from '../../public/entire2.png'
import img2 from '@/public/bara3.png'
import img3 from '@/public/bara.png'
import img4 from '@/public/mlc.png'
import img5 from '@/public/mlc2.png'
import img6 from '@/public/eraf3.png'
import img7 from '@/public/eraf.png'
import img8 from '@/public/hoobank3.png'
import img9 from '@/public/hoobank.png'
import img10 from '@/public/nftlanding.png'
import img11 from '@/public/nftlanding.png'
import cowboy2 from '@/public/Cowboy - Electric Bike1.png'
import cowboy1 from '@/public/standard_resolution5.jpg'

const Project = () => {
  return (
    <div>
    <div className='xl:max-w-6xl px-4 sm:px-8 2xl:px-0 mx-auto py-12 sm:py-14'>
    <div>
    <h1 className='text-left pb-2 text-4xl font-medium '>Projects</h1>
    <p className='flex  gap-2 items-center text-[19px] pb-8 sm:pb-12'>Each project is a unique piece of development ✨.  </p>
    </div>
    
    <div className="project-body">

    <div className="entire-studios flex flex-col lg:flex-row gap-4 sm:gap-8 pb-16 sm:pb-24 ">
    <div className='w-full rounded-lg relative overflow-hidden lg:w-8/12 '>
    <Image className='sm:h-[85vh] hover:scale-105 transition duration-[0.9s] rounded-lg object-cover' src={entire} alt='Entire-studios'/>
    <div>  
    </div>
    </div>

    <div className='w-full lg:w-6/12 flex flex-col sm:flex-row gap-4 lg:gap-0 lg:flex-col '>
    <div className='w-full rounded-lg relative overflow-hidden sm:w-6/12 lg:w-full'>
    <Image className='rounded-lg sm:h-[65vh] hover:scale-105 transition duration-[0.9s] img-box object-cover lg:h-[40vh]' src={img1} alt='Entire-studios'/>   
    </div>   
     
    <div className='w-full sm:w-6/12  lg:w-full'>
    <p className='lg:pt-6 pb-2 text-lg'>E-commerce Website</p>
    <p className=' pb-3'>This dynamic platform seamlessly connects fashion enthusiasts with
    curated collections of clothings. With user-friendly navigation, secure payment 
    processing, and an intuitive shopping cart, this website simplifies the path from browsing to purchase.</p>
    <div className='flex flex-row flex-wrap gap-3 pb-4'>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Next JS</div>   
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Tailwind CSS</div>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>React Redux</div>
    </div>
    <div className='flex flex-row items-center gap-5 '>
     <Link href='https://github.com/ololade2002/entirestudios-clone' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Code <AiOutlineGithub/></Link>   
     <Link href='https://entirestudios-clone.vercel.app/' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Live Demo <FiExternalLink/></Link>   
    </div>
     </div>

    </div>  
    </div> 

    <div className="cowboy flex flex-col lg:flex-row-reverse gap-4 sm:gap-8 pb-16 sm:pb-24  ">
    <div className='w-full rounded-lg relative overflow-hidden img-box lg:w-8/12 '>
    <Image className='sm:h-[85vh] hover:scale-105 transition duration-[0.9s] rounded-lg object-cover ' src={cowboy1} alt='Home Rental Website'/>
    <div>  
    </div>
    </div>

    <div className='w-full lg:w-6/12 flex flex-col sm:flex-row gap-4 lg:gap-0 lg:flex-col '>
    <div className='w-full rounded-lg relative overflow-hidden  sm:w-6/12 lg:w-full'>
    <Image className='rounded-lg hover:scale-105 transition duration-[0.9s]  sm:h-[65vh] object-cover lg:h-[40vh]' src={cowboy2} alt='Home Rental Website'/>    
    </div>
    <div className=' w-full sm:w-6/12 lg:w-full '>
    <p className='lg:pt-6 pb-3 text-xl'>Ecommerce Website</p>
    <p className=' pb-3'>The electric bike website clone successfully recreated the core features of the original site,
     demonstrating my proficiency in web development and design. The project is a testament to my ability to work with 
     various technologies and create user-friendly, responsive, and secure web applications. .</p>
     <div className='flex flex-row flex-wrap  gap-3 pb-4'>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Next JS</div>   
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Tailwind CSS</div>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Animate On Scroll</div>
    </div>
    <div className='flex flex-row items-center gap-5 '>
     <Link href='https://github.com/ololade2002/Cowboy' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Code <AiOutlineGithub/></Link>   
     <Link href='https://cowboy-clone.vercel.app/' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Live Demo <FiExternalLink/></Link>   
    </div>
    </div>

    </div>  
    </div>  

    <div className="reykjavik flex flex-col lg:flex-row gap-4 sm:gap-8 pb-16 sm:pb-24 ">
    <div className='w-full rounded-lg relative overflow-hidden img-box lg:w-8/12'>
    <Image className='sm:h-[85vh] hover:scale-105 transition duration-[0.9s] rounded-lg  object-cover' src={img2} alt='Entire-studios'/>
    <div>  
    </div>
    </div>
    <div className='w-full lg:w-6/12 flex flex-col sm:flex-row gap-4 lg:gap-0 lg:flex-col'>
    <div className='w-full rounded-lg relative overflow-hidden sm:w-6/12 lg:w-full'>
    <Image className='rounded-lg sm:h-[65vh] hover:scale-105 transition duration-[0.9s] object-cover lg:h-[40vh]' src={img3} alt='Entire-studios'/>    
    </div>
   
    <div className='w-full sm:w-6/12 lg:w-full'>
    <p className='lg:pt-6 pb-3 text-xl'>Interior Decor Website</p>
    <p className=' pb-3'>This website showcases an exquisite collection of different interior 
    decorations, seamlessly blending aesthetics and functionality. With an elegant design, 
    intuitive navigation, and captivating project galleries, it serves as an immersive platform
     for design enthusiasts.</p>
     <div className='flex flex-row flex-wrap  gap-3 pb-4'>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Next JS</div>   
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Tailwind CSS</div>
    </div>
    <div className='flex flex-row items-center gap-5 '>
     <Link href='https://github.com/ololade2002/MrBara' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Code <AiOutlineGithub/></Link>   
     <Link href='https://mr-bara.vercel.app/' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Live Demo <FiExternalLink/></Link>   
    </div>
    </div>
    
    </div>  
    </div>  
    
    <div className="mlc flex flex-col lg:flex-row-reverse gap-4 sm:gap-8 pb-16 sm:pb-24  ">
    <div className='w-full rounded-lg relative overflow-hidden img-box lg:w-8/12 '>
    <Image className='sm:h-[85vh] hover:scale-105 transition duration-[0.9s] rounded-lg object-cover' src={img5} alt='Home Rental Website'/>
    <div>  
    </div>
    </div>

    <div className='w-full lg:w-6/12 flex flex-col sm:flex-row gap-4 lg:gap-0 lg:flex-col '>
    <div className='w-full rounded-lg relative overflow-hidden sm:w-6/12 lg:w-full'>
    <Image className='rounded-lg hover:scale-105 transition duration-[0.9s] sm:h-[65vh] object-cover lg:h-[40vh]' src={img4} alt='Home Rental Website'/>    
    </div>
    <div className=' w-full sm:w-6/12 lg:w-full '>
    <p className='lg:pt-6 pb-3 text-xl'>Home Rental Website</p>
    <p className=' pb-3'>Minimum Living Cost is an innovative affordable house rental website aimed at 
    simplifying the search for budget-friendly rental properties.This user-friendly platform offers
     a seamless experience and provides detailed property listings .</p>
     <div className='flex flex-row flex-wrap  gap-3 pb-4'>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>React JS</div>   
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Vanilla CSS</div>
    </div>
    <div className='flex flex-row items-center gap-5 '>
     <Link href='https://github.com/ololade2002/Home-Rental' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Code <AiOutlineGithub/></Link>   
     <Link href='https://mlchome.netlify.app/' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Live Demo <FiExternalLink/></Link>   
    </div>
    </div>

    </div>  
    </div> 

    <div className="eraf flex flex-col lg:flex-row gap-4 sm:gap-8 pb-16 sm:pb-24 ">
    <div className='w-full rounded-lg relative overflow-hidden lg:w-8/12 '>
    <Image className='sm:h-[85vh] hover:scale-105 transition duration-[0.9s] rounded-lg object-cover' src={img6} alt='Photography Landing Page'/>
    <div>  
    </div>
    </div>

    <div className='w-full lg:w-6/12 flex flex-col sm:flex-row gap-4 lg:gap-0 lg:flex-col'>
     <div className='w-full rounded-lg relative overflow-hidden sm:w-6/12 lg:w-full'>
    <Image className='rounded-lg hover:scale-105 transition duration-[0.9s] img-box sm:h-[65vh] object-cover lg:h-[40vh]' src={img7} alt='Photography Landing Page'/>    
     </div>

    <div className='w-full sm:w-6/12 lg:w-full'>
    <p className='lg:pt-6 pb-3 text-xl'>Photography Landing Page</p>
    <p className=' pb-3'>This dynamic platform combines the power of stunning imagery with subtle animations to engage visitors in a unique visual experience. This website showcases
     the magic of photography in a way that is both visually stimulating and emotionally resonant.</p>
     <div className='flex flex-row flex-wrap gap-3 pb-4'>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>React JS</div>   
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Vanilla CSS</div>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>GSAP</div>
    </div>
    <div className='flex flex-row items-center gap-5 '>
     <Link href='https://github.com/ololade2002/Animated-portfolio' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Code <AiOutlineGithub/></Link>   
     <Link href='https://eraf.netlify.app/' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Live Demo <FiExternalLink/></Link>   
    </div>
    </div>
    </div>  
    </div> 

    <div className="hoobank flex flex-col lg:flex-row-reverse gap-4 sm:gap-8 pb-16 sm:pb-24">
    <div className='w-full rounded-lg relative overflow-hidden lg:w-8/12 '>
    <Image className='sm:h-[85vh] img-box hover:scale-105 transition duration-[0.9s] rounded-lg object-cover' src={img8} alt='Modern Payment Website'/>
    <div>  
    </div>
    </div>

    <div className='w-full lg:w-6/12 flex flex-col sm:flex-row gap-4 lg:gap-0 lg:flex-col '>
    <div className='w-full rounded-lg relative overflow-hidden sm:w-6/12 lg:w-full'>
    <Image className='rounded-lg hover:scale-105 transition duration-[0.9s] sm:h-[65vh] object-cover lg:h-[40vh]' src={img9} alt='Modern Payment Website'/>    
    </div>

    <div className='w-full sm:w-6/12 lg:w-full'>
    <p className='lg:pt-6 pb-3 text-xl'>Modern Payment Website</p>
    <p className=' pb-3'>This visually engaging and responsive platform introduces users to the future of seamless, secure, and convenient digital payments. 
    With a focus on user experience, it showcases the platform&apos;s key features and benefits.</p>
     <div className='flex flex-row flex-wrap gap-3 pb-4'>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>React JS</div>   
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Vanilla CSS</div>
    </div>
    <div className='flex flex-row items-center gap-5 '>
     <Link href='https://github.com/ololade2002/Modern-bank' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Code <AiOutlineGithub/></Link>   
     <Link href='https://modern-bank-dev.netlify.app/' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Live Demo <FiExternalLink/></Link>   
    </div> 
    </div> 
    </div>  
    </div> 

    <div className="nftlanding flex flex-col lg:flex-row gap-4 sm:gap-8 pb-16 sm:pb-24 ">
    <div className='w-full rounded-lg relative overflow-hidden lg:w-8/12 '>
    <Image className='sm:h-[85vh] hover:scale-105 transition duration-[0.9s] shadow-2xl rounded-lg object-cover' src={img10} alt='Entire-studios'/>
    <div>  
    </div>
    </div>

    <div className='w-full lg:w-6/12 flex flex-col sm:flex-row gap-4 lg:gap-0 lg:flex-col '>
    <div className='w-full rounded-lg relative overflow-hidden sm:w-6/12 lg:w-full'>
    <Image className='rounded-lg img-box hover:scale-105 transition duration-[0.9s] sm:h-[65vh] object-cover lg:h-[40vh]' src={img11} alt='Entire-studios'/>    
    </div>
   
    <div className='w-full sm:w-6/12 lg:w-full'>
    <p className='lg:pt-6 pb-3 text-xl'>NFT Landing Page</p>
    <p className=' pb-3'>I had the privilege of developing a simple NFT website that empowers creators and collectors in the digital art realm. This innovative platform provides a 
    secure marketplace for buying, selling, and creating non-fungible tokens.</p>
     <div className='flex flex-row flex-wrap gap-3 pb-4'>
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>React JS</div>   
     <div className=' px-2 py-1 text-[13px] rounded-md bg-slate-500'>Tailwind CSS</div>
    </div>
    <div className='flex flex-row items-center gap-5 '>
     <Link href='https://github.com/ololade2002/Nft-Project' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Code <AiOutlineGithub/></Link>   
     <Link href='https://nftlanding-dev.netlify.app/' target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center hover:text-blue-500 '>Live Demo <FiExternalLink/></Link>   
    </div>
    </div>
    </div>  
    </div> 

    </div>
    </div>   
    </div>
  )
}

export default Project

