
import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {FaHtml5, FaReact} from 'react-icons/fa'
import {SiBootstrap, SiRedux, SiSanity, SiStyledcomponents, SiTailwindcss} from 'react-icons/si'
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io5'
import {TbBrandNextjs} from 'react-icons/tb'
import {BiGitBranch} from 'react-icons/bi'


const About = () => {
  return (
    <div>

  

  <div className=" md:max-w-2xl px-4 sm:px-8 md:px-0 mx-auto py-12 sm:py-14">
   <div className="flex flex-col gap-4">
   <h2 className="text-4xl font-medium">About Me.</h2>
   <p>Hello, I&apos;m Ololade Eleja,a passionate and skilled Front-end Developer with a creative flair for crafting
    engaging and user-friendly web experiences. I am constantly seeking new challenges and opportunities to improve my craft.
   </p>
   
   <p>Outside of programming, I&apos;m currently pursuing a degree in Petroleum And Gas Engineering at the University Of Lagos,Akoka. While my academic focus lies in the world of Petroleum Engineering, my curiosity
    and love for technology have led me to explore the dynamic realm of web development . I believe that the skills I am acquiring in Engineering, such as
    problem-solving, critical thinking, and attention to details, are a powerful complement to my burgeoning web development expertise.
   </p>

   <p>I embrace the challenge of juggling coursework with my web development journey, as it fuels my determination  to excel in both 
    fields. I&apos;m eager to continue learning , growing, and exploring new horizons. I&apos;m committed to delivering
    solutions that not only meet but exceed expectations.
   </p>
   </div>

   <div className='py-6'>
    <h2 className='pb-4 text-lg'>Technologies i currently work with :</h2>
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 '>

    <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'><FaHtml5 className='w-14 h-14'/><p>HTML</p>
    </div>   

     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'><IoLogoCss3 className='w-14 h-14'/> <p className='text-center'>CSS</p>
     </div>   

     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'><IoLogoJavascript className='w-14 h-14'/><p className='text-center'>Javascript</p></div>  

     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'><FaReact className='w-14 h-14'/> <p className='text-center'>React JS</p>    
    </div>  

     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'> <TbBrandNextjs className='w-14 h-14'/> <p className='text-center'>Next JS</p>
     </div>   

     <div className='uppercase flex flex-col items-center justify-center px-6 gap-2 py-3 bg-zinc-900'><SiTailwindcss className='w-14 h-14'/><p className='text-center'>Tailwind CSS</p>    
    </div>  

     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'><SiBootstrap className='w-14 h-14'/>  <p className='text-center'>Bootstrap</p>
    </div>   

     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'><SiStyledcomponents className='w-14 h-14'/> <p className='text-center'>Styled Components</p>    
    </div>   

     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'><SiSanity className='w-14 h-14'/><p className='text-center'> Sanity io</p>
     </div>   
     
     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'> <SiRedux className='w-14 h-14'/> <p className='text-center'>React Redux</p>
    </div>

     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'> <BiGitBranch className='w-14 h-14'/> <p className='text-center'>Git</p>
    </div>   

     <div className='uppercase flex flex-col items-center px-6 gap-2 py-3 bg-zinc-900'><BsGithub className='w-14 h-14'/><p className='text-center'>GitHub</p>    
    </div>   
    </div>
   </div>
      
   </div>   
    </div>
  )
}

export default About