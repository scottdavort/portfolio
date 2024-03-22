'use client';
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Importing from next/navigation
import '../styles/globals.css';



const MainContent = () => {
  const pathname = usePathname(); // Using usePathname to get the current path
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // // Directly checking if pathname equals '/' to conditionally render
  // if (pathname !== '/') {
  //   return null;
  // }

  return (
    <div className="space-y-8 bg-gray-700 min-h-screen flex flex-col items-center overflow-auto">
      <motion.div className="fixed top-0 left-0 h-1 bg-red-500 z-50" style={{ width: '100%', scaleX: scrollYProgress }} initial={{ scaleX: 0 }} />
      <Image src="/intro_bg_penguin.jpg" alt="Scott Manley" width={250} height={250} layout="responsive" />

    </div>
  );
};

export default MainContent;
