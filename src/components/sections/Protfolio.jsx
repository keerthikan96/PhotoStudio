// src/components/sections/Portfolio.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import image3 from "../../assets/Images/image5.jpg";
import weddingImg from "../../assets/Images/hinduwed.jpg";
import birthdayImg from "../../assets/Images/birthday.jpg";
import gradImg from "../../assets/Images/grad.jpg";
import engagementImg from "../../assets/Images/engage.jpg";
import receptionImg from "../../assets/Images/recep.jpg";
import pubertyImg from "../../assets/Images/pube.jpg";

import { RevealOnScroll } from '../RevealOnScroll';

const Portfolio = () => {
  const moments = [
    { name: "Everlasting Wedding Vows", image: weddingImg, link: "/wedding-vows" },
    { name: "Caps Off to the Future Graduations", image: gradImg, link: "/graduation" },
    { name: "Enchanting Engagement Promises", image: engagementImg, link: "/engagement" },
    { name: "Radiant Reception Revelries", image: receptionImg, link: "/reception" },
    { name: "Joyous Birthday Celebrations", image: birthdayImg, link: "/birthday" },
    { name: "Graceful Coming-of-Age Ceremonies", image: pubertyImg, link: "/puberty" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const momentsPerPage = 3;

  const indexOfLastMoment = currentPage * momentsPerPage;
  const indexOfFirstMoment = indexOfLastMoment - momentsPerPage;
  const currentMoments = moments.slice(indexOfFirstMoment, indexOfLastMoment);
  const totalPages = Math.ceil(moments.length / momentsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="portfolio"
        className="min-h-screen flex items-center justify-center py-16 px-6 bg-gradient-to-br from-pink-100 via-white to-purple-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-500"></div>
        </div>

        <RevealOnScroll>
          <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-gray-600 text-lg mb-2 uppercase tracking-wide">
                Capturing Stories, Not Just Photos
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
                CANDID MOMENTS THAT <br className="hidden sm:block" /> SPEAK LOUDER THAN WORDS
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We believe in freezing the emotion, laughter, and raw beauty of your big day with precision and passion.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-gray-900 transition">
                Let's Talk
              </button>

              {/* Stats Section */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {[ 
                  { value: "12k+", label: "Weddings Captured" },
                  { value: "15+", label: "Awards Won" },
                  { value: "5.0", label: "Average Rating" },
                  { value: "10", label: "Years Experience" },
                ].map((stat, index) => (
                  <div key={index}>
                    <p className="text-3xl font-bold text-black">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={image3}
                alt="Highlight Moment"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Moments Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800">
            Memorable Moments We Capture
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-12">
            From elegant weddings to joyful birthdays and more, we capture the beauty, emotion, and unforgettable details of life’s most cherished moments.
          </p>

          {/* Moments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {currentMoments.map((moment, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={moment.image}
                  alt={moment.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="bg-white py-4 text-lg font-semibold">
                  {moment.name}
                </div>

                {/* Explore Button */}
                {moment.link && (
                  <div className="bg-white pb-4">
                    <Link
                      to={moment.link}
                      className="inline-block mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full font-medium text-sm hover:from-pink-600 hover:to-purple-600 transition"
                    >
                      Explore {moment.name.split(' ')[moment.name.split(' ').length - 1]}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center space-x-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-6 py-3 rounded-full font-medium border transition-all duration-300 ${
                  currentPage === i + 1
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                    : 'bg-white text-black border-gray-300 hover:bg-pink-100'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
