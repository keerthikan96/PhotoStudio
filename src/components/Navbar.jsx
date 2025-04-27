import { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../assets/logo3.png";
import { Phone, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = ({ setMenuOpen }) => {
  const [atTop, setAtTop] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const portfolioDropdownRef = useRef(null);
  const portfolioButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset < 10);
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handlePortfolioMouseEnter = () => {
    setPortfolioDropdownOpen(true);
  };

  const handlePortfolioMouseLeave = () => {
    const timeout = setTimeout(() => {
      if (
        !portfolioDropdownRef.current?.matches(":hover") &&
        !portfolioButtonRef.current?.matches(":hover")
      ) {
        setPortfolioDropdownOpen(false);
      }
    }, 100);
    return () => clearTimeout(timeout);
  };

  return (
    <>
      {/* Navbar */}

      <div
        className={`fixed top-0 left-0 right-0 flex justify-center z-30 transition-transform duration-300 ${
          scrolling ? "translate-y-1" : "-translate-y-0"
        } hidden sm:flex`}
      >
        <div className="w-[90%] md:w-[80%] max-w-6xl p-2 flex justify-between items-center rounded-lg">
          <a href="#blogs" className="text-sm hover:underline">
            See our most recent blogs &gt;
          </a>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-xs md:text-sm">
              <Phone className="mr-1 w-3 h-3 md:w-4 md:h-4" /> +94 75838 3145
            </span>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Search className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>
        </div>
      </div>
      <nav
        className={`fixed left-0 right-0 flex justify-center z-40 ${
          atTop ? "top-10" : "top-0"
        } `}
      >
        <div className="w-[95%] sm:w-[90%] md:w-[80%] max-w-6xl bg-white shadow-lg rounded-lg border border-gray-200 backdrop-blur-md">
          <div className="flex justify-between items-center h-15 px-3 sm:px-6">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-40 sm:w-40 md:w-40 lg:w-40 h-auto"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex items-center justify-center w-8 h-8 rounded-md cursor-pointer md:hidden focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink
                to="/"
                className="text-gray-700 hover:text-gray-900 relative group pb-1"
              >
                Home
                <span className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
              </NavLink>

              {/* Portfolio with Dropdown */}
              <div
                className="relative"
                onMouseEnter={handlePortfolioMouseEnter}
                onMouseLeave={handlePortfolioMouseLeave}
                ref={portfolioButtonRef}
              >
                <div className="flex items-center space-x-1 cursor-pointer group">
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      `text-gray-700 hover:text-gray-900 relative group pb-1 ${
                        isActive ? "font-medium" : ""
                      }`
                    }
                  >
                    Portfolio
                    <span className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                    {({ isActive }) =>
                      isActive && (
                        <span className="absolute bottom-0 left-0 h-0.5 bg-black w-full"></span>
                      )
                    }
                  </NavLink>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${
                      portfolioDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown Menu */}
                {portfolioDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-[500px] bg-white shadow-xl rounded-lg p-5 z-50 border border-gray-200 grid grid-cols-2 gap-6"
                    ref={portfolioDropdownRef}
                    onMouseEnter={() => setPortfolioDropdownOpen(true)}
                    onMouseLeave={() => setPortfolioDropdownOpen(false)}
                  >
                    {/* Column 1 */}
                    <div>
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">
                        Weddings
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <NavLink
                            to={"/portfolio/wedding-vows"}
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Tamil
                          </NavLink>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Tamil Brahmin
                            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full ml-2">
                              Trending
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Chettinad
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Christian
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Muslim
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Telugu
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">
                        Other Categories
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Kerala
                            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full ml-2">
                              Trending
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Srilankan
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Konkani
                          </a>
                        </li>

                        <li className="mt-3">
                          <h4 className="font-bold text-gray-800 mb-1 text-md">
                            North Indian Wedding
                          </h4>
                          <ul className="ml-2 space-y-1">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                              >
                                Marwari
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                              >
                                Destination Wedding
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="mt-3">
                          <h4 className="font-bold text-gray-800 mb-1 text-md">
                            International Weddings
                          </h4>
                          <ul className="ml-2 space-y-1">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                              >
                                London UK
                                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full ml-2">
                                  Trending
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                              >
                                Srilanka
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to={"/pricing"}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-gray-900 relative group pb-1 ${
                    isActive ? "font-medium" : ""
                  }`
                }
              >
                Pricing
                <span className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                {({ isActive }) =>
                  isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-black w-full"></span>
                  )
                }
              </NavLink>
              <NavLink
                to={"/faq"}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-gray-900 relative group pb-1 ${
                    isActive ? "font-medium" : ""
                  }`
                }
              >
                FAQ
                <span className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                {({ isActive }) =>
                  isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-black w-full"></span>
                  )
                }
              </NavLink>
              <a
                href="#careers"
                className="text-gray-700 hover:text-gray-900 relative group pb-1"
              >
                We
                <span className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
              </a>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-gray-900 relative group pb-1 ${
                    isActive ? "font-medium" : ""
                  }`
                }
              >
                Contact
                <span className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
                {({ isActive }) =>
                  isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-black w-full"></span>
                  )
                }
              </NavLink>
              <NavLink
                className="bg-black text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded hover:bg-gray-800 transition"
                to="/booking"
              >
                Enquire Now
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed ${atTop ? "top-25" : "top-2"} left-0 right-0 flex justify-center z-30 transition-transform duration-300 ${
          atTop ? "translate-y-0" : "-translate-y-full"
        } hidden sm:flex`}
      >
        <div className="w-[95%] sm:w-[90%] md:w-[80%] max-w-6xl p-2 flex flex-wrap justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <FaMapMarkerAlt className="text-gray-600 text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm text-gray-600">Colombo</span>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2">
              <FaEnvelope className="text-gray-600 text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm text-gray-600">keer@studio.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-xs sm:text-sm text-gray-600">Follow us on</span>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebook className="text-xs sm:text-sm" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter className="text-xs sm:text-sm" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram className="text-xs sm:text-sm" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
};