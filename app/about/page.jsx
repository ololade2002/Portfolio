
import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {FaHtml5, FaReact} from 'react-icons/fa'
import {SiBootstrap, SiTailwindcss} from 'react-icons/si'
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io5'
import {TbBrandNextjs} from 'react-icons/tb'
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link'


const About = () => {
  return (
  <section className='bg-[#f9f1f0]'>
  <div className=" md:max-w-4xl  px-4 sm:px-8 md:px-0 mx-auto py-12 sm:py-14">
   <div className="flex flex-col gap-4 text-black font-rale ">
   <p className='text-[18px] md:text-[17px] pt-2'>Hello, I&apos;m Ololade Eleja,a passionate and skilled Front-end Developer based in Lagos, Nigeria. 
   I have a creative flair for crafting engaging, intuitive, and user-friendly web experiences. I&apos;m always eager to take on new challenges
   and continuously improve my craft.
   </p>
   <p className='text-[18px] md:text-[17px]'>In addition to my work in web development, I am currently pursuing a degree in Petroleum and Gas Engineering
     at the University of Lagos, Akoka. While my academic focus is on Petroleum Engineering, my deep curiosity and passion for technology
     have led me to explore the exciting field of web development. I believe that the problem-solving, critical thinking, and attention
     to detail I&pos;ve honed in engineering are invaluable assets to my growing expertise in front-end development.
   </p>
   <p className='text-[18px] md:text-[17px]'>Balancing my academic pursuits with my web development journey has been both challenging and rewarding, 
    driving my determination to excel in both areas. I am committed to delivering solutions that not only meet but exceed expectations,
    and I look forward to continuing to learn, grow, and explore new opportunities in both fields.
   </p>
   </div>

   <div className='pb-6 pt-4'>
    <h2 className='pb-4 text-[18px] md:text-[17px] font-rale text-[#000]'>Technologies i currently work with :</h2>
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-white  '>

    <div className='uppercase col-span-2 hover:ring-1 hover:ring-[#f8afa6] flex flex-col  items-center px-6 gap-2 py-4 bg-[#fadcd9]  font-[600] text-black font-rale rounded-lg'><FaHtml5 className='w-14 h-14'/><p className='text-center '>HTML</p> </div>   
    <div className='uppercase  items-center flex flex-col px-6 gap-2 py-4 bg-[#fadcd9]  text-black font-[600] hover:ring-1 hover:ring-[#f8afa6] font-rale rounded-lg'><IoLogoCss3 className='w-14 h-14'/> <p className='text-center'>CSS</p></div>   
    <div className='uppercase  items-center flex flex-col px-6 gap-2 py-4 bg-[#fadcd9]  text-black font-[600] hover:ring-1 hover:ring-[#f8afa6] font-rale rounded-lg'><IoLogoJavascript className='w-14 h-14'/><p className='text-center'>Javascript</p></div>  
    <div className='uppercase  items-center flex flex-col px-6 gap-2 py-4 bg-[#fadcd9]  text-black font-[600] hover:ring-1 hover:ring-[#f8afa6] font-rale rounded-lg'><FaReact className='w-14 h-14'/> <p className='text-center'>React JS</p>    </div>  
    <div className='uppercase  items-center flex flex-col px-6 gap-2 py-4 bg-[#fadcd9] text-black font-[600] hover:ring-1 hover:ring-[#f8afa6] font-rale rounded-lg'> <TbBrandNextjs className='w-14 h-14'/> <p className='text-center'>Next JS</p></div>   
    <div className='uppercase flex flex-col col-span-2 row-span-2  items-center justify-center px-6 font-[600] gap-2 py-4 hover:ring-1 hover:ring-[#f8afa6] bg-[#fadcd9] text-black font-rale rounded-lg'><SiTailwindcss className='w-14 h-14'/><p className='text-center'>Tailwind CSS</p>    </div>  
    <div className='uppercase  items-center flex flex-col px-6 gap-2 py-4 bg-[#fadcd9] text-black font-[600] font-rale  hover:ring-1 hover:ring-[#f8afa6] rounded-lg'><SiBootstrap className='w-14 h-14'/>  <p className='text-center'>Bootstrap</p></div>   
    <div className='uppercase  items-center flex flex-col  px-6 gap-2 py-4 bg-[#fadcd9] text-black font-[600] font-rale hover:ring-1 hover:ring-[#f8afa6]  rounded-lg'><BsGithub className='w-14 h-14'/><p className='text-center'>GitHub</p>    </div>   
    </div>
   </div>

   <div className='pt-8 md:pt-16 grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2'>
    <div>
     <h2 className="text-[34px] md:text-4xl font-rale  font-medium">Resume & Work Experience.</h2>
    </div>
    <div>
      <div className='border-t-[2px] border-[#f8afa6] '></div>
      <div className='py-6 flex flex-col gap-2'>
        <h4 className='font-rale font-[500] uppercase text-[15px]'>Bazaar Tech Africa, Lagos - 2023</h4>
        <h2 className='font-rale text-[26px] font-[500]'>Frontend Developer</h2>
      </div>
      <div className=' border-t-2 border-[#f8afa6]'></div>
      <Link href='/ELEJA OLOLADE .pdf' target="_blank" rel="noopener noreferrer" passHref className='flex py-4 gap-2 hover:text-red-500  flex-row items-center '>
      <h2 className='font-rale text-[18px] font-[500]'>Browse full resume</h2>
      <FiArrowUpRight className='h-6 w-6 '/>
     </Link>
    </div>
   </div>
   </div>   
    </section>
  )
}

export default About