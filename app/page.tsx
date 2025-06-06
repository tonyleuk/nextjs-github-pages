'use client';

import Image from "next/image";
import { motion } from 'motion/react';

import Letter from './letter';
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
      <main className="flex justify-center">  
        <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Letter
            src="/images/photo.jpg"
            alt="Example"
            title="This is a title"
            description="This is a description under the image."
          />
        </motion.div>
      </main>
      </Suspense>
    </>
  );
}
