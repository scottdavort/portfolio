'use client';
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import '../styles/globals.css';

// Define highlights for engagement with business influencers
const influencerHighlights = [
  {
    title: "Strategic Consultant Engagements",
    summary: "Directed strategic engagements with industry-leading consultants, utilizing their expertise to gain critical market insights. Fostered strong relationships that enhanced our strategic decision-making, positioning the company as a thought leader in emerging technology trends.",
    images: ['/images/20141215_080639.jpg', '/images/scott_profile_02.jpg'],
  },
  {
    title: "Leveraging Analyst Reports",
    summary: "Instrumental in integrating analyst reports into our business strategies. These reports provided valuable insights into market trends, competitor analysis, and customer needs, guiding our product development and marketing strategies to better align with market demands.",
    images: ['/images/20141217_161737.jpg', '/images/20141217_162816.jpg'],
  },
  {
    title: "Building Partner Networks",
    summary: "Played a pivotal role in building and nurturing a network of business partners and influencers. This collaborative ecosystem fostered innovation, expanded our market reach, and enhanced our product offerings through shared knowledge and resources.",
    images: ['/images/scott_profile_01.jpg', '/images/scott_talking_about_platform_2014.JPG'],
  },
];

const BusinessInfluencers = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="bg-gray-700 min-h-screen p-8">
      <h1 className="text-5xl font-bold text-white text-center mb-10">Engaging Business Influencers</h1>

      {influencerHighlights.map((highlight, index) => (
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
              <Image key={imgIndex} src={image} alt={`Influencer Image ${imgIndex + 1}`} width={250} height={250} className="rounded-md" />
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default BusinessInfluencers;
