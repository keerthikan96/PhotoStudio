import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/chm.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setAtTop(currentScrollPos === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* White Space at the Top */}
      {atTop && <div className="h-20 bg-white"></div>}

      {/* Main Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-white backdrop-blur-lg border-b border-gray-200 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-40 h-40" />
            </div>

            {/* Mobile Menu Button */}
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
                Portfolio
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <a href="#careers" className="text-gray-700 hover:text-gray-900 transition-colors">
                Careers
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <a href="#blog" className="text-gray-700 hover:text-gray-900 transition-colors">
                Blog
              </a>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Top Section with Contact Info and Social Media */}
      <div className={`fixed top-20 w-full z-30 bg-white transition-transform duration-300 ${atTop ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Contact Info with Icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <span className="text-sm text-gray-600">India</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <span className="text-sm text-gray-600">hello@focusstudios.h</span>
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