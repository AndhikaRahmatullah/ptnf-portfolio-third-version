'use client';

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
// hoc
import { SectionWrapper } from 'src/hoc';
// constants
import { projects } from 'src/constants';
// utils
import { fadeIn, textVariant } from 'src/utils/motion';

// ---------------------------------------------------------------------------------------------

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  image: string;
  source_code_link: string;
  tags: {
    name: string;
    color: string;
  }[];
}

// ---------------------------------------------------------------------------------------------

const HomeProject = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">My work</p>
        <p className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">Projects.</p>
      </motion.div>

      <div className="flex w-full">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to live demos in it. It reflects my ability to
          solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]">
        <div className="relative h-[230px] w-full">
          <img src={image} alt="project_image" className="h-full w-full rounded-2xl object-cover" />

          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <div onClick={() => window.open(source_code_link, '_blank')} className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
              <img src="/assets/website.png" alt="source code" className="h-1/2 w-1/2 bg-transparent object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SectionWrapper(HomeProject, 'projects');
