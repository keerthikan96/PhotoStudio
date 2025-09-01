import { Link } from 'react-router-dom';
import logoLoder from "../assets/logo4.png";
import logosinhala from "../assets/logoA.png";

// Import portfolio images for preview
import pt1 from "../assets/Images/pt-1.jpg";
import pt2 from "../assets/Images/pt-2.jpg";
import pt3 from "../assets/Images/pt-3.jpg";
// Import background image
import bg8 from "../assets/Images/bg-8.jpg";

const Footer = () => {
  return (
    // /* Eyecatcher: Added a subtle noise pattern for a textured feel */
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden bg-[url('/noise.svg')]">
      {" "}
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bg8}
          alt="Photography Background"
          className="w-full h-full object-cover opacity-10" // /* Eyecatcher: Reduced opacity for subtlety */
        />
        {/* Eyecatcher: Enhanced the gradient for more depth */ }
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-slate-900/90"></div>
      </div>{" "}
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(203,213,225,0.1),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(203,213,225,0.08),transparent_50%)]"></div>
      </div>
      {/* Main Footer Content */}
      <div className="relative">
        <div className="container mx-auto px-6 pt-12 pb-4"> {/* Eyecatcher: Increased top padding */}
          {/* Newsletter Section */}
          <div className="text-center mb-12"> {/* Eyecatcher: Increased bottom margin */}
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col items-center justify-center mb-4">
                <Link to="/" className="inline-block group mb-4">
                  <img
                    src={logosinhala}
                    alt="Chamodh Delpearachchi Photography"
                    // /* Eyecatcher: Added a drop-shadow on hover for a glowing effect */
                    className="h-20 w-auto mx-auto lg:mx-0 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(203,213,225,0.4)]"
                    style={{ maxHeight: '80px' }}
                  />
                </Link>
              </div>
              <p className="text-gray-300 md:text-lg mb-6 max-w-2xl mx-auto"> {/* Eyecatcher: Slightly larger text on medium screens */}
                  Stay inspired with photography tips, behind-the-scenes content, and special offers.
              </p>
            </div>
          </div>
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8">
            {" "}
            {/* Brand Section */}
            <div className="lg:col-span-1 text-center lg:text-left">
              {/* Eyecatcher: Made headers more prominent with uppercase, tracking, and a border */}
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider pb-3 border-b-2 border-slate-700">
                STAY CONNECTED
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed"> {/* Eyecatcher: Increased line-height */}
                Capturing life&apos;s most precious moments with artistic vision
                and professional expertise.
              </p>

              {/* Portfolio Preview */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                  Recent Works
                </h4>
                <div className="grid grid-cols-3 gap-3">
                    {/* Eyecatcher: Added a subtle border, shadow, and overlay on hover */}
                    {[pt1, pt2, pt3].map((img, index) => (
                      <div key={index} className="relative group rounded-lg overflow-hidden border-2 border-transparent hover:border-slate-500 transition-all duration-300">
                        <img
                          src={img}
                          alt="Portfolio Preview"
                          className="w-full h-20 object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                </div>
              </div>
              {/* Social Media */}
              <div className="flex justify-center lg:justify-start space-x-3">
                {" "}
                {/* Eyecatcher: Added transform, glow, and gradient effects on hover */}
                <a
                  href="https://www.facebook.com/ChamodhDelpearachchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 backdrop-blur-sm hover:bg-slate-700 rounded-lg p-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/30"
                >
                  <svg
                    className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>{" "}
                <a
                  href="https://www.instagram.com/chamodh_delpearachchi/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 backdrop-blur-sm hover:bg-slate-700 rounded-lg p-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/30"
                >
                  <svg
                    className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>{" "}
                <a
                  href="https://www.tiktok.com/@chamoddelpearachchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 backdrop-blur-sm hover:bg-slate-700 rounded-lg p-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/30"
                >
                  <svg
                    className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.75 2v12.25a2.25 2.25 0 1 1-2.25-2.25h.25V9.5h-.25A5.25 5.25 0 1 0 15.75 14.75V7.5h2V5.25h-2V2h-3z" />
                  </svg>
                </a>{" "}
                <a
                  href="https://www.pinterest.com/chamodhdelpearachchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 backdrop-blur-sm hover:bg-slate-700 rounded-lg p-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/30"
                >
                  <svg
                    className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.084 2.55 7.563 6.13 8.89-.085-.755-.16-1.915.033-2.74.175-.74 1.125-4.71 1.125-4.71s-.287-.574-.287-1.423c0-1.334.774-2.33 1.736-2.33.819 0 1.216.615 1.216 1.353 0 .825-.526 2.06-.797 3.21-.227.96.482 1.743 1.43 1.743 1.716 0 3.037-1.81 3.037-4.42 0-2.31-1.662-3.927-4.035-3.927-2.75 0-4.37 2.062-4.37 4.197 0 .834.32 1.73.72 2.215.08.097.09.182.066.28-.073.297-.24.96-.273 1.093-.04.165-.13.2-.3.12-1.12-.52-1.82-2.15-1.82-3.46 0-2.82 2.05-6.06 6.11-6.06 3.21 0 5.7 2.29 5.7 5.35 0 3.18-1.99 5.74-4.76 5.74-1.01 0-1.96-.53-2.28-1.14l-.62 2.36c-.19.74-.57 1.67-.85 2.24.64.2 1.32.31 2.03.31 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </a>{" "}
              </div>
            </div>
            {/* Quick Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider pb-3 border-b-2 border-slate-700">Quick Links</h3>
              <ul className="space-y-3">
                {['/', '/portfolio', '/pricing', '/booking', '/contactus'].map((path, index) => (
                    <li key={path}>
                      <Link
                        to={path}
                        /* Eyecatcher: More dynamic hover effect with sliding icon and text */
                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center lg:justify-start group hover:translate-x-2"
                      >
                        <svg
                          /* Eyecatcher: Icon appears and pushes text on hover */
                          className="w-0 h-4 mr-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:mr-3 transition-all duration-300 text-slate-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {['Home', 'Portfolio', 'Pricing', 'Book Session', 'Contact'][index]}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
            {/* Our Services */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider pb-3 border-b-2 border-slate-700">Our Services</h3>
              <ul className="space-y-3">
                {['Wedding Photography', 'Pre-Wedding Shoots', 'Portrait Photography', 'Event Coverage', 'Commercial Photography'].map((service) => (
                  <li key={service} className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center lg:justify-start group cursor-pointer hover:translate-x-2">
                     <svg
                        className="w-0 h-4 mr-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:mr-3 transition-all duration-300 text-slate-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider pb-3 border-b-2 border-slate-700">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                {" "}
                {/* Eyecatcher: Added a highlight effect on hover for the entire list item */}
                <li className="flex items-start justify-center lg:justify-start group p-2 -ml-2 rounded-lg transition-colors hover:bg-white/5">
                  <div className="bg-white/10 backdrop-blur-sm group-hover:bg-slate-600 rounded-lg p-3 mr-4 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      No. 4/7/1 Suhada Mawatha,
                      <br />
                      Ganemulla 11020
                    </p>
                  </div>
                </li>{" "}
                <li className="flex items-center justify-center lg:justify-start group p-2 -ml-2 rounded-lg transition-colors hover:bg-white/5">
                  <div className="bg-white/10 backdrop-blur-sm group-hover:bg-slate-600 rounded-lg p-3 mr-4 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 hover:text-white transition-colors"><a href="tel:+94766581620">+94 76658 1620</a></span>
                </li>{" "}
                <li className="flex items-center justify-center lg:justify-start group p-2 -ml-2 rounded-lg transition-colors hover:bg-white/5">
                  <div className="bg-white/10 backdrop-blur-sm group-hover:bg-slate-600 rounded-lg p-3 mr-4 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 hover:text-white transition-colors"><a href="mailto:chamodh@gmail.com">chamodh@gmail.com</a></span>
                </li>
                <li className="flex items-center justify-center lg:justify-start group p-2 -ml-2 rounded-lg transition-colors hover:bg-white/5">
                  <div className="bg-white/10 backdrop-blur-sm group-hover:bg-slate-600 rounded-lg p-3 mr-4 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Mon-Sat: 10:00 AM - 7:00 PM
                  </span>
                </li>
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      {/* Eyecatcher: Added a glowing top border effect */}
      <div className="bg-black/50 backdrop-blur-sm border-t border-white/10 relative before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-slate-500 before:to-transparent before:opacity-50">
        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src={logoLoder}
                alt="Logo" 
                className="h-8 w-auto mr-3 opacity-70"
              />
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} <a href='https://www.kaayaltek.com' target='_blank' rel="noopener noreferrer" className='font-semibold text-gray-300 hover:text-white transition-colors'>KAAYALTEK</a>. All rights reserved.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-6">
               {/* Eyecatcher: Made copyright text more visually interesting */}
              <p className="text-gray-500 text-sm hidden lg:block">Crafted with ❤️ for memorable moments.</p>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;