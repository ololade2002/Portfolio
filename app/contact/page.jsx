import Link from "next/link"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import React from 'react'

const Contact = () => {
  return (
    <div>
      
    <div className="md:max-w-2xl px-4 sm:px-8 md:px-0 mx-auto py-12 sm:py-14">
    <div className="text-white">
    <h2 className=" text-4xl font-medium">Get in touch</h2>
    <p className="pt-3 pb-10">Thank you for visiting my portfolio! If you&apos;d like to get in touch, I&apos;d love to hear from you.
    Whether you have a project in mind, a job opportunity, or just want to say hello, 
    feel free to reach out .</p>

    <Link  href='mailto:elejaololadee@gmail.com' className="px-6 py-3 text-center width-f hover:ring-2 ring-1 ring-white rounded-md">Send An Email</Link>  

    <div className="pt-10 ">
    <p> I look forward to connecting with you and discussing how I can help you
    with your web development needs or answer any questions you may have.
    Thank you for considering me for your project or collaboration.
    </p>
    </div> 
    
    <div className="pt-8">
    <div className="flex flex-wrap gap-x-8 gap-y-3 ">
    <Link className="flex gap-1.5 items-center hover:text-blue-500" href='https://github.com/ololade2002'><AiFillGithub className='w-5 h-5'/>  Github</Link>
    <Link className="flex gap-1.5 items-center hover:text-blue-500" href='https://www.linkedin.com/in/ololade-eleja-a24ab81b2/'><AiFillLinkedin className='w-5 h-5'/> Linkedin</Link>
    <Link className="flex gap-1.5 items-center hover:text-blue-500" href='https://twitter.com/lolade_ee'><AiOutlineTwitter className='w-5 h-5'/> Twitter</Link>
    <Link className="flex gap-1.5 items-center hover:text-blue-500" href='https://www.instagram.com/lolade.e/'><AiOutlineInstagram className='w-5 h-5'/> Instagram</Link>
    </div>
   </div>

    </div>
    </div>
    </div>
  )
}

export default Contact