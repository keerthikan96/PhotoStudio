import { useEffect } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
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
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className={`text-xl sm:text-2xl font-semibold text-white my-3 sm:my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}        
                  `}
      >
        Home
      </Link>
      
      <Link
        to="/pricing"
        onClick={() => setMenuOpen(false)}
        className={`text-xl sm:text-2xl font-semibold text-white my-3 sm:my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}        
                  `}
      >
        Pricing
      </Link>
      
      <Link
        to="/contactus"
        onClick={() => setMenuOpen(false)}
        className={`text-xl sm:text-2xl font-semibold text-white my-3 sm:my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}        
                  `}
      >
        Contact
      </Link>
      
      <Link
        to="/booking"
        onClick={() => setMenuOpen(false)}
        className={`text-xl sm:text-2xl font-semibold text-white my-3 sm:my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}        
                  `}
      >
        Book Now
      </Link>
      
      <div className="mt-6 flex space-x-4">
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};
