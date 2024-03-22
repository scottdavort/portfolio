'use client'
import React from 'react'
import { motion } from 'framer-motion';
/**
 * Skills component showcasing different technology skills.
 *
 * @returns The skills section for the portfolio.
 */


function Skills() {
  // Animation variant for the skills section
  const skillsVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  // Array of skill tags
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Express", "MongoDB", "GraphQL"
  ];

  return (
    <motion.section
      className="skills-container flex flex-wrap justify-center gap-4 p-4"
      initial="hidden"
      animate="visible"
      variants={skillsVariant}
    >
      {skills.map((skill, index) => (
        // Apply consistent styles to all skill tags
        <div key={index} className="skill-tag bg-blue-500 rounded text-white p-4 text-center">
          {skill}
        </div>
      ))}
    </motion.section>
  );
}

export default Skills;
