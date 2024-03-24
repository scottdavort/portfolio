'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import '../styles/globals.css';

// Define your text and profile picture variations here
const contentVariants = [
  { text: "I'm a very tremendous individual. Super tremendous.", image: '/images/scott_manley_profile_1.png' },
  { text: "Innovative thinker with a passion for technology.", image: '/images/scott_manley_profile_2.png' },
  { text: "Dedicated to crafting seamless digital experiences.", image: '/images/scott_manley_profile_3.png' },
];

const MainContent = () => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Listen to scroll and update content based on position
  useEffect(() => {
    const handleScroll = () => {
      // Example logic to change content based on scroll position
      const newIndex = Math.floor(window.scrollY / (window.innerHeight / contentVariants.length)) % contentVariants.length;
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        controls.start({ opacity: 0 }).then(() => {
          controls.start({ opacity: 1 });
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIndex, controls]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center overflow-hidden">
      {/* Background and content changes based on scroll */}
      <motion.div
        className="w-full h-1/3 bg-primary-blue bg-opacity-30 flex justify-center items-center"
        initial={{ opacity: 1 }}
        animate={controls}
      >
        <div className="flex items-center justify-around max-w-4xl mx-auto px-4 space-x-8">
          <motion.div className="w-32 h-32 bg-gray-200 border-2 border-gray-300 rounded-full overflow-hidden flex justify-center items-center">
            {/* Profile picture changes */}
            <Image src={contentVariants[currentIndex].image} alt="Profile Picture" width={128} height={128} className="rounded-full" />
          </motion.div>
          {/* Text changes */}
          <div className="text-white flex-1">
            <p>{contentVariants[currentIndex].text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
