'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
// constants
import { services } from 'src/constants';
// hoc
import { SectionWrapper } from 'src/hoc';
// utils
import { fadeIn, textVariant } from 'src/utils/motion';

// ---------------------------------------------------------------------------------------------

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string | StaticImageData;
}

// ---------------------------------------------------------------------------------------------

const HomeAbout: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">Introduction</p>
        <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary">
        I am an experienced frontend programmer with extensive skills in developing various types of projects. Over the years, I have been involved in numerous freelance projects including the
        creation of backoffice systems, e-commerce platforms, and company profile websites. I am highly proficient in utilizing various UI libraries such as React.js and Vue.js, and possess solid
        skills in using TypeScript to enhance the quality of my code. Furthermore, I have expertise in utilizing CSS libraries like Tailwind CSS and Material UI to design attractive and responsive
        user interfaces. My ability to integrate APIs ensures efficient communication between frontend and backend applications. Additionally, I have additional skills in operating Node.js as a
        server-side application, as well as experience in programming languages such as Java and Python. The combination of my experience and skills enables me to make valuable contributions to every
        project I undertake.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt className="w-full xs:w-[250px]">
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)} className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card">
      <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5">
        <Image src={icon} alt={title} width={64} height={64} className="object-contain" />
        <p className="text-center text-[20px] font-bold text-white">{title}</p>
      </div>
    </motion.div>
  </Tilt>
);

export default SectionWrapper(HomeAbout, 'about');
