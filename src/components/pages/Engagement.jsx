// src/pages/Engagement.jsx

import React from 'react';

// Import engagement images
import image1 from '../../assets/Images/image1.jpg';
import image2 from '../../assets/Images/image2.jpg';
import image3 from '../../assets/Images/image3.jpg';
import image4 from '../../assets/Images/image4.jpg';
import image5 from '../../assets/Images/image5.jpg';
import image6 from '../../assets/Images/image6.jpg';

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
    <div className="bg-cream text-gray-800 min-h-screen p-6">

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-brown-900 mb-4">A Promise of Forever: Engagement Day</h1>
        <p className="text-lg italic mx-auto max-w-3xl text-gray-600">
          "Two souls, one heart, one journey together."
        </p>
      </div>

      {/* Introduction Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-brown-900 mb-4">Celebrating Love and Commitment</h2>
        <p className="text-lg mx-auto max-w-3xl text-gray-700">
          Join us as we capture the beautiful beginning of a lifelong journey together.
        </p>
      </div>

      {/* Engagement Highlights - Modular Grid */}
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

      {/* Love Quotes Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-brown-900 mb-4">Words from the Heart</h2>
        <p className="text-lg mx-auto max-w-3xl text-gray-700 mb-6">
          Cherished moments, sweet words, and promises for a lifetime.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">Bride-to-be's Words</h4>
            <p className="text-lg text-gray-700 font-serif">
              "With you, every day feels like a dream come true."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">Groom-to-be's Promise</h4>
            <p className="text-lg text-gray-700 font-serif">
              "I found my forever in you."
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Engagement;
