'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
//
import CanvasLoader from '../loader';

// ---------------------------------------------------------------------------------------------

interface ComputersProps {
  isMobile: boolean;
}

// ---------------------------------------------------------------------------------------------

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <mesh>
      <ambientLight intensity={Math.PI / 2} />
      <directionalLight position={[0, 0, 5]} color="#915EFF" intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <pointLight position={[-0.01, 0, 0]} intensity={Math.PI} />
      <directionalLight position={[-20, 50, 10]} color="#FFF" intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { mdDown } = useResponsive();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="demand" shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: mdDown ? 50 : 25 }} gl={{ preserveDrawingBuffer: true }} className="cursor-grab">
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
