import React from 'react';
import image3 from "../../assets/Images/image3.jpg";
import { RevealOnScroll } from '../RevealOnScroll';

const Portfolio = () => {
  return (
    <section
    id="portfolio"
    className="min-h-screen flex items-center justify-center py-20 mt-20"
  >  <RevealOnScroll>
    <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100  ">
      <div className="w-full md:w-1/2 p-8">
        <img src={image3} alt="Capturing Moments" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-1/2 p-8 text-center md:text-left">
      <p className="text-lg mb-2">Portraits That Speak, Memories That Stay</p>
        <h1 className="text-5xl font-bold mb-4">TRANSFORMING MOMENTS INTO MASTERPIECES</h1>
        
        <p className="text-lg mb-8">CD Photography in Colombo is where creativity meets precision. We turn fleeting moments into art, ensuring your portraits are as unique as your story.</p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
          Book Now
        </button>
        <div className="mt-12 flex space-x-8 justify-center md:justify-start">
          <div>
            <span className="text-3xl font-bold">10k+</span>
            <span className="block text-sm">Portraits</span>
          </div>
          <div>
            <span className="text-3xl font-bold">10+</span>
            <span className="block text-sm">Awards</span>
          </div>
          <div>
            <span className="text-3xl font-bold">4.9</span>
            <span className="block text-sm">Rating</span>
          </div>
          <div>
            <span className="text-3xl font-bold">8</span>
            <span className="block text-sm">Years</span>
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