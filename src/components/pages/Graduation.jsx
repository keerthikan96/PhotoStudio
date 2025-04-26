// src/pages/Graduation.jsx

import React from 'react';

const Graduation = () => {
  return (
    <div className="bg-cream text-gray-800 min-h-screen p-6">

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-brown-900 mb-4">A Journey of Dreams: Graduation Day</h1>
        <p className="text-lg italic mx-auto max-w-3xl text-gray-600">
          "The future belongs to those who believe in the beauty of their dreams."
        </p>
      </div>

      {/* Introduction Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-brown-900 mb-4">Celebrating Achievements and New Beginnings</h2>
        <p className="text-lg mx-auto max-w-3xl text-gray-700">
          Today, we honor hard work, perseverance, and the bright futures ahead.
        </p>
      </div>

      {/* Graduation Highlights Section */}
      <div className="bg-white p-8 rounded-lg mb-12 shadow-lg border-2 border-brown-600">
        <h3 className="text-2xl font-serif text-brown-900 mb-6 text-center">Graduation Highlights</h3>

        {/* 2-Column Grid for Images and Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Image Card */}
          {[
            { src: "/src/assets/Images/g1.jpg", text: "The tassel was worth the hassle." },
            { src: "/src/assets/Images/g2.jpg", text: "A new chapter begins today." },
            { src: "/src/assets/Images/g3.jpg", text: "Dream big, work hard, stay focused." },
            { src: "/src/assets/Images/g4.jpg", text: "Today’s accomplishments are the foundation of tomorrow’s success." },
            { src: "/src/assets/Images/g5.jpg", text: "Adventure awaits beyond the gates." },
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
            <h4 className="text-xl font-serif text-brown-900 mb-2">Valedictorian’s Message</h4>
            <p className="text-lg text-gray-700 font-serif">
              "We leave here not just with degrees, but with friendships and dreams that will shape our future."
            </p>
          </div>

          {/* Principal Speech */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">Principal’s Address</h4>
            <p className="text-lg text-gray-700 font-serif">
              "Always believe in your ability to achieve greatness, no matter the challenges."
            </p>
          </div>

          {/* Guest Speaker */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-brown-400">
            <h4 className="text-xl font-serif text-brown-900 mb-2">Guest Speaker’s Inspiration</h4>
            <p className="text-lg text-gray-700 font-serif">
              "Success is not the key to happiness; happiness is the key to success."
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Graduation;
