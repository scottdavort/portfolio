'use client';
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import '../styles/globals.css';

// Define highlights for the product marketing experience
const productMarketingHighlights = [
  {
    title: "Strategic Product Launches",
    summary: "Led multiple high-profile product launches that expanded the product portfolio into new markets. Skillfully crafted go-to-market strategies, aligning product positioning with market needs, which led to successful market entry and customer adoption.",
    images: ['/images/20141204_143801.jpg', '/images/20141217_161737.jpg'],
  },
  {
    title: "Content Strategy and Market Engagement",
    summary: "Developed comprehensive content strategies that enhanced brand visibility and market engagement. Utilized data-driven insights to produce targeted marketing materials, driving lead generation and building a solid foundation for customer relationship management.",
    images: ['/images/scott_profile_01.jpg', '/images/scott_profile_03.jpg'],
  },
  {
    title: "Cross-functional Team Leadership",
    summary: "Collaborated with cross-functional teams to align marketing strategies with product development and sales objectives. My leadership ensured cohesive efforts across departments, resulting in integrated marketing campaigns that significantly boosted product awareness and sales performance.",
    images: ['/images/scott_profile_02.jpg', '/images/scott_talking_about_platform_2014.JPG'],
  },
];

const ProductMarketing = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="bg-gray-700 min-h-screen p-8">
      <h1 className="text-5xl font-bold text-white text-center mb-10">Product Marketing Mastery</h1>

      {productMarketingHighlights.map((highlight, index) => (
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
              <Image key={imgIndex} src={image} alt={`Product Marketing Image ${imgIndex + 1}`} width={250} height={250} className="rounded-md" />
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ProductMarketing;
