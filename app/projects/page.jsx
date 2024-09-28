import React from 'react';
import { projectSectionData } from '@/utils/utilsData';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCards from '@/components/ProjectCards/ProjectCards'

const Project = () => {
  return (
    <section className='xl:max-w-6xl relative z-0 px-4 sm:px-8 2xl:px-0 mx-auto py-12 sm:py-12'>
      <div>
        <h1 className='text-left font-rale text-[40px] font-medium '>Projects</h1>
        <p className='flex gap-2 font-rale items-center text-[19px] pb-8 sm:pb-12'>
          Each project is a unique piece of development ✨.
        </p>
      </div>

      <ProjectCards/>

    </section>
  );
};

export default Project;

