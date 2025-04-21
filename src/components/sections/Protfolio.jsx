import React from 'react';
import image3 from "../../assets/Images/image5.jpg";
import { RevealOnScroll } from '../RevealOnScroll';

const Portfolio = () => {
  return (
    <section
    id="portfolio"
    className="min-h-screen flex items-center justify-center py-10 sm:py-16 md:py-20 lg:py-24 mt-10 sm:mt-16 md:mt-20 lg:mt-30"
  >  
    <RevealOnScroll>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 sm:p-6 md:p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8">
            <img src={image3} alt="Capturing Moments" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 text-center md:text-left">
            <p className="text-base sm:text-lg mb-2">Portraits That Speak, Memories That Stay</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">TRANSFORMING MOMENTS INTO MASTERPIECES</h1>
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8">CD Photography in Colombo is where creativity meets precision. We turn fleeting moments into art, ensuring your portraits are as unique as your story.</p>
            <button className="bg-black text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300 text-sm sm:text-base">
              Book Now
            </button>
            
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start">
              <div className="text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">10k+</span>
                <span className="block text-xs sm:text-sm">Portraits</span>
              </div>
              <span className="hidden sm:block text-xl sm:text-2xl md:text-3xl font-bold">|</span>
              <div className="text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">10+</span>
                <span className="block text-xs sm:text-sm">Awards</span>
              </div>
              <span className="hidden sm:block text-xl sm:text-2xl md:text-3xl font-bold">|</span>
              <div className="text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">4.9</span>
                <span className="block text-xs sm:text-sm">Rating</span>
              </div>
              <span className="hidden sm:block text-xl sm:text-2xl md:text-3xl font-bold">|</span>
              <div className="text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">8</span>
                <span className="block text-xs sm:text-sm">Years</span>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </RevealOnScroll>
  </section>
  );
};

export default Portfolio;