'use client';

import React from 'react';
// hoc
import { SectionWrapper } from 'src/hoc';
// constants
import { technologies } from 'src/constants';
// components
import { BallCanvas } from 'src/components/canvas';

// ---------------------------------------------------------------------------------------------

const HomeTech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(HomeTech, '');
