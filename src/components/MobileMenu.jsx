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
              href="https://www.tiktok.com/@chamoddelpearachchi"
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
                <path d="M12.75 2h2.25c.41 2.19 2.13 3.81 4.25 3.98V8.2c-1.01.09-2.01-.07-2.95-.47v7.77c0 3.18-2.58 5.77-5.75 5.5-2.85-.24-5.09-2.67-5.05-5.53.04-2.7 2.23-4.97 4.93-5.02.23 0 .42.18.42.41v2.19c0 .23-.18.41-.41.42-1.13.02-2.05.94-2.05 2.07 0 1.13.92 2.05 2.05 2.05 1.13 0 2.05-.92 2.05-2.05V2.41c0-.23.18-.41.41-.41z" />
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
