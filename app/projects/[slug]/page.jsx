
import React from 'react'
import { projectSectionData } from '../../../utils/utilsData'
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from 'next/link';

const ProjectDetails = ({params}) => {
    const project = projectSectionData.find((project) => project.id === params.slug )
  return (
    <section className=''>
        <div className='md:max-w-4xl px-4 sm:px-8 md:px-0 mx-auto py-12 sm:py-14'>
          <h2 className='font-rale text-[50px] capitalize font-[500] pb-5'>About the project</h2>
          <div className='flex flex-col gap-4'>
          <p className='font-rale text-[18px] '>{project.about1}</p>
          <p className='font-rale text-[18px] '>{project.about2}</p>
           <div className='flex flex-row gap-6'>
            <Link href={project.code} target='_blank' rel="noopener noreferrer" className='font-rale text-[18px] hover:text-red-500 font-[500] bg-[#fadcd9] rounded-md flex flex-row gap-3 items-center px-8 py-3'>
              <p className='hover:text-red-500'>Code</p>
              <FaGithub className='w-5 h-5 hover:text-red-500'/>
            </Link>
            <Link href={project.website} target='_blank' rel="noopener noreferrer" className='font-rale hover:text-red-500 text-[18px] font-[500]  bg-[#fadcd9] rounded-md flex flex-row gap-3 items-center px-8 py-3'>
              <p className='hover:text-red-500'>Live Preview</p>
              <FaArrowUpRightFromSquare className='w-4 h-4 hover:text-red-500'/>
            </Link>
           </div>
          </div>
        </div>
    </section>
  )
}

export default ProjectDetails