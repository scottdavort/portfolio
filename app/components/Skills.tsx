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

  // Expanded array of skill tags based on resume and history
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Express", "MongoDB", "GraphQL",
    "IP Technologies", "Cybersecurity Solutions", "Salesforce", "SAP", "Ariba",
    "Visual Studio Code", "Numpy", "Scikit-learn", "TensorFlow", "Pandas",
    "Jupyter Notebooks", "Tableau", "Power BI", "Google Analytics", "Adobe Analytics",
    "Matplotlib", "Seaborn", "Adobe CS for UX/UI Design", "Strategic Business Development",
    "Cloud Computing", "Marketing Strategy", "Innovation & Competitive Analysis",
    "Go-To-Market Strategy", "Leadership & Team Building", "Project Management",
    "Analytical & Communication Skills", "Partner Relationship Management", "Webinar and Email Marketing Management",
    "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Microsoft Azure",
    "Python", "Java", "HTML", "CSS", "Kotlin", "Dart (for Flutter)",
    "Microsoft Flow", "OpenAI API", "AWS Lambda", "Google Cloud Functions", "Azure Logic Apps",
    "AWS Step Functions", "Google Dialogflow", "Microsoft Power Automate", "OpenAI GPT"
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
