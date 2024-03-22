'use client';
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Importing from next/navigation
import '../styles/globals.css';

interface Highlight {
  date: string;
  content: string;
  images: string[];
}
// highlights array with date, content, and images
const highlights: Highlight[] = [
  {
    date: 'January 2021',
    content: 'Launched new product line',
    images: ['/images/scott_profile_01.jpg', '/images/scott_profile_02.jpg'],
  },
  {
    date: 'February 2021',
    content: 'Reached 1 million users',
    images: ['/images/scott_profile_02.jpg', '/images/scott_profile_04.jpg'],
  },
  {
    date: 'March 2021',
    content: 'Hosted successful webinar',
    images: ['/images/webinar1.jpg', '/images/webinar2.jpg'],
  },

];

const About = () => {
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
      {highlights.map((highlight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="highlight-section text-center p-4 w-full"
          style={{ opacity }}
        >
          <div className="text-xl font-semibold">{highlight.date}</div>
          <p>{highlight.content}</p>
          <div className="flex justify-around items-center w-full xl:h-auto">
            {highlight.images.map((image, imgIndex) => (
              <motion.div key={imgIndex} className="fade-in xl:w-1/2 xl:flex xl:justify-end xl:items-end" style={{ opacity }}>
                <Image src={image} alt={`Highlight Image ${imgIndex}`} width={500} height={500} layout="responsive" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default About;
