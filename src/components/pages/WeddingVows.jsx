// src/pages/WeddingVows.jsx

import React from 'react';

const WeddingVows = () => {
  return (
    <div className="bg-cream text-gray-800 min-h-screen p-6">

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-brown-900 mb-4">Everlasting Wedding Vows</h1>
        <p className="text-lg italic mx-auto max-w-3xl text-gray-600">
          "A vow is a promise to stand together, forever."
        </p>
      </div>

      {/* Introduction Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-brown-900 mb-4">The Sacred Union of Sarah & John</h2>
        <p className="text-lg mx-auto max-w-3xl text-gray-700">
          Sarah and John unite in marriage, pledging their love, faith, and commitment to each other.
        </p>
      </div>

      {/* Wedding Highlights Section */}
      <div className="bg-white p-8 rounded-lg mb-12 shadow-lg border-2 border-brown-600">
        <h3 className="text-2xl font-serif text-brown-900 mb-6 text-center">Wedding Highlights</h3>
        
        {/* Colonial 2-Column Grid Layout for Images and Quotes (Dynamic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Image 1 */}
          <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
            <img
              src="/src/assets/Images/engage.jpg"  // Replace with actual image URL
              alt="Wedding Highlight 1"
              className="rounded-lg w-full h-72 object-cover mb-4"
            />
            <p className="text-center text-lg text-gray-700 font-serif">
              "Love is the greatest adventure."
            </p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
            <img
              src="/src/assets/Images/h.jpg"  // Replace with actual image URL
              alt="Wedding Highlight 2"
              className="rounded-lg w-full h-72 object-cover mb-4"
            />
            <p className="text-center text-lg text-gray-700 font-serif">
              "Together is a wonderful place to be."
            </p>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
            <img
              src="/src/assets/Images/h1.jpeg"  // Replace with actual image URL
              alt="Wedding Highlight 3"
              className="rounded-lg w-full h-72 object-cover mb-4"
            />
            <p className="text-center text-lg text-gray-700 font-serif">
              "A lifetime of happiness begins with a single moment."
            </p>
          </div>

          {/* Image 4 */}
          <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
            <img
              src="/src/assets/Images/h2.jpeg"  // Replace with actual image URL
              alt="Wedding Highlight 4"
              className="rounded-lg w-full h-72 object-cover mb-4"
            />
            <p className="text-center text-lg text-gray-700 font-serif">
              "Every love story is beautiful, but ours is my favorite."
            </p>
          </div>

          {/* Image 5 */}
          <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
            <img
              src="/src/assets/Images/h3.jpeg"  // Replace with actual image URL
              alt="Wedding Highlight 5"
              className="rounded-lg w-full h-72 object-cover mb-4"
            />
            <p className="text-center text-lg text-gray-700 font-serif">
              "In your arms, I’ve found my home."
            </p>
          </div>

          {/* Image 6 */}
          <div className="flex flex-col items-center border-2 border-brown-400 p-4 rounded-lg">
            <img
              src="/src/assets/Images/h4.jpeg"  // Replace with actual image URL
              alt="Wedding Highlight 6"
              className="rounded-lg w-full h-72 object-cover mb-4"
            />
            <p className="text-center text-lg text-gray-700 font-serif">
              "Our journey is just beginning."
            </p>
          </div>

        </div>
      </div>

      {/* Wedding Vows Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-brown-900 mb-4">Their Vows</h2>
        <p className="text-lg mx-auto max-w-3xl text-gray-700 mb-6">
          Sarah and John made vows to love, honor, and stand by each other for life.
        </p>

        {/* Vows Excerpts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Sarah's Vow */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">Sarah's Vow</h4>
            <p className="text-lg text-gray-700 font-serif">
              "I promise to love you, in joy and sorrow, now and forever."
            </p>
          </div>

          {/* John's Vow */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">John's Vow</h4>
            <p className="text-lg text-gray-700 font-serif">
              "I vow to protect, cherish, and honor you for all my days."
            </p>
          </div>

          {/* Additional Vows Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">Shared Vow</h4>
            <p className="text-lg text-gray-700 font-serif">
              "Together, we will make every moment count."
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default WeddingVows;
