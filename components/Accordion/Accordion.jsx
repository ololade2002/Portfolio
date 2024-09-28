"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link'; 
import entireStudios from '@/public/entireStudios3.png';
import atlas from '@/public/Atlas2.png';
import cowboy from '@/public/Cowboy - Electric Bike1.png';
import { MdOutlineArrowOutward } from "react-icons/md";

const AccordionItem = ({ title, img, isOpen, onClick, link }) => {
  return (
    <div className="border-b border-[#f8afa6]">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 rounded-lg text-left focus:outline-none">
        <span className="font-rale hover:text-red-500 text-[17px] font-[600]">{title}</span>
        <Link href={link} target='_blank' passHref>
         <MdOutlineArrowOutward className='w-5 h-5 hover:text-red-500' />
        </Link>
      </button>

      {isOpen && (
        <div className="rounded-lg">
          <Image className="w-full rounded-lg object-contain pb-4" src={img} alt="Project image" />
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: 'Entire-studios',
      img: entireStudios,
      link: 'https://entirestudios-clone.vercel.app/'  
    },
    {
      title: 'Atlas',
      img: atlas,
      link: 'https://atlasclone.vercel.app'
    },
    {
      title: 'Cowboy',
      img: cowboy,
      link: 'https://cowboy-clone.vercel.app/'
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="pb-4 px-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          img={item.img}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
          link={item.link}  
        />
      ))}
    </div>
  );
};

export default Accordion;

