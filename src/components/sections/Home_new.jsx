import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
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

// Background images for sections
import bg1 from "../../assets/Images/bg-1.jpg";
import bg2 from "../../assets/Images/bg-2.jpg";

// Service images
import serviceImg1 from "../../assets/Images/serviceview1.jpg";
import serviceImg2 from "../../assets/Images/serviceview2.jpg";
import serviceImg3 from "../../assets/Images/serviceview3.jpg";

// Profile image
import chamodProfile from "../../assets/Images/chamodProfile.jpg";

export const Home = () => {
  return (
    <>
      {/* Hero Section with Full-Screen Image Slider */}
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={2000}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="w-full h-full"
          parallax={true}
        >
          {[image1, image2, image3, image4, image5].map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Photography Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  data-swiper-parallax="-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <RevealOnScroll>
            <div className="text-center text-white px-4 max-w-5xl">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
                  <HiCamera className="mr-2" />
                  Professional Photography
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-extralight mb-6 tracking-tight leading-tight">
                Capturing Life's
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
        </div>

        {/* Custom Navigation */}
        <div className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20">
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
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A glimpse into the beautiful moments we've captured recently
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6].map((image, index) => (
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
          </RevealOnScroll>
        </div>
      </section>

      {/* Call to Action with Background */}
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
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. Every great story begins with a single moment.
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
        `}
      </style>
    </>
  );
};
