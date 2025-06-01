// src/pages/Engagement.jsx

import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import { RevealOnScroll } from "../RevealOnScroll";

// Import engagement images
import image1 from '../../assets/Images/image1.jpg';
import image2 from '../../assets/Images/image2.jpg';
import image3 from '../../assets/Images/image3.jpg';
import image4 from '../../assets/Images/image4.jpg';
import image5 from '../../assets/Images/image5.jpg';
import image6 from '../../assets/Images/image6.jpg';
import bg8 from '../../assets/Images/bg-8.jpg';

const Engagement = () => {
  const images = [
    { src: image1, text: "Together is a beautiful place to be." },
    { src: image2, text: "A new chapter of our story begins." },
    { src: image3, text: "Hand in hand, heart to heart." },
    { src: image4, text: "Love binds us beyond words." },
    { src: image5, text: "Today, tomorrow, always." },
    { src: image6, text: "The journey to forever starts here." },
  ];

  return (
    <div className="min-h-screen bg-[#f0f2f4]">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-black/80 to-black/50 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${bg8})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
        
        {/* Floating elements for modern touch */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
              Engagement Photography
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            <TextTransition text="A Promise of Forever" />
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Two souls, one heart, one journey together
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content wrapped in PagesUI */}
      <PagesUI>
        <div className="bg-cream text-gray-800 min-h-screen p-6">
          {/* Introduction Section */}
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-brown-900 mb-4">Celebrating Love and Commitment</h2>
              <p className="text-lg mx-auto max-w-3xl text-gray-700">
                Join us as we capture the beautiful beginning of a lifelong journey together.
              </p>
            </div>
          </RevealOnScroll>

          {/* Engagement Highlights - Modular Grid */}
          <RevealOnScroll>
            <div className="bg-white p-8 rounded-lg mb-12 shadow-lg border-2 border-brown-600">
              <h3 className="text-2xl font-serif text-brown-900 mb-6 text-center">Engagement Highlights</h3>

              {/* Modular Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((item, index) => (
                  <div key={index} className="flex flex-col bg-cream border-2 border-brown-400 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <div className="w-full h-64 overflow-hidden">
                      <img
                        src={item.src}
                        alt={`Engagement Moment ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-center text-lg text-gray-700 font-serif">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Love Quotes Section */}
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-brown-900 mb-4">Words from the Heart</h2>
              <p className="text-lg mx-auto max-w-3xl text-gray-700 mb-6">
                Cherished moments, sweet words, and promises for a lifetime.
              </p>              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
                  <h4 className="text-xl font-serif text-brown-900 mb-2">Bride-to-be&apos;s Words</h4>
                  <p className="text-lg text-gray-700 font-serif">
                    &quot;With you, every day feels like a dream come true.&quot;
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
                  <h4 className="text-xl font-serif text-brown-900 mb-2">Groom-to-be&apos;s Promise</h4>
                  <p className="text-lg text-gray-700 font-serif">
                    &quot;I found my forever in you.&quot;
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </PagesUI>
    </div>
  );
};

export default Engagement;
