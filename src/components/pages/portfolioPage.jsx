import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

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
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";

import bg3 from '../../assets/Images/bg-3.jpg';

const PortfolioPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;
  const gridRef = useRef(null);

  // Portfolio items array with categories
  const portfolioItems = [
    {
      id: 1,
      image: image1,
      category: "Luxury Wedding Photography in Sri Lanka",
      type: "Cinematic",
    },
    {
      id: 2,
      image: image2,
      category: "Wedding Photography Packages",
      type: "Artistic",
    },
    {
      id: 3,
      image: image3,
      category: "Top Wedding Outdoor Photography",
      type: "Traditional",
    },
    {
      id: 4,
      image: image4,
      category: "Candid Wedding Photography",
      type: "Traditional",
    },
    {
      id: 5,
      image: image5,
      category: "Best Budget Wedding Photography in Sri Lanka",
      type: "Candid",
    },
    {
      id: 6,
      image: image6,
      category: "South Indian Wedding Photography Studio",
      type: "Cinematic",
    },
    {
      id: 7,
      image: image7,
      category: "Pre-Wedding Photography in Scenic Locations",
      type: "Artistic",
    },
    {
      id: 8,
      image: image8,
      category: "Brahmin Wedding Photography in Sri Lanka",
      type: "Candid",
    },
    {
      id: 9,
      image: image9,
      category: "Outdoor Photography for Weddings",
      type: "Traditional",
    },
    {
      id: 10,
      image: image10,
      category: "Luxury Wedding Photography in Sri Lanka",
      type: "Candid",
    },
    {
      id: 11,
      image: image1,
      category: "Evening Reception Photography",
      type: "Candid",
    },
    {
      id: 12,
      image: image2,
      category: "Traditional Wedding Photography",
      type: "Cinematic",
    },
    {
      id: 13,
      image: image3,
      category: "Celebrity Style Wedding Photography",
      type: "Artistic",
    },
    {
      id: 14,
      image: image4,
      category: "Destination Wedding Photography",
      type: "Candid",
    },
    {
      id: 15,
      image: image5,
      category: "Intimate Wedding Photography Package",
      type: "Candid",
    },
    {
      id: 16,
      image: image6,
      category: "Post-Wedding Photography Session",
      type: "Traditional",
    },
    {
      id: 17,
      image: image7,
      category: "Engagement Photography Package",
      type: "Traditional",
    },
    {
      id: 18,
      image: image8,
      category: "Wedding Portrait Photography",
      type: "Candid",
    },
    {
      id: 19,
      image: image9,
      category: "Artistic Wedding Photography in Sri Lanka",
      type: "Candid",
    },
    {
      id: 20,
      image: image10,
      category: "Cinematic Wedding Photography",
      type: "Cinematic",
    },
    {
      id: 21,
      image: image1,
      category: "Full Day Wedding Coverage",
      type: "Candid",
    },
    {
      id: 22,
      image: image2,
      category: "Half Day Wedding Coverage",
      type: "Artistic",
    },
    {
      id: 23,
      image: image3,
      category: "Wedding Videography and Photography",
      type: "Artistic",
    },
    {
      id: 24,
      image: image4,
      category: "Bridal Photography Sessions",
      type: "Candid",
    },
  ];

  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = portfolioItems.slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  const totalPages = Math.ceil(portfolioItems.length / imagesPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the page when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Modern Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${bg3})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
        
        {/* Floating elements for modern touch */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-6 tracking-tight">
            <TextTransition text="PORTFOLIO" />
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed opacity-90">
            Capturing life&apos;s most precious moments with passion, artistry, and timeless elegance
          </p>
          <div className="mt-12">
            <button className="group relative px-8 py-4 bg-white text-black font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-500 overflow-hidden">
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      {/* Main Content wrapped in PagesUI */}
      <PagesUI>
        {/* Modern Introduction Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealOnScroll>
                <div className="space-y-8">
                  <div>
                    <span className="inline-block px-3 py-1 bg-gray-900 text-white text-sm font-medium tracking-wider uppercase rounded-full mb-4">
                      Our Story
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                      <TextTransition text="The Best Wedding Candid Photographers in Colombo" />
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-gray-700">
                      Stories are what shape us — often without us even realizing it. Each moment, each memory, 
                      becomes part of a bigger story we are continuously building. That is why photography holds 
                      such profound importance — it captures not just moments, but the very essence of life&apos;s story.
                    </p>
                    
                    <p className="text-gray-600">
                      At <span className="font-semibold text-gray-900">Chamodh Delpearachchi Photography</span>, 
                      we don&apos;t just take pictures — we preserve stories that live on for generations. Every image 
                      tells a tale of love, joy, and the beautiful connections that bind us together.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group px-8 py-4 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-all duration-300">
                      Book a Session
                    </button>
                    <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300">
                      View Our Process
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl transform rotate-3"></div>
                  <img 
                    src={image1} 
                    alt="Wedding Photography" 
                    className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Weddings Captured</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* Stories Through Pictures Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RevealOnScroll>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                <TextTransition text="Stories through the picture" />
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                When it comes to capturing the best shots at your wedding, photographers play an important role. 
                We specialize in finding the perfect moments that tell your unique love story.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Modern Portfolio Gallery Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                  <TextTransition text="Our Portfolio" />
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Every wedding tells a unique story. Browse through our collection of captured moments 
                  that showcase the artistry and emotion of each celebration.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-8 space-y-8">
                  <RevealOnScroll>
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <h3 className="text-xl font-light text-gray-900 mb-4">
                        <TextTransition text="Pictures = Stories" />
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        It is often said that stories are what shape us. We are here to shape and preserve 
                        your moments as they unfold, creating timeless memories that last forever.
                      </p>
                      <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300">
                        Book Your Session
                      </button>
                    </div>
                  </RevealOnScroll>
                  
                  <RevealOnScroll>
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-gray-900">Photography Styles</h4>
                      <div className="space-y-2">
                        {['Candid', 'Traditional', 'Artistic', 'Outdoor', 'Cinematic'].map((style) => (
                          <button key={style} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>

              {/* Gallery */}
              <div className="lg:col-span-9">
                <div
                  ref={gridRef}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {currentImages.map((item, index) => (
                    <RevealOnScroll
                      key={item.id}
                      threshold={0.1}
                      delay={index % 3 === 0 ? 0 : index % 3 === 1 ? 0.1 : 0.2}
                    >
                      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="aspect-[4/5] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.category}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="text-white font-medium text-sm leading-tight mb-2">
                                {item.category}
                              </h3>
                              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                                {item.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Card content */}
                        <div className="p-6">
                          <h3 className="text-gray-900 font-medium text-sm leading-tight group-hover:text-gray-600 transition-colors">
                            {item.category}
                          </h3>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>

                {/* Modern Pagination */}
                <div className="flex justify-center mt-16">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </button>

                    <div className="flex space-x-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
                        if (number <= 3 || number === currentPage || number === totalPages) {
                          return (
                            <button
                              key={number}
                              onClick={() => paginate(number)}
                              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                                currentPage === number
                                  ? "bg-gray-900 text-white shadow-lg"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {number}
                            </button>
                          );
                        } else if (number === 4 && currentPage > 4 && totalPages > 5) {
                          return (
                            <span key="ellipsis" className="w-10 h-10 flex items-center justify-center text-gray-400">
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>

                    <button
                      onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Next
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Stories Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                  Pictures + Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Every wedding has its own story. Here are some of the beautiful moments 
                  we&apos;ve had the privilege to capture.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <RevealOnScroll>
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      At our studio, we believe that wedding photography isn&apos;t just about taking pictures—it&apos;s about 
                      telling stories. Every image we capture is a chapter in your unique love story, carefully 
                      preserved for generations to come.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Professional Excellence</h4>
                          <p className="text-gray-600 text-sm">Years of experience in capturing perfect moments</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Story-Driven Approach</h4>
                          <p className="text-gray-600 text-sm">Every photo tells part of your unique love story</p>
                        </div>
                      </div>
                    </div>
                    <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300">
                      Read More Stories
                    </button>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={image5}
                          alt="Wedding Story"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 text-sm">
                          Anusha and Vikram&apos;s Beachside Wedding
                        </h3>
                        <p className="text-gray-600 text-xs mt-1">Captured in Galle</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image7}
                          alt="Wedding Story"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 text-sm">
                          Pre-Wedding Session
                        </h3>
                        <p className="text-gray-600 text-xs mt-1">Kandy Hills</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 pt-12">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image6}
                          alt="Wedding Story"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 text-sm">
                          Priya and Rahul&apos;s Traditional Celebration
                        </h3>
                        <p className="text-gray-600 text-xs mt-1">Temple Wedding</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={image8}
                          alt="Wedding Story"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 text-sm">
                          Evening Reception
                        </h3>
                        <p className="text-gray-600 text-xs mt-1">Colombo City</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RevealOnScroll>
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                Ready to Create Your Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s capture the magic of your special day together. From intimate ceremonies 
                to grand celebrations, we&apos;re here to preserve your precious moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-gray-900 font-medium tracking-wide rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Book Your Session
                </button>
                <button className="px-10 py-4 border-2 border-white text-white font-medium tracking-wide rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Packages
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </PagesUI>
    </div>
  );
};

export default PortfolioPage;
