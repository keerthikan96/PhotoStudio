import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/chm.svg";
import { Phone, Search, MapPin, Mail } from "lucide-react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [atTop, setAtTop] = useState(true);
  const [scrolling, setScrolling] = useState(false);
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
      {/* Navbar */}

      <div
        className={`fixed top-0 left-0 right-0 flex justify-center z-30 transition-transform duration-300  ${
          scrolling ? "translate-y-full" : "-translate-y-0"
        }`}
      >
        <div className="w-[80%] max-w-5xl bg-[#ffffff] p-2 flex justify-between items-center">
          <a href="#blogs" className="hover:underline">
            See our most recent blogs &gt;
          </a>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="mr-1" /> +94 75838 3145
            </span>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Search />
            </a>
          </div>
        </div>
      </div>
      <nav className="fixed top-10 left-0 right-0 flex justify-center z-40">
        <div className="w-[80%] max-w-4xl bg-white shadow-lg rounded-lg border border-gray-200 backdrop-blur-md">
          <div className="flex justify-between items-center h-20 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-32 h-auto" />
            </div>

            {/* Mobile Menu Button */}
            <div
              className="w-7 h-5 cursor-pointer md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Home
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Pricing
              </a>
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
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Contact
              </a>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-30 left-0 right-0 flex justify-center z-30 transition-transform duration-300 ${
          atTop ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-[80%] max-w-4xl bg-[#ffffff] p-2 flex justify-between items-center">
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
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
