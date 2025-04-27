// src/components/pages/Puberty.jsx

import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

// Puberty images
import puberty1 from '../../assets/Images/pube1.jpg';
import puberty2 from '../../assets/Images/pube2.jpg';
import puberty3 from '../../assets/Images/pube3.jpg';

const pubertyMemories = [
  {
    title: "A New Chapter Begins",
    image: puberty1,
    caption: "Celebrating growth and transformation. 🌸",
    description: "Marking the beautiful transition from childhood to adulthood, a moment filled with pride, emotions, and dreams for the future.",
  },
  {
    title: "Tradition and Joy",
    image: puberty2,
    caption: "Embracing culture and heritage. 🎉",
    description: "Every ceremony reflects rich traditions, vibrant celebrations, and joyous gatherings that create lifelong memories.",
  },
  {
    title: "A Special Milestone",
    image: puberty3,
    caption: "Cherishing a once-in-a-lifetime moment. ✨",
    description: "Honoring this important phase with love, blessings, and smiles that light up hearts.",
  },
];

const Puberty = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-100 overflow-hidden pt-24 pb-16 min-h-screen">

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path d="M0,0V46.29c47.9,22,103.78,29.05,158,17,
          70-16,136-66,206-62,65,4,119,58,185,59,
          60,0,109-40,165-57,76-22,166-1,232,31V0Z" fill="#fce7f3" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-5xl font-extrabold text-pink-400">Puberty Ceremony Memories</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Honoring the transition with love, tradition, and celebration.
        </p>
      </div>

      {/* Puberty Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {pubertyMemories.map((memory, index) => (
          <RevealOnScroll key={index}>
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-500 transform hover:scale-105">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">{memory.title}</h2>
                <p className="text-pink-400 text-2xl font-semibold mb-3">{memory.caption}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{memory.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path d="M0,0V46.29c47.9,22,103.78,29.05,158,17,
          70-16,136-66,206-62,65,4,119,58,185,59,
          60,0,109-40,165-57,76-22,166-1,232,31V0Z" fill="#fce7f3" />
        </svg>
      </div>

    </section>
  );
};

export default Puberty;
