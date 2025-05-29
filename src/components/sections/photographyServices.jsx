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
      className="min-h-screen flex items-center justify-center py-10 sm:py-16 md:py-20 lg:py-24 "
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At <span className="font-semibold">Chamochi Delpearachchi Photography</span>, 
              we are proud to be recognized as one of the best wedding photographers 
              in Sri Lanka. We specialize in offering world-class wedding photography 
              and cinematography services.
            </p>
          </div>
        </RevealOnScroll>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-16">
          {/* WEDDINGS Section */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg shadow-lg">
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
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">WEDDINGS</h2>
                <p className="text-gray-600 mb-6">
                  Wedding photography is about capturing bright, authentic moments 
                  at Chamochi Delpearachchi Photography, celebrating two lives coming 
                  together. Our team seamlessly blends into your special environment 
                  with curiosity and passion to ensure you can preserve those precious 
                  memories for a lifetime.
                </p>
                <div className="flex gap-4">
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
            </div>
          </RevealOnScroll>

          {/* PRE-SHOOTS Section */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <div className="overflow-hidden rounded-lg shadow-lg min-h-[400px] bg-gray-100">
                  {/* Placeholder for pre-shoot image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Pre-shoot Image
                  </div>
                </div>
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">PRE-SHOOTS</h2>
                <p className="text-gray-600 mb-6">
                  Traditional wedding photography is all about timeless, loving fantasies. 
                  Delpearachchi Photography captures evergreen moments inspired by beautiful 
                  and exciting experiences. With impressive creative ideas, we work with 
                  families and friends to develop amazing creative memories and cultural 
                  traditions, presenting the essence of your special day for generations to come.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/enquire"
                    className="group inline-flex items-center px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>{" "}
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* ENGAGEMENTS Section */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg shadow-lg min-h-[400px] bg-gray-100">
                {/* Placeholder for engagement image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Engagement Image
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">ENGAGEMENTS</h2>
                <p className="text-gray-600 mb-6">
                  At Chamochi Delpearachchi Photography, we believe a wedding is the 
                  dream of a new beginning — a celebration filled with timeless stories. 
                  We specialize in creating moments that celebrate fantastic backgrounds 
                  with elegance and authenticity. Your fairy-tale deserves to be captured 
                  and treasured forever!
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/enquire"
                    className="group inline-flex items-center px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>{" "}
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* PORTRAITS Section */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <div className="overflow-hidden rounded-lg shadow-lg min-h-[400px] bg-gray-100">
                  {/* Placeholder for portrait image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Portrait Image
                  </div>
                </div>
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">PORTRAITS</h2>
                <p className="text-gray-600 mb-6">
                  Capturing special moments at Chamochi Delpearachchi Photography, 
                  celebrating authentic lives, beloved generations, unique events, 
                  and family members. Our team continually focuses on the creative 
                  aspects of a successful wedding event, working across locations 
                  to capture incredible love with joy and hope for this particular journey.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/enquire"
                    className="group inline-flex items-center px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>{" "}
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* FAMILY SHOOTS Section */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg shadow-lg min-h-[400px] bg-gray-100">
                {/* Placeholder for family shoot image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Family Shoot Image
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">FAMILY SHOOTS</h2>
                <p className="text-gray-600 mb-6">
                  Understanding beauty and happiness through musical structures, 
                  framed paintings, and museums. Delpearachchi Photography brings 
                  experienced artistic vision and inspiration. You'll experience 
                  vibrant, lively photography that respects beauty, creating 
                  refreshing and rewarding memories — all smiling and delighting 
                  in the moment. These images celebrate rituals, group memories, 
                  and creative traditions, preserving the memories of your special 
                  day for generations to come.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/enquire"
                    className="group inline-flex items-center px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>{" "}
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>


            {/* PORTRAITS Section */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <div className="overflow-hidden rounded-lg shadow-lg min-h-[400px] bg-gray-100">
                  {/* Placeholder for portrait image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    FASHION Image
                  </div>
                </div>
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">FASHION SHOOT</h2>
                <p className="text-gray-600 mb-6">
                  Capturing special moments at Chamochi Delpearachchi Photography, 
                  celebrating authentic lives, beloved generations, unique events, 
                  and family members. Our team continually focuses on the creative 
                  aspects of a successful wedding event, working across locations 
                  to capture incredible love with joy and hope for this particular journey.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/enquire"
                    className="group inline-flex items-center px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>{" "}
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          
        </div>
      </div>
    </section>
  );
};

export default PhotographyServices;