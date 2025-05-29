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
import { Phone, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = ({ setMenuOpen }) => {
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const portfolioDropdownRef = useRef(null);
  const portfolioButtonRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10; // Change threshold as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

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
    <>
      {/* Mobile-only Navbar */}{" "}
      <nav
        className={`fixed top-0 left-0 right-0 flex flex-col z-50 md:hidden transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center h-16 px-4">
            <div className="flex items-center">
              <img src={scrolled ?logo2:logo} alt="Logo" className="w-32 h-auto" />
            </div>{" "}
            <button
              className={`flex items-center justify-center w-8 h-8 rounded-md cursor-pointer focus:outline-none ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>{" "}
          {/* Mobile Social Bar */}{" "}
          <div className="flex w-full items-center justify-between px-4 py-2 bg-transparent">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className={`${
                  scrolled ? "text-blue-600" : "text-white"
                } hover:${scrolled ? "text-blue-800" : "text-blue-300"}`}
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="#"
                className={`${
                  scrolled ? "text-pink-600" : "text-white"
                } hover:${scrolled ? "text-pink-800" : "text-pink-300"}`}
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className={`${
                  scrolled ? "text-blue-500" : "text-white"
                } hover:${scrolled ? "text-blue-700" : "text-blue-300"}`}
              >
                <FaTwitter className="text-lg" />
              </a>
            </div>{" "}
            <NavLink
              to="/booking"
              className={`${
                scrolled ? "bg-black text-white" : "bg-white text-black"
              } ${
                !scrolled && "bg-opacity-80 backdrop-blur-sm"
              } px-4 py-2 rounded text-sm font-medium hover:${
                scrolled ? "bg-gray-800" : "bg-opacity-100"
              } transition uppercase`}
            >
              ENQUIRE NOW
            </NavLink>
          </div>
        </div>
      </nav>{" "}
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <nav
          className={`fixed left-0 right-0 flex justify-center z-40 top-0 transition-all duration-300 ${
            !scrolled && "bg-transparent"
          }`}
        >
          <div
            className={`w-[80%] sm:w-[70%] md:w-[60%] max-w-6xl my-2 ${
              scrolled
                ? "bg-white shadow-lg rounded-lg border border-gray-200 backdrop-blur-md"
                : ""
            }`}
          >
            {" "}
            <div className="flex justify-between items-center h-15 px-4 sm:px-6 py-2">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={scrolled ?logo2:logo}
                  alt="Logo"
                  className="w-36 sm:w-36 md:w-36 lg:w-36 h-auto"
                />
              </div>{" "}
              <div className="hidden md:flex items-center space-x-4">
                {" "}
                <NavLink
                  to="/"
                  className={`${
                    scrolled ? "text-gray-700" : "text-white"
                  } hover:${
                    scrolled ? "text-gray-900" : "text-gray-200"
                  } relative group pb-1`}
                >
                  HOME
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      scrolled ? "bg-black" : "bg-white"
                    } transition-all duration-300 ease-out w-0 group-hover:w-full`}
                  ></span>
                </NavLink>{" "}
                <NavLink
                  to={"/portfolio"}
                  className={({ isActive }) =>
                    `${scrolled ? "text-gray-700" : "text-white"} hover:${
                      scrolled ? "text-gray-900" : "text-gray-200"
                    } relative group pb-1 ${isActive ? "font-medium" : ""}`
                  }
                >
                  PORTFOLIO
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      scrolled ? "bg-black" : "bg-white"
                    } transition-all duration-300 ease-out w-0 group-hover:w-full`}
                  ></span>
                  {({ isActive }) =>
                    isActive && (
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 ${
                          scrolled ? "bg-black" : "bg-white"
                        } w-full`}
                      ></span>
                    )
                  }
                </NavLink>
                <NavLink
                  to={"/pricing"}
                  className={({ isActive }) =>
                    `${scrolled ? "text-gray-700" : "text-white"} hover:${
                      scrolled ? "text-gray-900" : "text-gray-200"
                    } relative group pb-1 ${isActive ? "font-medium" : ""}`
                  }
                >
                  PRICING
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      scrolled ? "bg-black" : "bg-white"
                    } transition-all duration-300 ease-out w-0 group-hover:w-full`}
                  ></span>
                  {({ isActive }) =>
                    isActive && (
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 ${
                          scrolled ? "bg-black" : "bg-white"
                        } w-full`}
                      ></span>
                    )
                  }
                </NavLink>
                <NavLink
                  to={"/faq"}
                  className={({ isActive }) =>
                    `${scrolled ? "text-gray-700" : "text-white"} hover:${
                      scrolled ? "text-gray-900" : "text-gray-200"
                    } relative group pb-1 ${isActive ? "font-medium" : ""}`
                  }
                >
                  FAQ
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      scrolled ? "bg-black" : "bg-white"
                    } transition-all duration-300 ease-out w-0 group-hover:w-full`}
                  ></span>
                  {({ isActive }) =>
                    isActive && (
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 ${
                          scrolled ? "bg-black" : "bg-white"
                        } w-full`}
                      ></span>
                    )
                  }
                </NavLink>                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${scrolled ? "text-gray-700" : "text-white"} hover:${
                      scrolled ? "text-gray-900" : "text-gray-200"
                    } relative group pb-1 ${isActive ? "font-medium" : ""}`
                  }
                >
                  ABOUT
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      scrolled ? "bg-black" : "bg-white"
                    } transition-all duration-300 ease-out w-0 group-hover:w-full`}
                  ></span>
                  {({ isActive }) =>
                    isActive && (
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 ${
                          scrolled ? "bg-black" : "bg-white"
                        } w-full`}
                      ></span>
                    )
                  }
                </NavLink>{" "}
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `${scrolled ? "text-gray-700" : "text-white"} hover:${
                      scrolled ? "text-gray-900" : "text-gray-200"
                    } relative group pb-1 ${isActive ? "font-medium" : ""}`
                  }
                >
                  CONTACT
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      scrolled ? "bg-black" : "bg-white"
                    } transition-all duration-300 ease-out w-0 group-hover:w-full`}
                  ></span>
                  {({ isActive }) =>
                    isActive && (
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 ${
                          scrolled ? "bg-black" : "bg-white"
                        } w-full`}
                      ></span>
                    )
                  }
                </NavLink>{" "}
                <NavLink
                  className={`${scrolled ? "bg-black" : "bg-white"} ${
                    scrolled ? "text-white" : "text-black"
                  } px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm rounded hover:${
                    scrolled ? "bg-gray-800" : "bg-gray-100"
                  } transition`}
                  to="/booking"
                >
                  Enquire Now
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

Navbar.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
};
