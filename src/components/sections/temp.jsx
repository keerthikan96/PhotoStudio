import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

import weddingImage1 from "../../assets/Images/serviceview1.jpg";
import weddingImage2 from "../../assets/Images/serviceview2.JPG";
import weddingImage3 from "../../assets/Images/serviceview3.jpg";
import weddingImage4 from "../../assets/Images/serviceview4.jpg";

// Import new images for other sections
import preShootImage1 from "../../assets/Images/img1.jpg";
import preShootImage2 from "../../assets/Images/img2.JPG";
import engagementImage1 from "../../assets/Images/image3.jpg";
import engagementImage2 from "../../assets/Images/image4.jpg";
import portraitImage1 from "../../assets/Images/image5.jpg";
import portraitImage2 from "../../assets/Images/image6.jpg";
import familyImage1 from "../../assets/Images/image7.jpg";
import familyImage2 from "../../assets/Images/image8.jpg";
import fashionImage1 from "../../assets/Images/image9.jpg";
import fashionImage2 from "../../assets/Images/image10.jpg";
import serviceView5 from "../../assets/Images/serviceview5.jpg";

const PhotographyServices = () => {
  const [currentWeddingIndex, setCurrentWeddingIndex] = useState(0);
  const [currentPreShootIndex, setCurrentPreShootIndex] = useState(0);
  const [currentEngagementIndex, setCurrentEngagementIndex] = useState(0);
  const [currentPortraitIndex, setCurrentPortraitIndex] = useState(0);
  const [currentFamilyIndex, setCurrentFamilyIndex] = useState(0);
  const [currentFashionIndex, setCurrentFashionIndex] = useState(0);

  const weddingImages = [
    weddingImage1,
    weddingImage2,
    weddingImage3,
    weddingImage4,
  ];
  const preShootImages = [preShootImage1, preShootImage2, serviceView5];
  const engagementImages = [engagementImage1, engagementImage2];
  const portraitImages = [portraitImage1, portraitImage2];
  const familyImages = [familyImage1, familyImage2];
  const fashionImages = [fashionImage1, fashionImage2];

  useEffect(() => {
    // Set up intervals for each image section
    const weddingInterval = setInterval(() => {
      setCurrentWeddingIndex(
        (prevIndex) => (prevIndex + 1) % weddingImages.length
      );
    }, 4000);

    const preShootInterval = setInterval(() => {
      setCurrentPreShootIndex(
        (prevIndex) => (prevIndex + 1) % preShootImages.length
      );
    }, 4300);

    const engagementInterval = setInterval(() => {
      setCurrentEngagementIndex(
        (prevIndex) => (prevIndex + 1) % engagementImages.length
      );
    }, 4500);

    const portraitInterval = setInterval(() => {
      setCurrentPortraitIndex(
        (prevIndex) => (prevIndex + 1) % portraitImages.length
      );
    }, 4700);

    const familyInterval = setInterval(() => {
      setCurrentFamilyIndex(
        (prevIndex) => (prevIndex + 1) % familyImages.length
      );
    }, 4200);

    const fashionInterval = setInterval(() => {
      setCurrentFashionIndex(
        (prevIndex) => (prevIndex + 1) % fashionImages.length
      );
    }, 4600);

    // Clear all intervals on unmount
    return () => {
      clearInterval(weddingInterval);
      clearInterval(preShootInterval);
      clearInterval(engagementInterval);
      clearInterval(portraitInterval);
      clearInterval(familyInterval);
      clearInterval(fashionInterval);
    };
  }, [
    weddingImages.length,
    preShootImages.length,
    engagementImages.length,
    portraitImages.length,
    familyImages.length,
    fashionImages.length,
  ]);
  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At{" "}
              <span className="font-bold text-black">
                Chamochi Delpearachchi Photography
              </span>
              , we craft visual stories that transcend time. Each frame is
              meticulously composed to capture the essence of your most precious
              moments.
            </p>
          </div>
        </RevealOnScroll>
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {" "}
          {/* WEDDINGS Card */}
          <RevealOnScroll>
            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
              <div className="relative h-96 overflow-hidden">
                {weddingImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentWeddingIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Wedding Photography ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-4">
                  <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                    WEDDINGS
                  </h2>
                  <p className="text-gray-200 mb-6 leading-relaxed opacity-90">
                    Capturing authentic moments where two lives become one. Our
                    team seamlessly documents your love story with artistic
                    vision and heartfelt passion.
                  </p>
                  <div className="flex gap-3">
                    <Link
                      to="/enquire"
                      className="group/btn inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold"
                    >
                      Enquire Now
                      <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </Link>
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-semibold"
                    >
                      Call Us
                      <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>{" "}
          {/* PRE-SHOOTS Card */}
          <RevealOnScroll>
            <div className="group relative bg-black rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-l from-white/60 to-transparent z-10"></div>
              <div className="relative h-96 overflow-hidden">
                {preShootImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentPreShootIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Pre-shoot Photography ${index + 1}`}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-4">
                  <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                    PRE-SHOOTS
                  </h2>
                  <p className="text-gray-200 mb-6 leading-relaxed opacity-90">
                    Timeless love stories begin before the big day. We create
                    magical moments that showcase your unique bond and personal
                    style.
                  </p>
                  <Link
                    to="/enquire"
                    className="group/btn inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold w-fit"
                  >
                    Enquire Now
                    <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>{" "}
          {/* ENGAGEMENTS Card */}
          <RevealOnScroll>
            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
              <div className="relative h-96 overflow-hidden">
                {engagementImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentEngagementIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Engagement Photography ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-4">
                  <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                    ENGAGEMENTS
                  </h2>
                  <p className="text-gray-200 mb-6 leading-relaxed opacity-90">
                    A celebration of new beginnings. We capture the joy and
                    anticipation of your engagement with elegance and timeless
                    beauty.
                  </p>
                  <Link
                    to="/enquire"
                    className="group/btn inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold w-fit"
                  >
                    Enquire Now
                    <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>{" "}
        </div>
        {/* Secondary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* PORTRAITS Card */}
          <RevealOnScroll>
            <div className="group relative bg-black rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="relative h-80 overflow-hidden">
                {portraitImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentPortraitIndex
                        ? "opacity-70 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Portrait Photography ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  PORTRAITS
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Individual stories told through artistic vision and authentic
                  expression.
                </p>
                <Link
                  to="/enquire"
                  className="group/btn inline-flex items-center text-white font-semibold hover:text-gray-300 transition-all duration-300 w-fit"
                >
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          {/* FAMILY SHOOTS Card */}
          <RevealOnScroll>
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="relative h-80 overflow-hidden">
                {familyImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentFamilyIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Family Photography ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  FAMILY SHOOTS
                </h3>
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                  Generational bonds captured with warmth, joy, and timeless
                  elegance.
                </p>
                <Link
                  to="/enquire"
                  className="group/btn inline-flex items-center text-white font-semibold hover:text-gray-300 transition-all duration-300 w-fit"
                >
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          {/* FASHION SHOOT Card */}
          <RevealOnScroll>
            <div className="group relative bg-black rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] md:col-span-2 lg:col-span-1">
              <div className="relative h-80 overflow-hidden">
                {fashionImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentFashionIndex
                        ? "opacity-70 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Fashion Photography ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  FASHION SHOOT
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  High-fashion meets artistic storytelling in every captivating
                  frame.
                </p>
                <Link
                  to="/enquire"
                  className="group/btn inline-flex items-center text-white font-semibold hover:text-gray-300 transition-all duration-300 w-fit"
                >
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        {/* Call to Action */}
        <RevealOnScroll>
          <div className="text-center mt-20 bg-black rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Magic?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary
              together. Every moment deserves to be captured with artistry and
              passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/enquire"
                className="group inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 font-bold text-lg"
              >
                Start Your Journey
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold text-lg"
              >
                Get in Touch
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </RevealOnScroll>{" "}
      </div>
    </section>
  );
};

export default PhotographyServices;
