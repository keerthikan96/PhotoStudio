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
  
  const weddingImages = [weddingImage1, weddingImage2, weddingImage3, weddingImage4];
  const preShootImages = [preShootImage1, preShootImage2, serviceView5];
  const engagementImages = [engagementImage1, engagementImage2];
  const portraitImages = [portraitImage1, portraitImage2];
  const familyImages = [familyImage1, familyImage2];
  const fashionImages = [fashionImage1, fashionImage2];

  useEffect(() => {
    // Set up intervals for each image section
    const weddingInterval = setInterval(() => {
      setCurrentWeddingIndex((prevIndex) => (prevIndex + 1) % weddingImages.length);
    }, 4000);
    
    const preShootInterval = setInterval(() => {
      setCurrentPreShootIndex((prevIndex) => (prevIndex + 1) % preShootImages.length);
    }, 4300);
    
    const engagementInterval = setInterval(() => {
      setCurrentEngagementIndex((prevIndex) => (prevIndex + 1) % engagementImages.length);
    }, 4500);
    
    const portraitInterval = setInterval(() => {
      setCurrentPortraitIndex((prevIndex) => (prevIndex + 1) % portraitImages.length);
    }, 4700);
    
    const familyInterval = setInterval(() => {
      setCurrentFamilyIndex((prevIndex) => (prevIndex + 1) % familyImages.length);
    }, 4200);
    
    const fashionInterval = setInterval(() => {
      setCurrentFashionIndex((prevIndex) => (prevIndex + 1) % fashionImages.length);
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
  }, [weddingImages.length, preShootImages.length, engagementImages.length, 
      portraitImages.length, familyImages.length, fashionImages.length]);

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
                  {weddingImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentWeddingIndex ? "opacity-100" : "opacity-0"
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
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative w-full h-full min-h-[400px]">
                    {preShootImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          index === currentPreShootIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Pre-shoot Photography ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
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
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative w-full h-full min-h-[400px]">
                  {engagementImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentEngagementIndex ? "opacity-100" : "opacity-0"
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
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative w-full h-full min-h-[400px]">
                    {portraitImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          index === currentPortraitIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Portrait Photography ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
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
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative w-full h-full min-h-[400px]">
                  {familyImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentFamilyIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Family Photography ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">FAMILY SHOOTS</h2>
                <p className="text-gray-600 mb-6">
                  Understanding beauty and happiness through musical structures, 
                  framed paintings, and museums. Delpearachchi Photography brings 
                  experienced artistic vision and inspiration. You&apos;ll experience 
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

          {/* FASHION SHOOT Section */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative w-full h-full min-h-[400px]">
                    {fashionImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          index === currentFashionIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Fashion Photography ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
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