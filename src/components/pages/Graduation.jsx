// src/pag/Graduation.jsx

import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import { RevealOnScroll } from "../RevealOnScroll";

// Import graduation images
import image1 from '../../assets/Images/image1.jpg';
import image2 from '../../assets/Images/image2.jpg';
import image3 from '../../assets/Images/image3.jpg';
import image5 from '../../assets/Images/image5.jpg';
import bg8 from '../../assets/Images/bg-8.jpg';

const Graduation = () => {
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
              Graduation Photography
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            <TextTransition text="A Journey of Dreams" />
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            The future belongs to those who believe in the beauty of their dreams
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

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-brown-900 mb-4">A Journey of Dreams: Graduation Day</h1>        <p className="text-lg italic mx-auto max-w-3xl text-gray-600">
          &quot;The future belongs to those who believe in the beauty of their dreams.&quot;
        </p>
      </div>          {/* Introduction Section */}
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-brown-900 mb-4">Celebrating Achievements and New Beginnings</h2>
              <p className="text-lg mx-auto max-w-3xl text-gray-700">
                Today, we honor hard work, perseverance, and the bright futures ahead.
              </p>
            </div>
          </RevealOnScroll>

      {/* Graduation Highlights Section */}
      <div className="bg-white p-8 rounded-lg mb-12 shadow-lg border-2 border-brown-600">
        <h3 className="text-2xl font-serif text-brown-900 mb-6 text-center">Graduation Highlights</h3>

        {/* 2-Column Grid for Images and Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Image Card */}
          {[
            { src: image1, text: "The tassel was worth the hassle." },
            { src: image2, text: "A new chapter begins today." },
            { src: image3, text: "Dream big, work hard, stay focused." },
            { src: "/src/assets/Images/g4.jpg", text: "Today’s accomplishments are the foundation of tomorrow’s success." },
            { src: image5, text: "Adventure awaits beyond the gates." },
            { src: "/src/assets/Images/g6.jpg", text: "Here’s to the memories we’ve made and the dreams yet to come true." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg overflow-hidden">
              <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                <img
                  src={item.src}
                  alt={`Graduation Moment ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <p className="text-center text-lg text-gray-700 font-serif">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Graduation Speeches Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-brown-900 mb-4">Words of Wisdom</h2>
        <p className="text-lg mx-auto max-w-3xl text-gray-700 mb-6">
          Heartfelt speeches and reflections from graduates and mentors alike.
        </p>

        {/* Speeches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Valedictorian Speech */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">Valedictorian’s Message</h4>            <p className="text-lg text-gray-700 font-serif">
              &quot;We leave here not just with degrees, but with friendships and dreams that will shape our future.&quot;
            </p>
          </div>

          {/* Principal Speech */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">Principal’s Address</h4>            <p className="text-lg text-gray-700 font-serif">
              &quot;Always believe in your ability to achieve greatness, no matter the challenges.&quot;
            </p>
          </div>

          {/* Guest Speaker */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">Guest Speaker’s Inspiration</h4>            <p className="text-lg text-gray-700 font-serif">
              &quot;Success is not the key to happiness; happiness is the key to success.&quot;
            </p>
          </div>

        </div>
      </div>        </div>
      </PagesUI>
    </div>
  );
};

export default Graduation;
