// src/components/pages/Maternity.jsx

import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

// Maternity images
import maternity1 from '../../assets/Images/Mat1.jpg';
import maternity2 from '../../assets/Images/Mat2.jpg';
import maternity3 from '../../assets/Images/Mat3.jpg';

const maternityMemories = [
  {
    title: "Beautiful Beginnings",
    image: maternity1,
    caption: "Awaiting little miracles. 🤰",
    description: "The journey to motherhood is filled with hope, love, and excitement. Cherishing every heartbeat and every little kick.",
  },
  {
    title: "Motherhood Glow",
    image: maternity2,
    caption: "Glowing with love. ✨",
    description: "Every smile, every touch, every dream — all centered around the tiny life growing inside. A magical journey to remember forever.",
  },
  {
    title: "Bundle of Joy on the Way",
    image: maternity3,
    caption: "A heart full of love. ❤️",
    description: "Counting the days, cherishing the moments. Every moment of anticipation and love captured beautifully in time.",
  },
];

const Maternity = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-100 overflow-hidden pt-24 pb-16 min-h-screen">

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path d="M0,0V46.29c47.9,22,103.78,29.05,158,17,
          70-16,136-66,206-62,65,4,119,58,185,59,
          60,0,109-40,165-57,76-22,166-1,232,31V0Z" fill="#ffe4e6" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-5xl font-extrabold text-rose-400">Maternity Memories</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Celebrating the beautiful journey of love, life, and new beginnings.
        </p>
      </div>

      {/* Maternity Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {maternityMemories.map((memory, index) => (
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
                <p className="text-rose-400 text-2xl font-semibold mb-3">{memory.caption}</p>
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
          60,0,109-40,165-57,76-22,166-1,232,31V0Z" fill="#ffe4e6" />
        </svg>
      </div>

    </section>
  );
};

export default Maternity;
