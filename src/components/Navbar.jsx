import { useState, useEffect } from "react";
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

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [atTop, setAtTop] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [portfolioHover, setPortfolioHover] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset === 0);
      setScrolling(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Strip */}
      <div
        className={`fixed top-0 left-0 right-0 flex justify-center z-30 transition-transform duration-300 ${
          scrolling ? "translate-y-1" : "-translate-y-0"
        }`}
      >
        <div className="w-[80%] max-w-7xl p-2 flex justify-between items-center rounded-lg">
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

      {/* Navbar */}
      <nav className={`fixed left-0 right-0 flex justify-center z-40 ${atTop ? "top-10" : "top-0"}`}>
        <div className="w-[80%] max-w-7xl bg-white shadow-lg rounded-lg border border-gray-200 backdrop-blur-md">
          <div className="flex justify-between items-center h-15 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-24 sm:w-28 md:w-32 h-auto" />
            </div>

            {/* Mobile Menu */}
            <div
              className="w-6 h-5 cursor-pointer md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/" className="text-gray-700 hover:text-gray-900 transition">
                Home
              </NavLink>

              {/* Portfolio Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPortfolioHover(true)}
              >
                <div className="flex items-center space-x-1 cursor-pointer group">
                  <a
                    href="portfolio"
                    className="text-gray-700 group-hover:text-gray-900 transition"
                  >
                    Portfolio
                  </a>
                  <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
                </div>

                {portfolioHover && (
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg p-5 z-50 border border-gray-200"
                    onMouseEnter={() => setDropdownHover(true)}
                    onMouseLeave={() => {
                      setDropdownHover(false);
                      setPortfolioHover(false);
                    }}
                  >
                    <ul className="space-y-2">
                      <li>
                        <NavLink
                          to="/wedding" // Updated to NavLink
                          className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                        >
                          Wedding
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/birthdays" // Add similar routes as needed
                          className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                        >
                          Birthdays
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/maternity" // Add similar routes as needed
                          className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                        >
                          Maternity
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/preshoot" // Add similar routes as needed
                          className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                        >
                          Preshoot
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/puberty" // Add similar routes as needed
                          className="text-gray-600 hover:text-gray-900 hover:font-medium transition flex items-center py-1 px-2 rounded hover:bg-gray-50"
                        >
                          Puberty Ceremony
                        </NavLink>
                      </li>
                      
                    </ul>
                  </div>
                )}
              </div>

              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-bold"
                    : "text-gray-700 hover:text-gray-900 transition"
                }
              >
                Pricing
              </NavLink>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 transition">
                FAQ
              </a>
              <a href="#careers" className="text-gray-700 hover:text-gray-900 transition">
                Careers
              </a>
              <NavLink to="/contactus" className="text-gray-700 hover:text-gray-900 transition">
                Contact
              </NavLink>
              <NavLink
                to="/booking"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Book Now
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Strip */}
      <div
        className={`fixed ${atTop ? "top-25" : "top-2"} left-0 right-0 flex justify-center z-30 transition-transform duration-300 ${
          atTop ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-[80%] max-w-6xl p-2 flex justify-between items-center">
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
