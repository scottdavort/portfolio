'use client';
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import '../styles/globals.css';

// Define highlights for sales achievements
const salesHighlights = [
  {
    title: "Driving Sales Growth",
    summary: "Proven record of driving significant sales growth across various product lines, leveraging deep market understanding and strategic sales initiatives. Successfully led cross-functional teams to exceed sales targets through innovative approaches and relentless pursuit of excellence.",
    images: ['/images/20141204_143801.jpg', '/images/scott_profile_01.jpg'],
  },
  {
    title: "Strategic RFP Management",
    summary: "Expertise in managing large and complex RFPs, aligning team efforts and resources to craft winning proposals. My strategic oversight and direction have resulted in securing high-value contracts, contributing to our company's market leadership and revenue growth.",
    images: ['/images/20141217_161737.jpg', '/images/scott_profile_02.jpg'],
  },
  {
    title: "Product Evangelism",
    summary: "Championed product evangelism to enable sales teams with the knowledge and tools needed to effectively communicate the value of our solutions. Fostered a culture of continuous learning and improvement, significantly enhancing our sales enablement strategy and customer engagement.",
    images: ['/images/20141217_162816.jpg', '/images/scott_talking_about_platform_2014.JPG'],
  },
];

const Sales = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="bg-gray-700 min-h-screen p-8">
      <h1 className="text-5xl font-bold text-white text-center mb-10">Sales Excellence</h1>

      {salesHighlights.map((highlight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-4 bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl text-white font-semibold mb-4">{highlight.title}</h2>
          <p className="text-white text-opacity-80 mb-6">{highlight.summary}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {highlight.images.map((image, imgIndex) => (
              <Image key={imgIndex} src={image} alt={`Sales Image ${imgIndex + 1}`} width={250} height={250} className="rounded-md" />
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Sales;
