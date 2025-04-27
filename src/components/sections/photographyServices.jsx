import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

import weddingImage1 from "../../assets/Images/serviceview1.jpg";
import weddingImage2 from "../../assets/Images/serviceview2.JPG";
import weddingImage3 from "../../assets/Images/serviceview3.jpg";
import weddingImage4 from "../../assets/Images/serviceview4.jpg";

const PhotographyServices = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [weddingImage1, weddingImage2, weddingImage3, weddingImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-10 sm:py-16 md:py-20 lg:py-24 mt-20"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Side - Image Slideshow with Transitions */}
          <RevealOnScroll>
            <div className="overflow-hidden rounded-lg shadow-lg relative h-full">
              {/* Image Slideshow */}
              <div className="relative w-full h-full min-h-[400px]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
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
            </div>
          </RevealOnScroll>

          {/* Right Side - Text Content */}
          <RevealOnScroll>
            <div className="flex flex-col justify-center h-full">
              <div className="text-left mb-12">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-md mb-4">
                  Wedding Photography
                </span>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  Services
                </h2>
              </div>

              <p className="text-gray-600 mb-6">
                {/* At Focuz Studios, we are proud to be known as the best wedding
                photographer in Sri Lanka. At{" "}
                <span className="font-semibold">Focuz Studios</span>, we proudly
                stand as the{" "}
                <span className="font-semibold">
                  best wedding photographer in Sri Lanka
                </span>
                , offering world-class wedding photography and cinematography
                services. We have captured magical moments from weddings both
                nationally and internationally, covering destinations like
                Paris, London, Australia, Singapore, Sri Lanka, and Thailand.  */}
                At{" "}
                <span className="font-semibold">
                  Chamodh Delpearachchi Photography
                </span>
                , we are proud to be recognized as one of the best wedding
                photographers in Sri Lanka. We specialize in offering
                world-class{" "}
                <span className="font-semibold">wedding photography</span> and
                cinematography services, capturing the magic of love stories
                across the island and beyond. Our portfolio includes beautiful
                moments from weddings held not only across Sri Lanka but also in
                international destinations like Paris, London, Australia,
                Singapore, and Thailand
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/enquire"
                  className="group inline-flex items-center px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                >
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>{" "}
                  Enquire Now
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                >
                  Make a call{" "}
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Service Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {/* Candid/Artistic Photography */}
          <RevealOnScroll>
            <div className="text-center p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700 transition-all duration-300 transform group-hover:rotate-12"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Candid/Artistic Photography
              </h3>
              <p className="text-gray-600">
                Candid photography is not just about capturing moments — at
                Chamodh Delpearachchi Photography, it's about celebrating true
                authenticity. We believe in preserving natural smiles, unposed
                emotions, and genuine interactions. Our team seamlessly blends
                into your celebrations, approaches each moment with creativity,
                and works passionately to ensure you can relive those precious
                memories for a lifetime.
              </p>
            </div>
          </RevealOnScroll>

          {/* Traditional Photography */}
          <RevealOnScroll>
            <div className="text-center p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700 transition-all duration-300 transform group-hover:rotate-12"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Traditional Photography
              </h3>
              <p className="text-gray-600">
                Traditional wedding photography is all about timeless, formal
                portraits. At Chamodh Delpearachchi Photography, we ensure every
                posed moment is captured beautifully and authentically. You'll
                experience classic, vibrant color photographs where couples,
                families, and friends look toward the camera — all smiling and
                cherishing the moment. These images celebrate rituals, group
                memories, and cultural traditions, preserving the essence of
                your special day for generations to come.
              </p>
            </div>
          </RevealOnScroll>

          {/* Wedding Film */}
          <RevealOnScroll>
            <div className="text-center p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700 transition-all duration-300 transform group-hover:rotate-12"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Wedding Film</h3>
              <p className="text-gray-600">
                At Chamodh Delpearachchi Photography, we believe a wedding is
                like a beautiful movie — a collection of heartfelt moments woven
                into one timeless story. We specialize in creating cinematic
                wedding films that capture emotions, traditions, and love
                stories with elegance and authenticity. After all, your
                fairy-tale deserves to be captured and treasured forever!
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default PhotographyServices;
