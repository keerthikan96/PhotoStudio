import React, { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

// Import the images from assets
import image1 from "../../assets/Images/image1.jpg";
import image2 from "../../assets/Images/image2.jpg";
import image3 from "../../assets/Images/image3.jpg";
import image4 from "../../assets/Images/image4.jpg";
import image5 from "../../assets/Images/image5.jpg";
import image6 from "../../assets/Images/image6.jpg";
import image7 from "../../assets/Images/image7.jpg";
import image8 from "../../assets/Images/image8.jpg";
import image9 from "../../assets/Images/image9.jpg";
import image10 from "../../assets/Images/image10.jpg";

const PortfolioPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  // Portfolio items array with categories
  const portfolioItems = [
    { id: 1, image: image1, category: "Luxury Wedding Photography in Chennai", price: "₹55,000" },
    { id: 2, image: image2, category: "Wedding Photography Packages", price: "₹45,000" },
    { id: 3, image: image3, category: "Top Wedding Outdoor Photography", price: "₹30,000" },
    { id: 4, image: image4, category: "Candid Wedding Photography", price: "₹25,000" },
    { id: 5, image: image5, category: "Best Budget Wedding Photography in Chennai", price: "₹20,000" },
    { id: 6, image: image6, category: "South Indian Wedding Photography Studio", price: "₹35,000" },
    { id: 7, image: image7, category: "Pre-Wedding Photography in Scenic Locations", price: "₹15,000" },
    { id: 8, image: image8, category: "Brahmin Wedding Photography in Chennai", price: "₹28,000" },
    { id: 9, image: image9, category: "Outdoor Photography for Weddings", price: "₹22,000" },
    { id: 10, image: image10, category: "Luxury Wedding Photography in Chennai", price: "₹45,000" },
    { id: 11, image: image1, category: "Evening Reception Photography", price: "₹18,000" },
    { id: 12, image: image2, category: "Traditional Wedding Photography", price: "₹30,000" },
    { id: 13, image: image3, category: "Celebrity Style Wedding Photography", price: "₹65,000" },
    { id: 14, image: image4, category: "Destination Wedding Photography", price: "₹80,000" },
    { id: 15, image: image5, category: "Intimate Wedding Photography Package", price: "₹25,000" },
    { id: 16, image: image6, category: "Post-Wedding Photography Session", price: "₹15,000" },
    { id: 17, image: image7, category: "Engagement Photography Package", price: "₹20,000" },
    { id: 18, image: image8, category: "Wedding Portrait Photography", price: "₹18,000" },
    { id: 19, image: image9, category: "Artistic Wedding Photography in Chennai", price: "₹40,000" },
    { id: 20, image: image10, category: "Cinematic Wedding Photography", price: "₹50,000" },
    { id: 21, image: image1, category: "Full Day Wedding Coverage", price: "₹35,000" },
    { id: 22, image: image2, category: "Half Day Wedding Coverage", price: "₹22,000" },
    { id: 23, image: image3, category: "Wedding Videography and Photography", price: "₹60,000" },
    { id: 24, image: image4, category: "Bridal Photography Sessions", price: "₹18,000" },
  ];

  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = portfolioItems.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(portfolioItems.length / imagesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-[#f8f9fa] mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 text-gray-900">
        {/* Hero Section */}
        <div className="bg-gray-800 text-white py-6 sm:py-8 md:py-10 text-center rounded-lg mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">The Best Wedding Candid Photographers in Chennai</h1>
          <p className="text-xs sm:text-sm mt-2">Home / Portfolio</p>
        </div>

        {/* Introduction Text */}
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto my-6 sm:my-8 md:my-10 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              Looking for the best wedding photographers in Chennai? Our team specializes in capturing candid moments that tell your unique love story. We believe that every wedding is a collection of heartfelt emotions and personal connections that deserve to be beautifully preserved.
            </p>
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              With years of experience in the wedding industry, our photographers have developed a keen eye for those special moments that might otherwise go unnoticed. From the nervous anticipation before the ceremony to the joyful celebrations on the dance floor, we capture it all with authenticity and artistic vision.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Browse through our portfolio below to see our work and discover why we're considered among the finest wedding photographers in Chennai. Each image represents our commitment to excellence, creativity, and emotional storytelling.
            </p>
          </div>
        </RevealOnScroll>

        {/* Portfolio Section Title */}
        <RevealOnScroll>
          <div className="text-center my-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Stories through the pictures</h2>
            <p className="text-gray-600 mt-2">A collection of our finest wedding photography work</p>
          </div>
        </RevealOnScroll>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {currentImages.map((item) => (
            <RevealOnScroll key={item.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.category}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {item.price && (
                    <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
                      {item.price}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-center">{item.category}</h3>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-8">
          <nav className="inline-flex rounded-md shadow">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-l-md border border-gray-300 ${
                currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              &laquo;
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
              // Show limited page numbers with ellipsis
              if (
                number === 1 ||
                number === totalPages ||
                (number >= currentPage - 1 && number <= currentPage + 1)
              ) {
                return (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 border border-gray-300 ${
                      currentPage === number
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {number}
                  </button>
                );
              } else if (
                (number === currentPage - 2 && currentPage > 3) ||
                (number === currentPage + 2 && currentPage < totalPages - 2)
              ) {
                return (
                  <button
                    key={number}
                    className="px-3 py-1 border border-gray-300 bg-white text-gray-700"
                    disabled
                  >
                    ...
                  </button>
                );
              }
              return null;
            })}
            
            <button
              onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-r-md border border-gray-300 ${
                currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              &raquo;
            </button>
          </nav>
        </div>

        {/* Stories Section */}
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto my-12 bg-white shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-bold p-4 sm:p-6 border-b border-gray-200">Pictures + Stories</h2>
            
            <div className="p-4 sm:p-6">
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                At our studio, we believe that wedding photography isn't just about taking pictures—it's about telling stories. Every image we capture is a chapter in your unique love story, carefully preserved for generations to come.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <img src={image5} alt="Wedding Story" className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <h3 className="text-sm font-medium">Anusha and Vikram's Beachside Wedding</h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <img src={image6} alt="Wedding Story" className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <h3 className="text-sm font-medium">Priya and Rahul's Traditional Celebration</h3>
                  </div>
                </div>
              </div>
              
              <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition duration-300">
                Read More Stories
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default PortfolioPage;