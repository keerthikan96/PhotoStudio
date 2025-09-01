import { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../assets/logo4.png";
import logo2 from "../assets/logo3.png";
import logosinhala from "../assets/logoA.png"
import { Phone, Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = ({ setMenuOpen }) => {
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const portfolioDropdownRef = useRef(null);
  const portfolioButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        portfolioDropdownOpen &&
        portfolioDropdownRef.current &&
        portfolioButtonRef.current &&
        !portfolioDropdownRef.current.contains(event.target) &&
        !portfolioButtonRef.current.contains(event.target)
      ) {
        setPortfolioDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [portfolioDropdownOpen]);
  // Portfolio dropdown functions have been removed as they're currently not being used
  // The dropdown menu is commented out in the JSX
  return (
    <div className="absolute top-5 left-0 right-0 z-50">
      {/* Mobile-only Navbar */}
      <nav
        className="flex flex-col md:hidden transition-all duration-300"
      >
        <div className="w-full">
          {/* Main mobile header */}
          <div className="flex justify-between items-center h-16 px-4 py-2">
            <div className="flex items-center flex-1">
              <Link to="/">
              <img 
                src={logosinhala} 
                alt="Logo" 
                className="w-32 sm:w-40 h-auto max-h-12 object-contain" 
              />
              </Link>
            </div>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer focus:outline-none text-white ml-2"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          
          {/* Mobile bottom bar with social and CTA */}
          {/* <div className="flex w-full items-center justify-between px-4 py-2 bg-black bg-opacity-20 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <FaTwitter className="text-lg" />
              </a>
            </div>
            <NavLink
              to="/booking"
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm"
            >
              ENQUIRE NOW
            </NavLink>
          </div> */}
        </div>
      </nav>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <nav
          className="flex justify-center transition-all duration-300"
        >
          <div className="w-full max-w-none">
            <div className="flex justify-between items-center h-20 px-8 sm:px-12 py-3">
              {/* Logo */}
              <div className="flex items-center pt-5">
                <Link to="/">
                  <img
                    src={logosinhala}
                    alt="Logo"
                    className="w-48 sm:w-72 md:w-72 lg:w-96 h-auto max-h-32 object-contain"
                  />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-12">
                <NavLink
                  to="/"
                  className="text-white hover:text-gray-200 relative group pb-1 text-lg font-medium"
                >
                  HOME
                  <span className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                  to={"/portfolio"}
                  className={({ isActive }) =>
                    `text-white hover:text-gray-200 relative group pb-1 text-lg font-medium ${isActive ? "font-semibold" : ""}`
                  }
                >
                  PORTFOLIO
                  <span className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                  {({ isActive }) =>
                    isActive && (
                      <span className="absolute bottom-0 left-0 h-1 bg-white w-full"></span>
                    )
                  }
                </NavLink>
                <NavLink
                  to={"/pricing"}
                  className={({ isActive }) =>
                    `text-white hover:text-gray-200 relative group pb-1 text-lg font-medium ${isActive ? "font-semibold" : ""}`
                  }
                >
                  PRICING
                  <span className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                  {({ isActive }) =>
                    isActive && (
                      <span className="absolute bottom-0 left-0 h-1 bg-white w-full"></span>
                    )
                  }
                </NavLink>
                <NavLink
                  to={"/faq"}
                  className={({ isActive }) =>
                    `text-white hover:text-gray-200 relative group pb-1 text-lg font-medium ${isActive ? "font-semibold" : ""}`
                  }
                >
                  FAQ
                  <span className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                  {({ isActive }) =>
                    isActive && (
                      <span className="absolute bottom-0 left-0 h-1 bg-white w-full"></span>
                    )
                  }
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-white hover:text-gray-200 relative group pb-1 text-lg font-medium ${isActive ? "font-semibold" : ""}`
                  }
                >
                  ABOUT
                  <span className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                  {({ isActive }) =>
                    isActive && (
                      <span className="absolute bottom-0 left-0 h-1 bg-white w-full"></span>
                    )
                  }
                </NavLink>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `text-white hover:text-gray-200 relative group pb-1 text-lg font-medium ${isActive ? "font-semibold" : ""}`
                  }
                >
                  CONTACT
                  <span className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                  {({ isActive }) =>
                    isActive && (
                      <span className="absolute bottom-0 left-0 h-1 bg-white w-full"></span>
                    )
                  }
                </NavLink>
                <NavLink
                  className="bg-white text-black px-6 py-2 sm:px-8 sm:py-2 text-lg sm:text-xl font-medium rounded-lg hover:bg-gray-100 transition shadow-lg"
                  to="/booking"
                >
                  Enquire Now
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
};
