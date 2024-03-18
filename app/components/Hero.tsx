'use client';
import CustomButton from "./CustomButton"

const Hero = () => {

  const handleScroll = () => {
    
  }
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500 bg-blue-500">
      <div className="hero" />
      <p className="hero_subtitle"> This is content for the portfolio!!!!!!!!!!</p>
      
      
      <CustomButton
      title="View Portfolio"
      containerStyles="bg-red-500 text-white"
      text-white rounded-full mt-10
      handleClick={handleScroll}>
      </CustomButton>
      
      
      </section>
  )
}

export default Hero