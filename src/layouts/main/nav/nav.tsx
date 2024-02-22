'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { motion, useAnimate, stagger } from 'framer-motion';
//
import { configNavigation } from '../config-navigation';

// ---------------------------------------------------------------------------------------------

const NavigationBar: React.FC = () => {
  const [active, setActive] = useState<string>('');

  const [toggle, setToggle] = useState<boolean>(false);

  const [scrolled, setScrolled] = useState<boolean>(false);

  const scope = useMenuAnimation(toggle);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={twMerge('fixed top-0 z-20 flex w-full items-center bg-transparent px-6 py-5 sm:px-16', scrolled && 'backdrop-blur-md')}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            Andhika &nbsp;
            <span className="hidden sm:block">Rahmatullah</span>
          </p>
        </Link>

        <div ref={scope}>
          <motion.button whileTap={{ scale: 0.8 }} onClick={() => setToggle(!toggle)}>
            <img src="/assets/menu.svg" alt="menu" className="h-[28px] w-[28px] object-contain" />
          </motion.button>

          <div id="navContainer" className="absolute right-0 top-0 h-screen w-[300px] bg-gradient-to-b from-[#783afd] to-[#915EFF] p-5">
            <motion.button whileTap={{ scale: 0.8 }} onClick={() => setToggle(!toggle)}>
              <img src="/assets/close.svg" alt="close" className="h-[28px] w-[28px] object-contain" />
            </motion.button>

            <ul className="mt-5 flex list-none flex-col items-start justify-end gap-4">
              {configNavigation.map((nav, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-[16px] font-medium ${active === nav.title ? 'text-neutral-100' : 'text-neutral-100/50'}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.path}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();

  const staggerMenuItems = stagger(0.3, { startDelay: 0.3 });

  useEffect(() => {
    animate('#navContainer', { x: isOpen ? 0 : 300 }, { duration: 0.3, type: 'tween', ease: 'easeInOut' });

    animate(
      'ul',
      {
        clipPath: isOpen ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      },
    );

    animate('li', isOpen ? { opacity: 1, skewX: '720deg' } : { opacity: 0, skewX: '0deg' }, {
      delay: isOpen ? staggerMenuItems : 0,
      duration: 0.3,
    });
  }, [isOpen, animate, staggerMenuItems]);

  return scope;
};

export default NavigationBar;
