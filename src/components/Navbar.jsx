import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons
import logo from "../assets/chm.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* Top Section with Contact Info and Social Media */}
      <div className={`fixed top-0 w-full z-30 bg-white transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Contact Info with Icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-600" /> {/* Location Icon */}
              <span className="text-sm text-gray-600">Sri Lanka</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" /> {/* Email Icon */}
              <span className="text-sm text-gray-600">hello@cdp.lk</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Follow us on</span>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebook /> {/* Facebook Icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter /> {/* Twitter Icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram /> {/* Instagram Icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed top-12 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-12"}`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center align">
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
              <a href="#home" className="text-black hover:text-gray-300 transition-colors">
                Home
              </a>
              <a href="#portfolio" className="text-black hover:text-gray-300 transition-colors">
                Portfolio
              </a>
              <a href="#pricing" className="text-black hover:text-gray-300 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-black hover:text-gray-300 transition-colors">
                FAQ
              </a>
              <a href="#careers" className="text-black hover:text-gray-300 transition-colors">
                Careers
              </a>
              <a href="#contact" className="text-black hover:text-gray-300 transition-colors">
               Blog
              </a>
            
              
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};