import React from 'react'

import Image from 'next/image';
// import global.css 
import '../styles/globals.css';

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
  

const about = () => {
  return (
    // app/components/ScrollingFeature.tsx




// highlights array


// highlights array
    <div className="space-y-8 bg-gray-700 min-h-screen flex flex-col items-center">
      {highlights.map((highlight, index) => (
        <div key={index} className="highlight-section text-center p-4">
          <div className="fade-in-out text-xl font-semibold">{highlight.date}</div>
          <p>{highlight.content}</p>
          <div className="flex justify-around items-center w-full xl:h-auto">
            {highlight.images.map((image, imgIndex) => (
              <div key={imgIndex} className="fade-in xl:w-1/2 xl:flex xl:justify-end xl:items-end">
                {/* Adjusting Image size to be more responsive */}
                <Image
                  src={image}
                  alt={`Highlight Image ${imgIndex}`}
                  width={500} // Set to your desired width
                  height={500} // Set to maintain aspect ratio
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


export default about