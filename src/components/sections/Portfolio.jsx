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
  const [expandedItem, setExpandedItem] = useState(null);
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

  const whyFocuzItems = [
    {
      id: 1,
      title: "How to Prepare for Your Wedding Photoshoot",
      content: "We guide you through every step to ensure you're fully prepared for your special day, from outfit selection to timeline planning."
    },
    {
      id: 2,
      title: "Couple, Makeup Team & Photographer",
      content: "Our team works in perfect harmony with you and your makeup artists to create stunning, cohesive looks that photograph beautifully."
    },
    {
      id: 3,
      title: "What You Can Expect from Us?",
      content: "Professionalism, creativity, and dedication to capturing every precious moment of your wedding day with artistic excellence."
    },
    {
      id: 4,
      title: "A Team by Photo Mentor & Canon EOS Influencer Mr. Chandru Bharathy",
      content: "Learn from the best! Our team is mentored by renowned photography expert and Canon influencer Chandru Bharathy."
    }
  ];

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

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

        <div className="mt-24 bg-gray-50 rounded-xl p-8 md:p-12">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Focus Studios?</h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {whyFocuzItems.map((item) => (
              <RevealOnScroll key={item.id}>
                <div 
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => toggleItem(item.id)}
                  >
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className={`transform transition-transform duration-300 ${expandedItem === item.id ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      expandedItem === item.id ? 'max-h-40 p-6 pt-0' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </RevealOnScroll>
        {/* Why Focus Studios? Section */}
      
    </section>
  );
};

export default Portfolio;