import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // State for mobile dropdown
  const [portfolioExpanded, setPortfolioExpanded] = useState(false);
  const navigate = useNavigate();
  
  // Function to navigate and scroll to top
  const scrollToTop = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };
  
  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] z-50 flex flex-col overflow-auto
                   transition-all duration-300 ease-in-out
                   ${
                     menuOpen
                       ? "h-screen opacity-100 pointer-events-auto"
                       : "h-0 opacity-0 pointer-events-none"
                   }
                 `}
    >
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 sm:p-6 border-b border-gray-800">
        <div className="flex flex-col">
          <div onClick={() => scrollToTop("/")} className="cursor-pointer">
            <img src="/CDLogo1.svg" alt="Photo Dynamic Logo" className="h-8 sm:h-10 invert" />
          </div>
        </div>
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen py-16 px-6">
        <div
          onClick={() => scrollToTop("/")}
          className={`text-xl font-semibold text-white my-3 sm:my-4 hover:text-gray-300 transition-all duration-200 cursor-pointer`}
        >
          Home
        </div>
        
        {/* Portfolio with dropdown */}
        <div className="relative w-full flex flex-col items-center">
          <div 
            className={`flex items-center justify-center space-x-1 cursor-pointer text-xl font-semibold text-white my-3 sm:my-4 hover:text-gray-300 transition-all duration-200`}
            onClick={() => setPortfolioExpanded(!portfolioExpanded)}
          >
            <span>Portfolio</span>
            <FaChevronDown className={`ml-1 text-sm transition-transform ${portfolioExpanded ? 'rotate-180' : ''}`} />
          </div>
          
          {portfolioExpanded && (
            <div className="w-full max-w-xs bg-gray-900 rounded-lg py-2 mb-3">
              <div className="px-3 py-2">
                <h4 className="text-gray-400 text-sm uppercase mb-2">Weddings</h4>
                <ul className="space-y-2 pl-2">
                  <li>
                    <div
                      onClick={() => scrollToTop("/portfolio/wedding-vows")}
                      className="text-white hover:text-gray-300 transition-colors block cursor-pointer"
                    >
                      Tamil
                    </div>
                  </li>
                  <li>
                    <div className="text-white hover:text-gray-300 transition-colors flex items-center cursor-pointer">
                      Tamil Brahmin
                      <span className="text-xs bg-orange-800 text-orange-200 px-1.5 py-0.5 rounded-full ml-2">
                        Trending
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="text-white hover:text-gray-300 transition-colors block cursor-pointer">
                      Christian
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-800 mt-2 pt-2 px-3">
                <h4 className="text-gray-400 text-sm uppercase mb-2">Other Categories</h4>
                <ul className="space-y-2 pl-2">
                  <li>
                    <div className="text-white hover:text-gray-300 transition-colors block cursor-pointer">
                      Destination Wedding
                    </div>
                  </li>
                  <li>
                    <div className="text-white hover:text-gray-300 transition-colors block cursor-pointer">
                      International Weddings
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div
          onClick={() => scrollToTop("/pricing")}
          className={`text-xl font-semibold text-white my-3 sm:my-4 hover:text-gray-300 transition-all duration-200 cursor-pointer`}
        >
          Pricing
        </div>
          <div
          onClick={() => scrollToTop("/faq")}
          className={`text-xl font-semibold text-white my-3 sm:my-4 hover:text-gray-300 transition-all duration-200 cursor-pointer`}
        >
          FAQ
        </div>
        
        <div
          onClick={() => scrollToTop("/about")}
          className={`text-xl font-semibold text-white my-3 sm:my-4 hover:text-gray-300 transition-all duration-200 cursor-pointer`}
        >
          About
        </div>
        
        <div
          onClick={() => scrollToTop("/contactus")}
          className={`text-xl font-semibold text-white my-3 sm:my-4 hover:text-gray-300 transition-all duration-200 cursor-pointer`}
        >
          Contact
        </div>
        
        <div
          onClick={() => scrollToTop("/booking")}
          className={`bg-white text-black px-6 py-2 rounded-md font-medium mt-3 hover:bg-gray-200 transition-all duration-200 cursor-pointer`}
        >
          Book Now
        </div>
        
        {/* Contact Info */}
        <div className="mt-8 w-full max-w-xs border-t border-gray-800 pt-6 flex flex-col items-center">
          <div className="flex items-center text-gray-400 mb-3">
            <FaMapMarkerAlt className="mr-2" />
            <span className="text-sm">Colombo</span>
          </div>
          
          <div className="flex items-center text-gray-400 mb-3">
            <FaEnvelope className="mr-2" />
            <span className="text-sm">keer@studio.com</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <FaPhone className="mr-2" />
            <span className="text-sm">+94 75838 3145</span>
          </div>
          
          <div className="mt-6 flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>    </div>
  );
};

MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
