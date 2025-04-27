// src/components/pages/Birthdays.jsx

import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

// Import your birthday images
import birthday1 from '../../assets/Images/b1.jpg';      // 1st Birthday
import birthday6months from '../../assets/Images/111.jpg'; // Halfway to One
import birthday21 from '../../assets/Images/21.jpg';    // 21st Birthday
import birthday60 from '../../assets/Images/6.jpg';    // 60th Birthday

const birthdays = [
  {
    title: "Baby's 1st Birthday",
    image: birthday1,
    caption: "One whole year of cuteness and love! 🎈",
    description:
      "The very first birthday is a special milestone, celebrating a year filled with giggles, cuddles, and precious memories. A magical beginning of many more to come!",
  },
  {
    title: "Halfway to One Celebration",
    image: birthday6months,
    caption: "Six months of pure joy and wonder! 🌟",
    description:
      "Celebrating six months of adorable milestones and sweet moments. A halfway milestone that's just as special as the big ONE!",
  },
  {
    title: "Cheers to 21 Years!",
    image: birthday21,
    caption: "Legal, free, and fabulous! 🥂",
    description:
      "Turning 21 is a big deal! Full of excitement, freedom, and adventure, it's a celebration of stepping into adulthood with style and dreams.",
  },
  {
    title: "Golden 60th Birthday",
    image: birthday60,
    caption: "A lifetime of wisdom, laughter, and memories! 🎉",
    description:
      "The 60th birthday marks six decades of life, love, lessons, and achievements. A grand milestone celebrated with family, friends, and endless joy!",
  },
];

const Birthdays = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-pink-50 overflow-hidden min-h-screen pt-20">
      
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path d="M0,0V46.29c47.9,22,103.78,29.05,158,17,70-16,136-66,206-62,
          65,4,119,58,185,59,60,0,109-40,165-57,76-22,166-1,232,31V0Z" fill="#fefce8"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-yellow-400 tracking-wide">Birthday Moments</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Life's special milestones captured beautifully — from the very first giggle to a lifetime of memories.
          </p>
        </div>

        <div className="space-y-24">
          {birthdays.map((birthday, index) => (
            <RevealOnScroll key={index}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-10`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
                    <img
                      src={birthday.image}
                      alt={birthday.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">{birthday.title}</h2>
                  <p className="text-pink-400 text-2xl font-semibold mb-2">
                    {birthday.caption}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {birthday.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path d="M0,0V46.29c47.9,22,103.78,29.05,158,17,70-16,136-66,206-62,
          65,4,119,58,185,59,60,0,109-40,165-57,76-22,166-1,232,31V0Z" fill="#fefce8"></path>
        </svg>
      </div>

    </section>
  );
};

export default Birthdays;
