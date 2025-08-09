import { RevealOnScroll } from "./RevealOnScroll";
import PropTypes from 'prop-types';

// Import background images
import bg1 from '../assets/Images/bg-1.jpg';
import bg3 from '../assets/Images/bg-3.jpg';
import bg5 from '../assets/Images/bg-5.jpg';

const PricingPackage = ({ 
  title, 
  subtitle, 
  price,
  features, 
  delay = 0,
  threshold = 0.1 
}) => {
  // Check if this is a premium package (higher price packages get special styling)
  const priceValue = price ? parseInt(price.replace(/[^\d]/g, '')) : 0;
  const isPremium = priceValue >= 300000;
  const isPopular = priceValue >= 200000 && priceValue < 300000;

  return (
    <RevealOnScroll threshold={threshold} delay={delay}>
      <div className={`relative group h-full ${isPremium ? 'transform scale-105' : ''}`}>        {/* Popular badge for mid-tier packages */}
        {isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border border-gray-500">
              MOST POPULAR
            </div>
          </div>
        )}

        {/* Premium badge for high-tier packages */}
        {isPremium && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-black to-gray-800 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border border-gray-600">
              PREMIUM
            </div>
          </div>
        )}        <div className={`relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col ${
          isPremium ? 'ring-2 ring-gray-300 shadow-gray-200' : 
          isPopular ? 'ring-2 ring-gray-300 shadow-gray-200' : 'ring-1 ring-gray-200'
        }`}>
          
          {/* Gradient overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-50"></div>          {/* Header Section with Background Image */}
          <div className="relative z-10 p-6 text-center h-48 overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  isPremium ? bg1 : 
                  isPopular ? bg3 : 
                  bg5
                })`,
              }}
            ></div>            
            {/* Dark overlay for text readability with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            
            <div className="relative z-10">
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-white/10 rounded-full blur-sm"></div>
              
              <h3 className="text-xl font-bold text-white mb-2 relative z-10 drop-shadow-lg">{title}</h3>
              <p className="text-white/90 text-sm mb-4 relative z-10 drop-shadow-md">{subtitle}</p>
                {price && (
                <div className="relative z-10">
                  <div className="inline-flex items-center backdrop-blur-sm rounded-full px-4 py-2 border bg-white/20 border-white/30">
                    <span className="text-2xl font-bold text-white drop-shadow-lg">{price}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Features Section */}
          <div className="relative z-10 p-6 flex-grow">
            <ul className="space-y-3">
              {features?.map((feature, index) => (
                <li key={index} className="flex items-start group/item">                  <div className={`mr-3 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    isPremium ? 'bg-gradient-to-r from-black to-gray-700' :
                    isPopular ? 'bg-gradient-to-r from-gray-600 to-gray-700' :
                    'bg-gradient-to-r from-gray-600 to-gray-700'
                  }`}>
                    ✓
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="relative z-10 p-6 pt-0">            <button className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl ${
              isPremium ? 
                'bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white border border-gray-600' :
              isPopular ? 
                'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-gray-500' :
                'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-gray-500'
            }`}>
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Book Now
              </span>
            </button>
          </div>

          {/* Hover overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

PricingPackage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
  threshold: PropTypes.number
};

export default PricingPackage;
