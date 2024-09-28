import Image from "next/image"
import flowerIcon from '@/public/FLOWER ICON.png'
import circleIcon from '@/public/Vector.png'
import img from '@/public/Lolade1.jpeg'
import Accordion from '@/components/Accordion/Accordion'
import Link from "next/link"
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Home() {
  return (
   <div className="bg-[#f9f1f0] pb-4 md:pb-0 pt-4">

   <div className="  w-[95%] md:w-[97%] mx-auto rounded-lg  ">  
    <div className="grid gris-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 ">

     <div className=" flex flex-col order-1 md:order-1 gap-2 items-end bg-[#fadcd9]  lg:col-span-5 px-3 lg:px-6 py-4 rounded-lg ">
      <div>
        <Image className="w-16 object-cover " src={flowerIcon} alt="Flower Icon"/>
      </div>
      <div>
        <h2 className="font-rale text-[24px] lg:text-[28px] capitalize font-[600]">Creating Pixel-Perfect Web Applications with Modern Frontend Technologies.</h2>
      </div>
     </div>

     <div className=" bg-[#fadcd9] order-4 md:order-2 lg:col-span-2 rounded-lg ">
      <Image className="rounded-lg w-full lg:h-[44vh] object-cover object-center " src={img} alt='image'/>
     </div>

     <div className=" bg-[#f9f1f0] order-3 md:order-3 lg:col-span-5 row-span-2 h-[100%]  gap-4 flex flex-col rounded-lg ">
      <div className="bg-[#fadcd9] rounded-lg  ">
        <Accordion  />
      </div>
      <div className="bg-[#fadcd9] flex py-3 px-2 lg:px-16 flex-row font-rale justify-between rounded-lg">
        <Link href='https://github.com/ololade2002' className="font-rale text-[14px] font-[600] hover:text-red-500">GITHUB</Link>
        <Link href='https://www.linkedin.com/in/ololade-eleja-a24ab81b2/' className="font-rale text-[14px] font-[600] hover:text-red-500">LINKEDIN</Link>
        <Link href='https://www.instagram.com/lolade.e/' className="font-rale text-[14px] font-[600] hover:text-red-500">INSTAGRAM</Link>
      </div>
     </div>

     <Link href='/about' className=" bg-[#fadcd9] order-2 md:order-4 lg:col-span-4 hover:bg-[#f6cac6] px-3 lg:px-6 py-4 gap-12 flex flex-col rounded-lg">
      <div>
        <Image className="w-8 " src={circleIcon} alt='Circle Icon'/>
      </div>
      <div>
        <h2 className="font-rale font-[500] pt-2 text-[17px]">Hello, I&apos;m Ololade Eleja, a frontend developer with a passion for building engaging
           and intuitive web experiences. I love bringing creative ideas to ....
        </h2>
      </div>
     </Link>

     <Link href='/contact' className=" h-[30vh] md:h-full bg-[#f8afa6] order-5 md:order-5 lg:col-span-3 px-3 md:px-4 py-3 flex flex-col justify-between rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-rale font-[500] text-[16px]">Have some questions ?</h2>
        <div >
        <MdOutlineArrowOutward className='w-6 h-6 hover:text-red-700' />
        </div>
      </div>
      <div>
        <h2 className="text-[35px] font-[500] capitalize font-rale">Contact me</h2>
      </div>
     </Link>

    </div>
   </div>
   </div>
  )
}

