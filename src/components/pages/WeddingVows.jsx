// src/pages/WeddingVows.jsx

import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import { RevealOnScroll } from "../RevealOnScroll";

// Import wedding-related images
import image1 from '../../assets/Images/image1.jpg';
import image2 from '../../assets/Images/image2.jpg';
import image3 from '../../assets/Images/image3.jpg';
import image4 from '../../assets/Images/image4.jpg';
import image5 from '../../assets/Images/image5.jpg';
import image6 from '../../assets/Images/image6.jpg';
import bg8 from '../../assets/Images/bg-8.jpg';

const WeddingVows = () => {
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
              Wedding Photography
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            <TextTransition text="Everlasting Wedding Vows" />
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            A vow is a promise to stand together, forever
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
              <h2 className="text-3xl font-serif text-brown-900 mb-4">The Sacred Union of Sarah & John</h2>
              <p className="text-lg mx-auto max-w-3xl text-gray-700">
                Sarah and John unite in marriage, pledging their love, faith, and commitment to each other.
              </p>
            </div>
          </RevealOnScroll>

          {/* Wedding Highlights Section */}
          <RevealOnScroll>
            <div className="bg-white p-8 rounded-lg mb-12 shadow-lg border-2 border-brown-600">
              <h3 className="text-2xl font-serif text-brown-900 mb-6 text-center">Wedding Highlights</h3>
              
              {/* Colonial 2-Column Grid Layout for Images and Quotes (Dynamic) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Image 1 */}
                <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
                  <img
                    src={image1}
                    alt="Wedding Highlight 1"
                    className="rounded-lg w-full h-72 object-cover mb-4"
                  />
                  <p className="text-center text-lg text-gray-700 font-serif">
                    &quot;Love is the greatest adventure.&quot;
                  </p>
                </div>

                {/* Image 2 */}
                <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
                  <img
                    src={image2}
                    alt="Wedding Highlight 2"
                    className="rounded-lg w-full h-72 object-cover mb-4"
                  />
                  <p className="text-center text-lg text-gray-700 font-serif">
                    &quot;Together is a wonderful place to be.&quot;
                  </p>
                </div>

                {/* Image 3 */}
                <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
                  <img
                    src={image3}
                    alt="Wedding Highlight 3"
                    className="rounded-lg w-full h-72 object-cover mb-4"
                  />
                  <p className="text-center text-lg text-gray-700 font-serif">
                    &quot;Two hearts, one soul.&quot;
                  </p>
                </div>

                {/* Image 4 */}
                <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
                  <img
                    src={image4}
                    alt="Wedding Highlight 4"
                    className="rounded-lg w-full h-72 object-cover mb-4"
                  />
                  <p className="text-center text-lg text-gray-700 font-serif">
                    &quot;Forever starts today.&quot;
                  </p>
                </div>

                {/* Image 5 */}
                <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
                  <img
                    src={image5}
                    alt="Wedding Highlight 5"
                    className="rounded-lg w-full h-72 object-cover mb-4"
                  />
                  <p className="text-center text-lg text-gray-700 font-serif">
                    &quot;You are my today and all of my tomorrows.&quot;
                  </p>
                </div>

                {/* Image 6 */}
                <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
                  <img
                    src={image6}
                    alt="Wedding Highlight 6"
                    className="rounded-lg w-full h-72 object-cover mb-4"
                  />
                  <p className="text-center text-lg text-gray-700 font-serif">
                    &quot;In you, I&apos;ve found the love of my life.&quot;
                  </p>
                </div>

              </div>
            </div>
          </RevealOnScroll>

          {/* Wedding Vows Section */}
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-brown-900 mb-4">Sacred Vows</h2>
              <p className="text-lg mx-auto max-w-3xl text-gray-700 mb-6">
                Promises made from the heart, spoken before God and loved ones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
                  <h4 className="text-xl font-serif text-brown-900 mb-2">Sarah&apos;s Vow</h4>
                  <p className="text-lg text-gray-700 font-serif">
                    &quot;John, you are my heart, my soul, my treasure, my today, my tomorrow, my forever, my everything.&quot;
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
                  <h4 className="text-xl font-serif text-brown-900 mb-2">John&apos;s Vow</h4>
                  <p className="text-lg text-gray-700 font-serif">
                    &quot;Sarah, I promise to love you faithfully through the good times and the bad, in sickness and in health.&quot;
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

export default WeddingVows;
