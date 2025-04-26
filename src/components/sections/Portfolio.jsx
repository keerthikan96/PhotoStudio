import React, { useState, useEffect, useRef } from 'react';
import image3 from "../../assets/Images/portfolio.jpg";
import { RevealOnScroll } from '../RevealOnScroll';
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
  const [awardsCount, setAwardsCount] = useState(0);
  const [portraitsCount, setPortraitsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Target final values
  const finalRating = 4.9;
  const finalYears = 8;
  const finalPortraits = 10;
  const finalAwards = 10;
  
  // Animation duration in milliseconds
  const animationDuration = 2000;
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime;
    let animationFrameId;
    
    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / animationDuration, 1);
      
      // Easing function for smoother animation
      const easeOutQuad = (x) => 1 - (1 - x) * (1 - x);
      const easedProgress = easeOutQuad(percentage);
      
      // Update counters based on progress
      setRatingCount(+(easedProgress * finalRating).toFixed(1));
      setYearsCount(Math.floor(easedProgress * finalYears));
      setPortraitsCount(Math.floor(easedProgress * finalPortraits));
      setAwardsCount(Math.floor(easedProgress * finalAwards));
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animateCounters);
      }
    };
    
    animationFrameId = requestAnimationFrame(animateCounters);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-10 sm:py-16 md:py-20 lg:py-24"
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
              <NavLink to="/booking" className="bg-black text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300 text-sm sm:text-base">
                Book Now
              </NavLink>
              
              <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start">
                <div className="text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold">{portraitsCount.toFixed(1)}k+</span>
                  <span className="block text-xs sm:text-sm">Portraits</span>
                </div>
                <span className="hidden sm:block text-xl sm:text-2xl md:text-3xl font-bold">|</span>
                <div className="text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold">{awardsCount.toFixed(1)}+</span>
                  <span className="block text-xs sm:text-sm">Awards</span>
                </div>
                <span className="hidden sm:block text-xl sm:text-2xl md:text-3xl font-bold">|</span>
                <div className="text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold">{ratingCount.toFixed(1)}</span>
                  <span className="block text-xs sm:text-sm">Rating</span>
                </div>
                <span className="hidden sm:block text-xl sm:text-2xl md:text-3xl font-bold">|</span>
                <div className="text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold">{yearsCount}</span>
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