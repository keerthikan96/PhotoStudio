// src/components/pages/Preshoot.jsx

import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

// Preshoot images
import preshoot1 from '../../assets/Images/pr1.jpg';
import preshoot2 from '../../assets/Images/pr2.jpg';
import preshoot3 from '../../assets/Images/pr3.jpg';

const preshootMemories = [
  {
    title: "Magical Moments",
    image: preshoot1,
    caption: "Capturing love before the big day. 💕",
    description: "Pre-wedding shoots are where love stories are told through every glance and every laugh. Creating timeless memories before tying the knot.",
  },
  {
    title: "Candid Connections",
    image: preshoot2,
    caption: "Every moment, a memory. 📸",
    description: "From playful smiles to heartfelt glances, preshoot sessions capture the beautiful bond that leads to forever.",
  },
  {
    title: "A Journey Begins",
    image: preshoot3,
    caption: "Love stories in frames. 🥰",
    description: "Every journey has a beginning. Pre-wedding shoots celebrate the beginning of a new adventure together.",
  },
];

const Preshoot = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden pt-24 pb-16 min-h-screen">

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path d="M0,0V46.29c47.9,22,103.78,29.05,158,17,
          70-16,136-66,206-62,65,4,119,58,185,59,
          60,0,109-40,165-57,76-22,166-1,232,31V0Z" fill="#e0f2fe" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-5xl font-extrabold text-indigo-400">Preshoot Memories</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Celebrating the early chapters of your love story through beautiful frames.
        </p>
      </div>

      {/* Preshoot Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {preshootMemories.map((memory, index) => (
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
                <p className="text-indigo-400 text-2xl font-semibold mb-3">{memory.caption}</p>
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
          60,0,109-40,165-57,76-22,166-1,232,31V0Z" fill="#e0f2fe" />
        </svg>
      </div>

    </section>
  );
};

export default Preshoot;
