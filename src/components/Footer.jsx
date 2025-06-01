import { Link } from 'react-router-dom';
import logoLoder from "../assets/logo4.png";

// Import portfolio images for preview
import pt1 from "../assets/Images/pt-1.jpg";
import pt2 from "../assets/Images/pt-2.jpg";
import pt3 from "../assets/Images/pt-3.jpg";
// Import background image
import bg8 from "../assets/Images/bg-8.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={bg8} 
          alt="Photography Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95"></div>
      </div>      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(71,85,105,0.15),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(75,85,99,0.1),transparent_40%)]"></div>
      </div>
        {/* Main Footer Content */}
      <div className="relative">
        <div className="container mx-auto px-6 pt-16 pb-8">          {/* Newsletter Section */}
          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full mb-6 shadow-lg shadow-slate-500/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get exclusive photography tips, behind-the-scenes content, and special offers delivered to your inbox
              </p>
                <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-white placeholder-gray-300 transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-slate-600 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-slate-700 hover:to-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:shadow-slate-500/25">
                    Subscribe
                  </button>
                </div>
              </div>            </div>
          </div>
            {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">            {/* Brand Section */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <Link to="/" className="inline-block mb-6 group">
                <img 
                  src={logoLoder}
                  alt="Photo Dynamic Logo" 
                  className="h-20 w-auto transition-transform group-hover:scale-105" 
                />              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Capturing life&apos;s most precious moments with artistic vision and professional expertise.
              </p>
              
              {/* Portfolio Preview */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Recent Works</h4>
                <div className="grid grid-cols-3 gap-2">
                  <img 
                    src={pt1} 
                    alt="Portfolio Preview" 
                    className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img 
                    src={pt2} 
                    alt="Portfolio Preview" 
                    className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img 
                    src={pt3} 
                    alt="Portfolio Preview" 
                    className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              </div>
                {/* Social Media */}
              <div className="flex justify-center lg:justify-start space-x-3">                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-white/10 backdrop-blur-sm hover:bg-slate-700 rounded-lg p-3 transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-white/10 backdrop-blur-sm hover:bg-slate-700 rounded-lg p-3 transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-white/10 backdrop-blur-sm hover:bg-slate-700 rounded-lg p-3 transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-white/10 backdrop-blur-sm hover:bg-slate-700 rounded-lg p-3 transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>              </div>
            </div>
              {/* Quick Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>                  <Link to="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>                  <Link to="/portfolio" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Portfolio
                  </Link>
                </li>
                <li>                  <Link to="/pricing" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Pricing
                  </Link>
                </li>
                <li>                  <Link to="/booking" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Book Session
                  </Link>
                </li>
                <li>                  <Link to="/contactus" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Contact
                  </Link>
                </li>              </ul>
            </div>
              {/* Our Services */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>              <ul className="space-y-3">
                <li className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group cursor-pointer">
                  <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Wedding Photography
                </li>
                <li className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group cursor-pointer">
                  <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Pre-Wedding Shoots
                </li>
                <li className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group cursor-pointer">
                  <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Portrait Photography
                </li>
                <li className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group cursor-pointer">
                  <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Event Coverage
                </li>
                <li className="text-gray-300 hover:text-gray-100 transition-colors duration-200 flex items-center group cursor-pointer">
                  <svg className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Commercial Photography
                </li></ul>
            </div>
              {/* Contact Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
              <ul className="space-y-4">                <li className="flex items-start group">
                  <div className="bg-white/10 backdrop-blur-sm group-hover:bg-slate-600 rounded-lg p-2 mr-3 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      No. 4/7/1 Suhada Mawatha,<br />
                      Ganemulla 11020
                    </p>
                  </div>
                </li>                <li className="flex items-center group">
                  <div className="bg-white/10 backdrop-blur-sm group-hover:bg-slate-600 rounded-lg p-2 mr-3 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">+94 76658 1620</span>
                </li>                <li className="flex items-center group">
                  <div className="bg-white/10 backdrop-blur-sm group-hover:bg-slate-600 rounded-lg p-2 mr-3 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">chamodh@gmail.com</span>
                </li>
                <li className="flex items-center group">
                  <div className="bg-white/10 backdrop-blur-sm group-hover:bg-slate-600 rounded-lg p-2 mr-3 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Mon-Sat: 10:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-black/50 backdrop-blur-sm border-t border-white/10 relative">
        <div className="container mx-auto px-6 py-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src={logoLoder}
                alt="Logo" 
                className="h-8 w-auto mr-3 opacity-70"
              />
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Photo Dynamic. All rights reserved. Crafted with ❤️ for memorable moments.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;