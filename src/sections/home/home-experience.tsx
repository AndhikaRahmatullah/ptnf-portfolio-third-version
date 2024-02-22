'use client';

import React from 'react';
import { Chrono } from 'react-chrono';
import { motion } from 'framer-motion';
// constants
import { experiences } from 'src/constants';
// hoc
import { SectionWrapper } from 'src/hoc';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// motion
import { fadeIn, textVariant } from 'src/utils/motion';

// ---------------------------------------------------------------------------------------------

const HomeExperience = () => {
  const { mdUp } = useResponsive();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-center text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">What I have done so far</p>

        <p className="text-center text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">Work Experience.</p>
      </motion.div>

      <motion.div variants={fadeIn('right', 'spring', 1 * 0.5, 0.75)} className="mt-20 lg:w-[1000px]">
        <Chrono
          items={experiences}
          mode={mdUp ? 'VERTICAL_ALTERNATING' : 'VERTICAL'}
          hideControl={true}
          theme={{
            primary: '#915EFF',
          }}
          classNames={{
            card: '!w-full !h-fit',
            cardTitle: '!text-xl !md:text-3xl !text-[#915EFF]',
            cardSubTitle: '!text-base !text-neutral-400',
            cardText: '!text-sm !mx-0 !px-2 !text-neutral-900',
            title: '!bg-[#915EFF] !text-neutral-100 !text-sm !md:text-base',
            controls: '!hidden',
          }}
        >
          <div className="chrono-icons">
            <div className="aspect-auto h-4 w-4 rounded-full bg-neutral-100" />
            <div className="aspect-auto h-4 w-4 rounded-full bg-neutral-100" />
          </div>
        </Chrono>
      </motion.div>
    </>
  );
};

export default SectionWrapper(HomeExperience, 'experience');
