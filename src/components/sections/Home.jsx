import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { HiCamera, HiHeart, HiStar, HiPlay } from "react-icons/hi";

// Hero images
import image1 from "../../assets/Images/img1.jpg";
import image2 from "../../assets/Images/img2.JPG";
import image3 from "../../assets/Images/img3.jpg";
import image4 from "../../assets/Images/img4.jpg";
import image5 from "../../assets/Images/img5.jpg";

// Portfolio showcase images
import portfolio1 from "../../assets/Images/image1.jpg";
import portfolio2 from "../../assets/Images/image2.jpg";
import portfolio3 from "../../assets/Images/image3.jpg";
import portfolio4 from "../../assets/Images/image4.jpg";
import portfolio5 from "../../assets/Images/image5.jpg";
import portfolio6 from "../../assets/Images/image6.jpg";
import portfolio7 from "../../assets/Images/image7.jpg";
import portfolio8 from "../../assets/Images/image8.jpg";
import portfolio9 from "../../assets/Images/image9.jpg";
import portfolio10 from "../../assets/Images/image10.jpg";

// Featured portfolio images
import pt1 from "../../assets/Images/pt-1.jpg";
import pt2 from "../../assets/Images/pt-2.jpg";
import pt3 from "../../assets/Images/pt-3.jpg";
import pt4 from "../../assets/Images/pt-4.jpg";
import pt5 from "../../assets/Images/pt-5.jpg";
import pt6 from "../../assets/Images/pt-6.jpg";
import pt7 from "../../assets/Images/pt-7.jpg";

// Background images for sections
import bg1 from "../../assets/Images/bg-1.jpg";
import bg2 from "../../assets/Images/bg-2.jpg";
import bg3 from "../../assets/Images/bg-3.jpg";
import bg4 from "../../assets/Images/bg-4.jpg";
import bg5 from "../../assets/Images/bg-5.jpg";
import bg6 from "../../assets/Images/bg-6.jpg";

// Service images
import serviceImg1 from "../../assets/Images/serviceview1.jpg";
import serviceImg2 from "../../assets/Images/serviceview2.jpg";
import serviceImg3 from "../../assets/Images/serviceview3.jpg";
import serviceImg4 from "../../assets/Images/serviceview4.jpg";
import serviceImg5 from "../../assets/Images/serviceview5.jpg";

// Profile images
import chamodProfile from "../../assets/Images/chamodProfile.jpg";
import chamodMain from "../../assets/Images/chamodMain.jpg";

export const Home = () => {
  // Debug: Log imported images to console
  console.log('Hero Images:', { image1, image2, image3, image4, image5 });
  console.log('Image paths:', [image1, image2, image3, image4, image5]);
  
  // Hero images array with better debugging
  const heroImages = [
    { src: image1, name: 'img1.jpg' },
    { src: image2, name: 'img2.JPG' },
    { src: image3, name: 'img3.jpg' },
    { src: image4, name: 'img4.jpg' },
    { src: image5, name: 'img5.jpg' }
  ];
  
  console.log('Hero images array:', heroImages);
  
  return (
    <>      {/* Hero Section with Full-Screen Image Slider */}
      <section className="relative h-screen overflow-hidden bg-gray-900 z-10">        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="w-full h-full relative z-20"
          onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
          onSlideChange={() => console.log('Slide changed')}
        >
          {heroImages.map((imageObj, index) => {
            console.log(`Rendering slide ${index + 1}:`, imageObj);
            return (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  {imageObj.src ? (
                    <img
                      src={imageObj.src}
                      alt={`Photography Slide ${index + 1} - ${imageObj.name}`}
                      className="w-full h-full object-cover"
                      onLoad={(e) => {
                        console.log(`✅ Image ${index + 1} (${imageObj.name}) loaded successfully`);
                        console.log('Image element:', e.target);
                        console.log('Image dimensions:', e.target.naturalWidth, 'x', e.target.naturalHeight);
                      }}
                      onError={(e) => {
                        console.error(`❌ Image ${index + 1} (${imageObj.name}) failed to load`);
                        console.error('Error details:', e);
                        console.error('Image src:', e.target.src);
                      }}                      style={{ 
                        display: 'block',
                        minHeight: '100vh',
                        backgroundColor: '#1f2937', // Fallback background
                        position: 'relative',
                        zIndex: 1
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <p className="text-white text-xl">Image {index + 1} not found</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <RevealOnScroll>
            <div className="text-center text-white px-4 max-w-5xl">              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
                  Professional Photography
                </span>
              </div><h1 className="text-4xl md:text-6xl lg:text-8xl font-extralight mb-6 tracking-tight leading-tight">
                Capturing Life&apos;s
                <span className="block font-light italic text-gray-200">Beautiful Moments</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed opacity-90">
                Where every frame tells a story, and every moment becomes a timeless memory
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="group relative px-8 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <HiHeart className="mr-2" />
                    Book Your Session
                  </span>
                </Link>
                <Link
                  to="/portfolio"
                  className="group relative px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <HiPlay className="mr-2" />
                    View Our Work
                  </span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>        {/* Custom Navigation */}
        <div className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-30">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm mb-2 tracking-wider">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Welcome Section with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Welcome to CD Photography
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Where passion meets artistry, creating timeless memories that last forever
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-gray-900">
                    Your Story, Our Artistry
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At CD Photography, we believe every moment has a story worth telling. 
                    Our passion is to capture the authentic emotions, intimate connections, 
                    and beautiful details that make your special day uniquely yours.
                  </p>
                </div>
                
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Weddings Captured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 flex items-center">
                      4.9 <HiStar className="ml-1 text-yellow-400" />
                    </div>
                    <div className="text-sm text-gray-600">Client Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">8+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  Learn More About Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img
                      src={portfolio1}
                      alt="Wedding Photography"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    <img
                      src={portfolio3}
                      alt="Portrait Photography"
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img
                      src={portfolio2}
                      alt="Engagement Photography"
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                    <img
                      src={portfolio4}
                      alt="Event Photography"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                
                {/* Floating photographer card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <img
                      src={chamodProfile}
                      alt="Chamodh Delpearachchi"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">Chamodh Delpearachchi</h4>
                      <p className="text-sm text-gray-600">Lead Photographer</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Services Preview with Background Image */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                Our Photography Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From intimate ceremonies to grand celebrations, we capture every precious moment
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealOnScroll delay={0.1}>
              <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-opacity-20 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={serviceImg1}
                    alt="Wedding Photography"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Wedding Photography</h3>
                  <p className="text-gray-300 mb-6">
                    Capturing the magic and emotion of your special day with artistic precision
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-opacity-20 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={serviceImg2}
                    alt="Portrait Photography"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Portrait Sessions</h3>
                  <p className="text-gray-300 mb-6">
                    Professional portraits that capture your personality and natural beauty
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="group relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-opacity-20 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={serviceImg3}
                    alt="Event Photography"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Event Photography</h3>
                  <p className="text-gray-300 mb-6">
                    Documenting your celebrations and special moments with creative flair
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Recent Work
              </h2>              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A glimpse into the beautiful moments we&apos;ve captured recently
              </p>
            </div>
          </RevealOnScroll>          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8].map((image, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300"
              >
                View Full Portfolio
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </RevealOnScroll>        </div>
      </section>

      {/* Featured Work Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                Featured Photography
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A curated selection of our most beloved captures that tell extraordinary stories
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[pt1, pt2, pt3, pt4, pt5, pt6].map((image, index) => (
              <RevealOnScroll key={index} delay={index * 0.15}>
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={image}
                      alt={`Featured Work ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {index === 0 && "Wedding Elegance"}
                      {index === 1 && "Portrait Perfection"}
                      {index === 2 && "Love Stories"}
                      {index === 3 && "Candid Moments"}
                      {index === 4 && "Artistic Vision"}
                      {index === 5 && "Timeless Beauty"}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {index === 0 && "Capturing the magic of your special day with timeless elegance"}
                      {index === 1 && "Professional portraits that reveal your authentic self"}
                      {index === 2 && "Documenting the beautiful journey of love and connection"}
                      {index === 3 && "Natural, unposed moments that speak from the heart"}
                      {index === 4 && "Creative compositions that transform memories into art"}
                      {index === 5 && "Classic photography that transcends trends and time"}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Complete Photography Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From intimate portraits to grand celebrations, we offer comprehensive photography solutions
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[serviceImg1, serviceImg2, serviceImg3, serviceImg4, serviceImg5].map((image, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={image}
                      alt={`Service ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">
                      {index === 0 && "Wedding Photography"}
                      {index === 1 && "Portrait Sessions"}
                      {index === 2 && "Event Coverage"}
                      {index === 3 && "Engagement Shoots"}
                      {index === 4 && "Family Photography"}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {index === 0 && "Complete wedding day coverage"}
                      {index === 1 && "Professional portrait sessions"}
                      {index === 2 && "Corporate and social events"}
                      {index === 3 && "Romantic couple photography"}
                      {index === 4 && "Beautiful family moments"}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Photographer Spotlight */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${bg4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src={chamodMain}
                    alt="Chamodh Delpearachchi - Lead Photographer"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-white bg-opacity-20 backdrop-blur-sm rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white bg-opacity-10 backdrop-blur-sm rounded-full"></div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="text-white space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-light mb-6">
                    Meet Chamodh Delpearachchi
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    With over 8 years of experience capturing life&apos;s most precious moments, 
                    Chamodh brings an artistic eye and passionate heart to every photography session.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <HiCamera className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Artistic Vision</h3>
                      <p className="text-gray-300">
                        Every photograph is crafted with meticulous attention to detail, 
                        ensuring each image tells a unique and compelling story.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <HiHeart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Passionate Approach</h3>
                      <p className="text-gray-300">
                        Photography isn&apos;t just a profession—it&apos;s a passion that drives 
                        the pursuit of perfection in every frame captured.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <HiStar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Client Excellence</h3>
                      <p className="text-gray-300">
                        Committed to exceeding expectations with personalized service 
                        and creating lasting relationships with every client.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium tracking-wide hover:bg-gray-100 transition-all duration-300"
                  >
                    Learn More About Our Story
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Extended Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Extended Portfolio Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive collection showcasing the breadth and depth of our photography expertise
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[portfolio9, portfolio10, pt7, ...([portfolio1, portfolio2, portfolio3, portfolio4].slice(0, 1))].map((image, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={image}
                      alt={`Extended Portfolio ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                      <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <p className="text-sm font-medium">View Details</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action with Multiple Backgrounds */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Ready to Capture Your Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something beautiful together. Every great story begins with a single moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-white text-gray-900 font-medium tracking-wide hover:bg-gray-100 transition-all duration-300"
              >
                Book Your Session
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Background Showcase Strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[bg1, bg2, bg3, bg4, bg5, bg6].map((bg, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={bg}
                    alt={`Photography Style ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Ready to Capture Your Story?
            </h2>            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something beautiful together. Every great story begins with a single moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-white text-gray-900 font-medium tracking-wide hover:bg-gray-100 transition-all duration-300"
              >
                Book Your Session
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </RevealOnScroll>        </div>
      </section>

      {/* Background Showcase Strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[bg1, bg2, bg3, bg4, bg5, bg6].map((bg, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={bg}
                    alt={`Photography Style ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final Call to Action */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll>
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white font-medium">
                <HiCamera className="mr-2" />
                CD Photography Studio
              </div>
              <h2 className="text-4xl lg:text-6xl font-extralight text-white leading-tight">
                Your Story
                <span className="block font-light italic text-gray-200">Awaits</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Transform your precious moments into timeless memories with our professional photography services.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Link
                  to="/booking"
                  className="group relative px-10 py-4 bg-white text-gray-900 font-semibold tracking-wide hover:bg-gray-100 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <HiHeart className="mr-2" />
                    Start Your Journey
                  </span>
                </Link>
                <Link
                  to="/portfolio"
                  className="group relative px-10 py-4 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <HiPlay className="mr-2" />
                    Explore Our Work
                  </span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <style>
        {`
          .swiper-pagination-bullet-custom {
            width: 12px;
            height: 12px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .swiper-pagination-bullet-active-custom {
            background: rgba(255, 255, 255, 1);
            transform: scale(1.2);
          }
          .swiper-pagination {
            bottom: 30px !important;
          }
          
          /* Custom scrollbar for better visual appeal */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          
          /* Enhanced hover effects */
          .group:hover .group-hover\\:scale-110 {
            transform: scale(1.1);
          }
          .group:hover .group-hover\\:scale-105 {
            transform: scale(1.05);
          }
          
          /* Smooth animations */
          * {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </>
  );
};