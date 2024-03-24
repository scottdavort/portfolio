'use client';
import CustomButton from "./CustomButton";
import React from 'react'; // Ensure React is imported when using JSX
import Image from 'next/image'; // Import the Image component from Next.js

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  }

  const handleScrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight });
  }

  // Content for the hero section
  const heroContent = () => (
    <p className="text-white text-opacity-80 text-center py-8"> 
      A dynamic showcase of technological expertise and innovative solutions. This platform, crafted with NextJS and styled with Tailwind CSS, represents not just the culmination of Scott's experience but also his forward-thinking approach to technology and marketing...
      {/* Truncated for brevity */}
    </p>
  );

  return (
    <section className="flex flex-col gap-10 py-8 pb-32 md:gap-28 lg:py-12 xl:flex-row bg-blue-500 text-gray-100 px-10">
      <div className="flex flex-col items-center text-center xl:items-start xl:text-left xl:flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-4">Welcome to Scott Manley's Portfolio</h1>

        {heroContent()}
        <div className="flex flex-col items-center xl:items-start">
          {/* <CustomButton
            title="View Portfolio"
            aria-Label="View Portfolio"
            containerStyles="mt-10 bg-red-500 text-white rounded-full"
            handleClick={handleScroll}
          /> */}
        <div className="flex justify-center items-center flex-row-reverse p-2">


          <button
            aria-label="Scroll To Top"
            onClick={handleScroll}
            className="mt-4 rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >View History</button>
        </div>

</div>


      </div>
    </section>
  );
}

export default Hero;
