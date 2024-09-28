"use client"; 
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BsDashLg } from "react-icons/bs";
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";
import './ProjectCards.css';
import { projectSectionData } from '@/utils/utilsData';

const ProjectCards = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  return (
    <section className=' z-10 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6'>
        {projectSectionData.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-inner" style={{ "--clr": "#fff" }}>
              <div className="box">
                <Link href={`projects/${project.id}`} className="imgBox">
                  <Image className='object-cover' src={project.img1} alt='img' />
                </Link>
                <Link href={project.website} target='_blank' className="icon">
                  <div className='iconBox'>
                    <span className="material-symbols-outlined">
                      <MdOutlineArrowOutward className='hover:text-red-700 text-black' />
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            <Link href={`projects/${project.id}`} className='flex flex-col xxs:flex-row xxs:gap-2 hover:text-red-700 items-center justify-center'>
              <h2 className='font-rale font-[500] text-[18px] pt-2 xxs:py-4 pl-4 capitalize'>{project.title}</h2>
              <BsDashLg className='text-black hover:text-red-500' />
              <h2 className='font-rale font-[500] text-[18px]'>{project.text1}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectCards;
