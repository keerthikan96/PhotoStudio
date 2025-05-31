import { Link } from 'react-router-dom';
import logoLoder from "../assets/logo4.png"
const Footer = () => {
  return (    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/Images/bg-8.jpg" 
            alt="Photography Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95"></div>
        </div>
        
        {/* Decorative Photography Elements */}
        <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
          <img 
            src="/src/assets/Images/image1.jpg" 
            alt="Portfolio" 
            className="w-32 h-32 object-cover rounded-full blur-sm"
          />
        </div>
        <div className="absolute top-20 right-20 opacity-10 hidden lg:block">
          <img 
            src="/src/assets/Images/image3.jpg" 
            alt="Portfolio" 
            className="w-24 h-24 object-cover rounded-lg blur-sm rotate-12"
          />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-10 hidden lg:block">
          <img 
            src="/src/assets/Images/image5.jpg" 
            alt="Portfolio" 
            className="w-20 h-20 object-cover rounded-full blur-sm"
          />
        </div>
        
        {/* Decorative Top Wave */}
        <div className="relative">
          <svg className="w-full h-12 text-gray-800" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,122.7C960,128,1056,128,1152,122.7L1200,117.3L1200,0L1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="currentColor"></path>
          </svg>
        </div>

        <div className="relative container mx-auto px-6 pt-16 pb-12">          {/* Newsletter Section with Enhanced Visual Appeal */}
          <div className="text-center mb-16 relative">
            {/* Decorative camera icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Connected with Our Journey
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join our community and get exclusive photography tips, behind-the-scenes content, and special offers
              </p>
              
              {/* Newsletter with image preview */}
              <div className="relative">
                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 relative z-10">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 border-2 border-gray-600 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-gray-400"
                  />
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Subscribe
                  </button>
                </div>
                
                {/* Small preview images around the newsletter */}
                <div className="absolute -left-20 top-2 opacity-30 hidden xl:block">
                  <img 
                    src="/src/assets/Images/image2.jpg" 
                    alt="Photography" 
                    className="w-12 h-12 object-cover rounded-lg rotate-12 shadow-lg"
                  />
                </div>
                <div className="absolute -right-16 top-4 opacity-30 hidden xl:block">
                  <img 
                    src="/src/assets/Images/image4.jpg" 
                    alt="Photography" 
                    className="w-10 h-10 object-cover rounded-full -rotate-12 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">            {/* Brand Section with Enhanced Visuals */}
            <div className="lg:col-span-1 relative">
              {/* Background card effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl blur-sm"></div>
              <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <Link to="/" className="inline-block mb-6 group">
                  <div className="relative">
                    <img 
                      src={logoLoder}
                      alt="Photo Dynamic Logo" 
                      className="h-24 w-auto transition-transform group-hover:scale-105 relative z-10" 
                    />
                    {/* Glow effect behind logo */}
                    <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </Link>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Capturing life&apos;s most precious moments with artistic vision and professional expertise.
                </p>
                
                {/* Featured work preview */}
                <div className="mb-6">
                  <div className="grid grid-cols-3 gap-2 opacity-60 hover:opacity-80 transition-opacity">
                    <img 
                      src="/src/assets/Images/pt-1.jpg" 
                      alt="Portfolio Preview" 
                      className="w-full h-16 object-cover rounded-lg"
                    />
                    <img 
                      src="/src/assets/Images/pt-2.jpg" 
                      alt="Portfolio Preview" 
                      className="w-full h-16 object-cover rounded-lg"
                    />
                    <img 
                      src="/src/assets/Images/pt-3.jpg" 
                      alt="Portfolio Preview" 
                      className="w-full h-16 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center">Recent Works</p>
                </div>
                
                {/* Social Media */}
                <div className="flex space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-gray-800 hover:bg-blue-600 rounded-xl p-3 transition-all duration-300 border border-gray-700"
                >
                  <svg className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 rounded-xl p-3 transition-all duration-300 border border-gray-700"
                >
                  <svg className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-gray-800 hover:bg-blue-400 rounded-xl p-3 transition-all duration-300 border border-gray-700"
                >
                  <svg className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-gray-800 hover:bg-red-600 rounded-xl p-3 transition-all duration-300 border border-gray-700"
                >
                  <svg className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />                  </svg>
                </a>
              </div>
            </div>
          </div>{/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Book Session
                  </Link>
                </li>
                <li>
                  <Link to="/contactus" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>            {/* Our Services with Visual Elements */}
            <div className="relative">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl"></div>
              <div className="relative p-4">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Our Services</h3>
                </div><ul className="space-y-3">
                <li className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Wedding Photography
                </li>
                <li className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pre-Wedding Shoots
                </li>
                <li className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Portrait Photography
                </li>
                <li className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Event Coverage
                </li>                <li className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Commercial Photography
                </li>
              </ul>
              </div>
            </div>            {/* Contact Info with Enhanced Visuals */}
            <div className="relative">
              {/* Background card effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm"></div>
              <div className="relative p-4">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Get in Touch</h3>
                </div>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="bg-gray-800 group-hover:bg-blue-600 rounded-lg p-2 mr-3 transition-colors border border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">No. 4/7/1 Suhada Mawatha,<br />Ganemulla 11020</span>
                </li>
                <li className="flex items-center group">
                  <div className="bg-gray-800 group-hover:bg-green-600 rounded-lg p-2 mr-3 transition-colors border border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">+94 76658 1620</span>
                </li>                <li className="flex items-center group">
                  <div className="bg-gray-800 group-hover:bg-teal-600 rounded-lg p-2 mr-3 transition-colors border border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">chamodh@gmail.com</span>
                </li>
                <li className="flex items-center group">
                  <div className="bg-gray-800 group-hover:bg-orange-600 rounded-lg p-2 mr-3 transition-colors border border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>                  <span className="text-gray-300">Mon-Sat: 10:00 AM - 7:00 PM</span>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>      {/* Bottom Section with Enhanced Design */}
      <div className="bg-black border-t border-gray-800 relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/src/assets/Images/bg-14.jpg" 
            alt="Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 py-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              {/* Small logo in footer */}
              <img 
                src={logoLoder}
                alt="Logo" 
                className="h-8 w-auto mr-3 opacity-70"
              />
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} KaayalTek. All rights reserved. Crafted with ❤️ for memorable moments.
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