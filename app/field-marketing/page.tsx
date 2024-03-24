'use client';
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import '../styles/globals.css';

// Define highlights for the field marketing experience
const fieldMarketingHighlights = [
  {
    title: "Elevating Field Marketing at CenturyLink Business",
    summary: "Directed comprehensive field marketing strategies that significantly contributed to market share expansion and sales growth. Managed targeted events, developed successful co-marketing plans, and leveraged analytics for strategic insights, driving notable improvements in lead generation and customer engagement.",
    images: ['/images/20141215_080639.jpg', '/images/20141217_162816.jpg'],
  },
  {
    title: "Innovative Marketing Solutions",
    summary: "Spearheaded innovative marketing initiatives that blended traditional and digital marketing channels, enhancing brand visibility and partner engagement. My leadership in these projects has been instrumental in introducing cutting-edge solutions to the marketing mix, directly impacting sales pipeline acceleration and revenue growth.",
    images: ['/images/scott_profile_01.jpg', '/images/scott_profile_02.jpg'],
  },
  {
    title: "Strategic Partner Collaborations",
    summary: "Fostered strategic partnerships that broadened market reach and deepened vendor relationships. Executed joint marketing campaigns and events that effectively communicated value propositions, cultivated long-term loyalty, and maximized co-marketing investments.",
    images: ['/images/scott_profile_03.jpg', '/images/scott_talking_about_platform_2014.JPG'],
  },
];

const FieldMarketing = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
        <section className="bg-gray-700 min-h-screen p-8">
      <h1 className="text-5xl font-bold text-white text-center mb-10">Field Marketing Insights</h1>
      
      {fieldMarketingHighlights.map((highlight, index) => (
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
              <Image key={imgIndex} src={image} alt={`Field Marketing Image ${imgIndex + 1}`} width={250} height={250} className="rounded-md" />
            ))}
          </div>
        </motion.div>
      ))}
    </section>
    
  );
};

export default FieldMarketing;
