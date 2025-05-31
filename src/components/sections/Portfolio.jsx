import { useState, useEffect, useRef } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { NavLink } from 'react-router-dom';

// Background images for sections
import bg1 from "../../assets/Images/bg-1.jpg";
import bg2 from "../../assets/Images/bg-2.jpg";
import bg3 from "../../assets/Images/bg-3.jpg";

// Photographer images
import chamodMain from "../../assets/Images/chamodMain.jpg";

// Service images
import serviceImg1 from "../../assets/Images/serviceview1.jpg";
import serviceImg2 from "../../assets/Images/serviceview2.jpg";
import serviceImg3 from "../../assets/Images/serviceview3.jpg";
import serviceImg4 from "../../assets/Images/serviceview4.jpg";

// Recent work images
import image3 from "../../assets/Images/portfolio.jpg";

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

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
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
  }, [isVisible, finalRating, finalYears, finalPortraits, finalAwards]);

  const whyChamodhItems = [
    {
      id: 1,
      title: "How to Prepare for Your Wedding Photoshoot",
      content: "We guide you through every step to ensure you're fully prepared for your special day — from selecting outfits to planning your photography timeline.",
      image: serviceImg1
    },
    {
      id: 2,
      title: "Couple, Makeup Team & Photographer",
      content: "Our team works closely with you and your makeup artists to create stunning, natural looks that shine beautifully through every photograph.",
      image: serviceImg2
    },
    {
      id: 3,
      title: "What You Can Expect from Us",
      content: "Professionalism, creativity, and a heartfelt dedication to capturing every precious moment of your wedding with true artistic excellence.",
      image: serviceImg3
    },
    {
      id: 4,
      title: "Led by Passion, Creativity, and Expertise",
      content: "At Chamodh Delpearachchi Photography, our work is driven by passion, artistic vision, and years of professional experience in wedding storytelling.",
      image: serviceImg4
    }  ];
  

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Hero Section with Modern Layout */}
      <div className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bg1})` }}
          />
        </div>
        
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium tracking-wider uppercase">
                    Professional Photography
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    TRANSFORMING
                    <span className="block text-gray-600">MOMENTS INTO</span>
                    <span className="block bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                      MASTERPIECES
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-lg">
                    CD Photography in Colombo is where creativity meets precision. We turn fleeting moments 
                    into art, ensuring your portraits are as unique as your story.
                  </p>
                </div>

                {/* CTA Button */}
                <div>
                  <NavLink 
                    to="/booking" 
                    className="group inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Book Your Session
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </NavLink>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-black">{portraitsCount.toFixed(1)}k+</div>
                    <div className="text-sm text-gray-600 font-medium">Portraits</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-black">{awardsCount.toFixed(1)}+</div>
                    <div className="text-sm text-gray-600 font-medium">Awards</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-black">{ratingCount.toFixed(1)}</div>
                    <div className="text-sm text-gray-600 font-medium">Rating</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-black">{yearsCount}</div>
                    <div className="text-sm text-gray-600 font-medium">Years</div>
                  </div>
                </div>
              </div>              {/* Right Content - Visual Grid */}
              <div className="relative">
                {/* Main featured image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={image3} 
                    alt="Professional Portrait Photography" 
                    className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Floating elements for modern touch */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-black/10 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-400/20 rounded-full blur-lg" />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

    
      {/* Enhanced Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bg2})` }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium tracking-wider uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                CD Photography Studios
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the difference that passion, expertise, and artistic vision can make in 
                capturing your most precious moments.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whyChamodhItems.map((item, index) => (
              <RevealOnScroll key={item.id} delay={index * 0.2}>
                <div 
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white leading-tight">
                          {item.title}
                        </h3>
                        <span className={`transform transition-transform duration-300 text-white ml-4 ${expandedItem === item.id ? 'rotate-180' : ''}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                      
                      <div 
                        className={`transition-all duration-500 overflow-hidden ${
                          expandedItem === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-300 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                      
                      {/* Preview text when collapsed */}
                      {expandedItem !== item.id && (
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.content.substring(0, 80)}...
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Portfolio;