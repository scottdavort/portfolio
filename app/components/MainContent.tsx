'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import '../styles/globals.css';


/**
 * Array containing objects for each content variation.
 * Each object has a text and an image property.
 */

// contentVariants array with text and image properties

const contentVariants = [

  { 
    text: "Accomplished sales and marketing leader with over 20 years in the technology sector, known for driving enterprise growth, strategic sales, and leveraging AI technologies for customer insights and business optimization. Expert in marketing content creation, delivering impactful training, and evangelizing product expertise. Known for scaling sales operations, fostering executive relationships, and leading high-performance teams to align digital solutions with strategic objectives.",
    image: '/images/scott_profile_02.jpg'
  },
  { 
    text: "My journey includes managing million-dollar budgets, vendor relationships, and executing Go-To-Market strategies, significantly boosting revenue, customer acquisition, and market positioning. This experience not only showcases my adeptness at navigating the complexities of benefits realization but also highlights my hands-on leadership in ensuring program outcomes directly contribute to organizational strategic goals. The structured engagement with stakeholders and clear definition of program expectations and acceptance criteria have been pivotal to our success.",
    image: '/images/scott_manley_profile_formal_01.png'
  },
  { 
    text: "We achieved notable improvements in market intelligence accuracy, strategic decision-making capabilities, and the depth of our relationships with key industry influencers and consultants. These outcomes not only met but, in some instances, exceeded the initial acceptance criteria, showcasing the effectiveness of our strategic planning and execution. This experience underscores my ability to lead strategic stakeholder engagements, set clear program objectives, and achieve tangible benefits that align with organizational goals, reinforcing my qualifications for PMI certification.",
    image: '/images/scott_profile_03.jpg'
  }

];

/**
 * MainContent component displays dynamic content based on the user's scroll position.
 * The content includes a profile picture and a brief text, both of which change as the user scrolls.
 */

const clickAction = () => {
  window.open('https://calendar.app.google/3A2C2ER9nJt3u5Lx5', '_blank');
}

const MainContent = () => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the index based on the scroll position
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

    // Main content container with dynamic background image
    <div className="relative min-h-screen flex flex-col items-center py-48 justify-self-start bg-no-repeat bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url(/intro_bg_penguin.png)' }}>


      <motion.div
        className="w-full h-1/3 bg-blue-600 bg-opacity-90 flex justify-center items-center"
        initial={{ opacity: 1 }}
        animate={controls}
      >
        {/* floating content  */}
        <div className="flex h-1/3 items-center justify-around max-w-4xl mx-auto px-16 py-16 space-x-8">
          <motion.div className="w-52 h-62 bg-gray-200 border-2 border-gray-300 rounded-full overflow-hidden flex justify-center items-center">
            <Image src={contentVariants[currentIndex].image} alt="Profile Picture" width={750} height={750} className="rounded-full" />

          </motion.div>
          <div className="text-white flex-1">
            <p>{contentVariants[currentIndex].text}</p>
          </div>
        </div>
        {/* Button when clicks will open up my calendar url */}
        <div className="flex h-1/3 items-center justify-around mx-auto ">
          <button
            aria-label="Scroll To Top"
            onClick={clickAction}
            className="mt-4 rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 px-4"
          >Book a meeting</button>
        </div>
      </motion.div>
      <>

        <div>
          <div className="flex h-1/3 items-center justify-around max-w-4xl mx-auto px-16 py-16 space-x-8">
            <div className="flex-1">
              {/* Certifications Area */}

              <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Certifications</h2>
                <div className="space-y-3">
                  <div className="bg-blue-600 p-3 rounded">
                    <h3 className="font-semibold">Microsoft Certified: Azure Fundamentals</h3>
                    <p className="text-sm">2023 - Demonstrates a solid understanding of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support.</p>
                  </div>
                  <div className="bg-green-600 p-3 rounded">
                    <h3 className="font-semibold">Microsoft Certified: Security, Compliance, and Identity Fundamentals</h3>
                    <p className="text-sm">2023 - Validates knowledge of security, compliance, and identity concepts, related Microsoft services, and Microsoft's identity and access management solutions.</p>
                  </div>
                  <div className="bg-purple-600 p-3 rounded">
                    <h3 className="font-semibold">Cybersecurity Undergraduate Certificate</h3>
                    <p className="text-sm">University of Arizona, 2023 - Signifies completion of coursework focusing on network security principles, cyber threats and vulnerabilities, as well as preventive, detective, and corrective measures.</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </>
    </div>
  );
};

export default MainContent;