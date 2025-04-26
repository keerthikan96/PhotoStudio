// src/components/pages/Wedding.jsx

import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

import hinduWeddingImg from '../../assets/Images/hin.jpg';
import muslimWeddingImg from '../../assets/Images/muslim.jpg';
import christianWeddingImg from '../../assets/Images/christian.jpg';
import buddhistWeddingImg from '../../assets/Images/sinhala.jpg';

const weddingTypes = [
  {
    title: "Hindu Weddings",
    image: hinduWeddingImg,
    groom: "Arjun",
    bride: "Meera",
    caption: "A journey tied by the sacred fire, filled with vibrant rituals and blessings.",
    description:
      "Sacred fire, vibrant rituals, and traditional attire define Hindu weddings. Each ritual — from Mehendi to Mandap — weaves emotion and color into timeless memories.",
  },
  {
    title: "Muslim Weddings",
    image: muslimWeddingImg,
    groom: "Ayaan",
    bride: "Zara",
    caption: "A Nikah blessed with serenity, faith, and heartfelt love.",
    description:
      "Nikah ceremonies are elegant and spiritual. With Quranic blessings and heartfelt vows, Muslim weddings reflect beauty, simplicity, and profound connection.",
  },
  {
    title: "Christian Weddings",
    image: christianWeddingImg,
    groom: "David",
    bride: "Sophia",
    caption: "Under divine light, they vowed to love and cherish forever.",
    description:
      "Graceful and heartfelt, Christian weddings celebrate faith and love with church ceremonies, ring exchanges, and blessings under divine presence.",
  },
  {
    title: "Buddhist Weddings",
    image: buddhistWeddingImg,
    groom: "Nimal",
    bride: "Sundari",
    caption: "Chants of peace guided their union into mindful love.",
    description:
      "Buddhist weddings embrace calm and connection. With serene chants and mindful blessings, they mark a peaceful beginning to a journey together.",
  },
];

const Wedding = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-100 via-white to-purple-100 overflow-hidden min-h-screen pt-20">
      
      {/* Top Decorative SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-20"
        >
          <path
            d="M0,0V46.29c47.9,22,103.78,29.05,158,17,70-16,136-66,206-62,65,4,119,58,185,59,60,0,109-40,165-57,76-22,166-1,232,31V0Z"
            fill="#f9fafb"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-pink-600 tracking-wide">Wedding Stories</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Every wedding tells a story of love, tradition, and new beginnings. 
            Celebrate these timeless moments captured with passion and artistry.
          </p>
        </div>

        <div className="space-y-24">
          {weddingTypes.map((wedding, index) => (
            <RevealOnScroll key={index}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-10`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105">
                    <img
                      src={wedding.image}
                      alt={wedding.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">{wedding.title}</h2>
                  <p className="text-pink-500 text-2xl font-semibold mb-2">
                    {wedding.groom} ❤️ {wedding.bride}
                  </p>
                  <p className="italic text-gray-500 text-lg mb-6">
                    “{wedding.caption}”
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {wedding.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Bottom Decorative SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-20"
        >
          <path
            d="M0,0V46.29c47.9,22,103.78,29.05,158,17,70-16,136-66,206-62,65,4,119,58,185,59,60,0,109-40,165-57,76-22,166-1,232,31V0Z"
            fill="#f9fafb"
          ></path>
        </svg>
      </div>
      
    </section>
  );
};

export default Wedding;
