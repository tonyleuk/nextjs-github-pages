'use client';

import Letter from './letter';
import { motion } from 'motion/react';
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
            src="/images/lettermagic.png"
          />
        </motion.div>
      </main>
      </Suspense>
    </>
  );
}
