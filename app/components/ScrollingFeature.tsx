'use client'
// app/components/ScrollingFeature.tsx
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
// import global.css 

import '../styles/globals.css';


// highlights array

const highlights = [
  {
    date: "January 1, 2024",
    content: "The advent of technology has significantly influenced various aspects of our lives, and cat ownership is no exception. From smart litter boxes to interactive toys, technology has transformed the way we care for and interact with our feline companions. One of the most notable advancements in cat technology is the smart litter box. These high-tech litter boxes can detect changes in a cat's urine, alerting owners to potential health issues before they become severe. ",
    images: ['/scott_profile_01.png',]
  },
  {
    date: "January 1, 2023",
    content: "Ears perked high, eyes gleaming with delight, Curled up in a cozy, sunlit spot. Nine lives they claim, each day and night, Mysterious creatures, our hearts they've got. Furthermore, technology has also played a crucial role in cat behavior analysis. Wearable devices and smart collars can track a cat's activity levels, sleep patterns, and overall health, providing valuable insights into their well-being. These devices can even detect changes in a cat's behavior, helping owners identify potential issues and address them promptly.",
    images: [ '/scott_profile_casual_02.png']
  },
  {
    date: "January 1, 2022",
    content: "Softly padding, silent as the night, Mysterious shadows, dancing light. Velvet paws, a gentle stroke, In their company, tranquility invoke.In addition to these advancements, technology has also facilitated the growth of online cat communities. Social media platforms, blogs, and forums provide a space for cat owners to share experiences, ask questions, and learn from one another. These online communities foster a sense of camaraderie and support, making it easier for cat owners to navigate the challenges and joys of cat ownership. In conclusion, technology has revolutionized cat ownership, offering numerous benefits for both cats and their owners. From smart litter boxes to online communities, technology has improved cat care, enhanced feline entertainment, and facilitated communication among cat owners. As technology continues to evolve, it is exciting to imagine the possibilities it may bring to the world of cat ownership.",
    images: ['/scott_profile_casual_03.png']
  }
  // Add more highlight objects here
];

// Assuming highlights data is defined here or imported

const ScrollingFeature = () => {
  const { scrollYProgress } = useViewportScroll();

  // This useTransform hook maps the scrollYProgress (0 to 1) to an opacity value (1 to 0)
  // As the user scrolls down, the opacity will decrease, causing content to fade away
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="space-y-8 bg-gray-700 min-h-screen flex flex-col items-center overflow-auto">
      {/* Progress tracker bar */}
      <motion.div className="fixed top-0 left-0 h-1 bg-red-500 z-50" style={{ width: '100%', scaleX: scrollYProgress }} initial={{ scaleX: 0 }} />

      {highlights.map((highlight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="highlight-section text-center p-4 w-full"
          style={{ opacity }} // Apply the dynamically changing opacity here
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

export default ScrollingFeature;