import Link from "next/link"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

export default function Home() {
  return (
   <div>
   <div className="md:max-w-2xl px-4 sm:px-8 md:px-0 mx-auto py-12 sm:py-14">
   <div className="flex flex-col  justify-center gap-4">
   <h2 className="text-[2.8rem] font-[700]">Ololade Eleja .</h2>
 
   <p className=" leading-8">Hi, I'm Ololade Eleja, a passionate Frontend Developer with a knack 
    for crafting immersive web experiences. I thrive on turning creative ideas into polished,
     user-friendly websites that not only look great but also function seamlessly.
     With 1 year and some months of hands-on experience in the ever-evolving world of web development,
      I'm dedicated to staying at the forefront of cutting-edge technologies to deliver top-notch solutions.</p>
   

   <div className="flex flex-row gap-4 py-5">
    <Link className="bg-white text-black px-5 hover:ring-1 hover:bg-transparent hover:ring-white hover:text-white flex items-center py-2 font-medium" href="/ELEJA OLOLADE Resume.pdf" passHref>
      Download Resume
      </Link>
    <Link href='/contact' className="px-8 py-2 border">Contact</Link>
   </div>

   <div className="pt-8">
    <h1 className="text-lg pb-2">Find me on</h1>
    <div className="flex flex-wrap gap-6">
    <Link className="flex gap-1.5 items-center hover:text-blue-500" href='https://github.com/ololade2002'><AiFillGithub className='w-5 h-5'/>  Github</Link>
    <Link className="flex gap-1.5 items-center hover:text-blue-500" href='https://www.linkedin.com/in/eleja-ololade-a24ab81b2/'><AiFillLinkedin className='w-5 h-5'/> Linkedin</Link>
    <Link className="flex gap-1.5 items-center hover:text-blue-500" href='https://twitter.com/lolade_ee'><AiOutlineTwitter className='w-5 h-5'/> Twitter</Link>
    <Link className="flex gap-1.5 items-center hover:text-blue-500" href='https://www.instagram.com/lolade.e/'><AiOutlineInstagram className='w-5 h-5'/> Instagram</Link>
    </div>
   </div>
   </div>

   </div>
   </div>
  )
}
