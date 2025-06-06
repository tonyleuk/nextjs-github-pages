'use client'; // Only needed if you use animation, state, or effects

import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'next/navigation';

interface ImageWithTextProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const transition = {
    duration: 2,
    delay: 1.5,
    ease: 0,
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ src, alt, title, description }) => {
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || '';
  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4">
    {/* Centered container with specific height and aspect ratio */}
    <div className="relative w-[60vh] h-[80vh] max-w-[90vw] max-h-[90vw]">
      
      {/* --- Layer 1: Background Image --- */}
      <Image
        src="/DigitalLetter/images/lettermagic.png"
        alt="Background Image"
        fill
        className="object-cover z-10"
        priority
        unoptimized
      />

      {/* --- Layer 2: Image2 + Text Group --- */}
      <motion.div 
        transition={transition}
        initial={{scale: 0}}
        animate={{ y: ['0vh','-25vh',0], scale: [0,0.4,1], zIndex: [21,21,21,21] }}
        className="absolute inset-0 z-10 flex justify-center items-center"
      >
        <div className="relative">
            <Image
            src="/DigitalLetter/images/letter.jpg"
            alt="Middle Image"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
            unoptimized
            />
            <div className="shadow-lgw-1/2 mx-auto absolute inset-0 z-10 flex flex-col items-center justify-center text-center gap-4 px-4"> 
                <h1 className="text-black">Hello {name}, join us on</h1>
                <h2 className="text-black">May 9th 2026<br />London</h2>
                <h3 className="text-black">Kathy & Leon</h3>
            </div>
        </div>
      </motion.div>

      {/* --- Layer 3: Video Overlay --- */}
      <video
        src="/DigitalLetter/images/letter.webm"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-20 opacity-100 pointer-events-none"
      />
    </div>
  </div>
  );
};

export default ImageWithText;