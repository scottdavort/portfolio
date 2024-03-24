'use client';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import React from 'react'; // Ensure React is imported when using JSX
import Image from 'next/image'; // Import the Image component from Next.js

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleScrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight });
  };

  // Content for the hero section
  const heroContent = () => (
    <p className="text-white text-opacity-80 text-center py-8"> 
      A dynamic showcase of technological expertise and innovative solutions. This platform, crafted with NextJS and styled with Tailwind CSS, represents not just the culmination of Scott's experience but also his forward-thinking approach to technology and marketing...
    </p>
  );

  // Skills array to map through
  const skills = ["Product Marketing", "AI Solutions", "Digital Transformation", "Customer Insights", "Strategic Sales", "Enterprise Growth", "Content Creation", "Training", "Product Evangelism", "Sales Operations"];

  return (
    <section className="flex flex-col gap-10 py-8 pb-32 md:gap-28 lg:py-12 xl:flex-row bg-blue-500 text-gray-100 px-10">
      <div className="flex flex-col items-center text-center xl:items-start xl:text-left xl:flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-8">Welcome to Scott Manley's Portfolio</h1>
        {heroContent()}
        <motion.div 
          className="flex flex-wrap justify-center items-center py-2 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
