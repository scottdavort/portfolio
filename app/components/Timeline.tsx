'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useViewportScroll, useTransform } from 'framer-motion';

/**
 * TimelineEntry represents a single item on the timeline, positioned either on the left or right of the central bar.
 * @param {Object} props - Contains the information for the timeline entry.
 * @param {string} props.title - The title or position held.
 * @param {string} props.company - The company where the position was held.
 * @param {string} props.period - The duration for which the position was held.
 * @param {string} props.description - A short description of the role or achievement.
 * @param {boolean} props.left - Determines if the entry is on the left side of the timeline.
 */

interface TimelineEntryProps {
  title: string;
  company: string;
  period: string;
  description: string;
  left: boolean;
}

const handleScrollTop = () => {
  window.scrollTo({ top: 0 });
}

const TimelineEntry = ({ title, company, period, description, left }: TimelineEntryProps) => {
  // Additional classes for text container positioning and text alignment
  const textContainerClass = left
    ? 'text-left ml-12' // Text on left, aligned right, with margin right of 3rem (adjust as needed for 50px)
    : 'text-right mr-12'; // Text on right, aligned left, with margin left of 3rem

  // Additional classes for circle positioning relative to the progress bar
  const circlePositionClass = left ? 'left-1/2 transform' : 'left-1/2 transform';

  return (
    // Timeline Entry Container
    <div className={`flex items-center ${left ? 'flex-row-reverse' : 'flex-row'} w-1/2 ${left ? 'pl-12' : 'pr-12'} mx-auto`}>
      {/* Circle Element */}
      <div className={`w-10 h-4 rounded-full bg-red-100 absolute transform -translate-x-1/2  ${circlePositionClass}`} />
      {/* Content Container */}
      <div className={`w-1/2 ${textContainerClass}`}>
        <h3 className="text-lg font-bold  ">{title}</h3>
        <p className="text-sm">{company}</p>
        <time className="text-xs">{period}</time>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
/**
 * Timeline component that visualizes experiences or achievements along a vertical bar.
 * Each entry is alternated on either side of the bar with an associated circle element aligned on the bar.
 */
function Timeline() {
  const { scrollYProgress } = useViewportScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']); // Animate the progress bar's height
 // Entries fade in from 0% to 50% of scroll, then fade out from 50% to 100%
 const entryOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // Timeline data with alternating position
  const timelineData = [
    {
      title: 'Senior JavaScript Engineer',
      company: 'Apple',
      period: '2024 - Present',
      description: 'Leading the development of innovative JavaScript solutions.',
      left: false,
    },
    {
      title: 'Senior JavaScript Engineer',
      company: 'Apple',
      period: '2024 - Present',
      description: 'Leading the development of innovative JavaScript solutions.',
      left: true,
    },
    {
      title: 'Senior JavaScript Engineer',
      company: 'Apple',
      period: '2024 - Present',
      description: 'Leading the development of innovative JavaScript solutions.',
      left: false,
    },
    {
      title: 'Senior JavaScript Engineer',
      company: 'Apple',
      period: '2024 - Present',
      description: 'Leading the development of innovative JavaScript solutions.',
      left: true,
    },
    {
      title: 'Senior JavaScript Engineer',
      company: 'Apple',
      period: '2024 - Present',
      description: 'Leading the development of innovative JavaScript solutions.',
      left: false,
    },

    // ... Additional entries
  ];

 // Calculate opacity based on scroll progress
 

  return (
    <motion.div className="timeline-container relative my-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
      {/* Progress bar centered in the timeline container */}
      <motion.div className="timeline-progress-bar bg-white absolute left-1/2 transform -translate-x-1/2 h-full w-2" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 3 }} style={{ y: yPosAnim }} />

      {/* Mapping through timeline data to create timeline entries */}
      {timelineData.map((item, index) => (
        // Apply the dynamic opacity to each entry
        <motion.div key={index} style={{ opacity: entryOpacity }}>
          <TimelineEntry {...item} left={index % 2 === 0} />
        </motion.div>
      ))}
      {/* // Scroll to top button */}

     <button
    aria-label="Scroll To Top"
    onClick={handleScrollTop}
    className=" absolute left-1/3 mt-4 rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
  >Scroll to Top</button>


    </motion.div>



  );
}

export default Timeline;
