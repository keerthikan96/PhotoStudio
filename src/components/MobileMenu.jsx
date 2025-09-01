import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import logosinhala from "../assets/logoA.png";
import PropTypes from "prop-types";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  // Function to navigate and close menu (scroll handled by ScrollToTop component)
  const scrollToTop = (path) => {
    navigate(path);
    // Remove manual scroll - let the ScrollToTop component handle it for consistency
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
            <img
              src={logosinhala}
              alt="PhotoStudio Logo"
              className="h-8 sm:h-10 w-auto object-contain"
            />
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
            className={`text-xl font-semibold text-white my-3 sm:my-4 hover:text-gray-300 transition-all duration-200 cursor-pointer`}
            onClick={() => scrollToTop("/portfolio")}
          >
            <span>Portfolio</span>
          </div>
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
            <a className="text-sm" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Chamodh+Delpearachchi+Photography+Colombo+Sri+Lanka">Colombo, Sri Lanka</a>
          </div>

          <div className="flex items-center text-gray-400 mb-3">
            <FaEnvelope className="mr-2" />
            <a className="text-sm" href="mailto:chamodh@gmail.com">chamodh@gmail.com</a>
          </div>

          <div className="flex items-center text-gray-400">
            <FaPhone className="mr-2" />
            <a className="text-sm" href="tel:+94766581620">+94 76658 1620</a>
          </div>

          <div className="mt-6 flex space-x-6">
            <a
              href="https://www.facebook.com/ChamodhDelpearachchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/chamodh_delpearachchi/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/chamodh-delpearachchi-04756578/?originalSubdomain=lk"
              className="text-white hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.82-2.16 3.75-2.16C20.4 8 24 10.6 24 16.25V24h-4v-7.25c0-1.73-.03-3.95-2.4-3.95-2.4 0-2.77 1.87-2.77 3.8V24h-4V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
