import { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../assets/chm.svg";
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
      setAtTop(window.pageYOffset === 0);
      setScrolling(window.scrollY > 80);
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
        }`}
      >
        <div className="w-[80%] max-w-7xl  p-2 flex justify-between items-center rounded-lg">
          <a href="#blogs" className="hover:underline">
            See our most recent blogs &gt;
          </a>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="mr-1" /> +94 75838 3145
            </span>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Search className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
      <nav
        className={`fixed  left-0 right-0 flex justify-center z-40 ${
          atTop ? "top-10" : "top-0"
        } `}
      >
        <div className="w-[80%] max-w-7xl bg-white shadow-lg rounded-lg border border-gray-200 backdrop-blur-md">
          <div className="flex justify-between items-center h-15 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-24 sm:w-28 md:w-32 h-auto"
              />
            </div>

            {/* Mobile Menu Button */}
            <div
              className="w-6 h-5 cursor-pointer md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink
                to="/"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Home
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
                    className="text-gray-700 group-hover:text-gray-900 transition"
                  >
                    Portfolio
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
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                          >
                            Tamil
                          </a>
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
                  isActive
                    ? "text-black font-bold"
                    : "text-gray-700 hover:text-gray-900 transition"
                }
              >
                Pricing
              </NavLink>
              <a
                href="#faq"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                FAQ
              </a>
              <a
                href="#careers"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Careers
              </a>
              <NavLink
                to="/contactus"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Contact
              </NavLink>
              <NavLink
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                to="/booking"
              >
                Book Now
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed  ${atTop ? "top-25" : "top-2"} left-0 right-0 flex justify-center z-30 transition-transform duration-300 ${
          atTop ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-[80%] max-w-6xl  p-2 flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <span className="text-sm text-gray-600">Colombo</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <span className="text-sm text-gray-600">keer@studio.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Follow us on</span>
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