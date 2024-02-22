'use client';

import React from 'react';
// components
import { motion, useScroll, useSpring } from 'framer-motion';
import { StarsCanvas } from 'src/components/canvas';
//
import HomeHero from '../home-hero';
import HomeTech from '../home-tech';
import HomeAbout from '../home-about';
import HomeContact from '../home-contact';
import HomeProject from '../home-project';
import HomeExperience from '../home-experience';

// ---------------------------------------------------------------------------------------------

const HomeView: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section className="flex flex-col gap-20">
      <motion.div style={{ scaleX, transformOrigin: 'left', position: 'sticky', top: 0, width: '100%', height: '5px', zIndex: 30 }} className="bg-gradient-to-r from-[#915EFF]/80 to-[#915EFF]" />

      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat py-5">
        <HomeHero />
      </div>

      <HomeAbout />

      <HomeExperience />

      <HomeTech />

      <HomeProject />

      <div className="relative z-0 pb-10">
        <HomeContact />
        <StarsCanvas />
      </div>
    </section>
  );
};

export default HomeView;
