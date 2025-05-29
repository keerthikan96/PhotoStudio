import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import image1 from "../../assets/Images/image1.jpg";
import image2 from "../../assets/Images/image2.jpg";
import image3 from "../../assets/Images/image3.jpg";
import image4 from "../../assets/Images/image4.jpg";
import image5 from "../../assets/Images/image5.jpg";

const testimonials = [
  {
    id: 1,
    name: "Rathi Priya",
    role: "Wedding Client",
    content: "I had a wonderful experience working with Chamodh and his team for our wedding. They captured every moment beautifully!",
    photo: image1,
    bgPosition: "center center"
  },
  {
    id: 2,
    name: "Lalith Kumar",
    role: "Portrait Session",
    content: "Absolute delight to work with. Professionalism and care in every aspect!",
    photo: image2,
    bgPosition: "center top"
  },
  {
    id: 3,
    name: "Dhinesh Ram",
    role: "Corporate Event",
    content: "Went above and beyond to capture every detail perfectly. Truly memorable!",
    photo: image3,
    bgPosition: "center 30%"
  },
  {
    id: 4,
    name: "Anjali Meera",
    role: "Fashion Shoot",
    content: "Seamless experience with creative vision that made our photos one of a kind.",
    photo: image4,
    bgPosition: "center center"
  },
  {
    id: 5,
    name: "Sanjana Kumar",
    role: "Family Portrait",
    content: "Final results exceeded our expectations. Truly passionate professionals!",
    photo: image5,
    bgPosition: "center 70%"
  },
];

const TestimonialSwipe = () => {
  const [current, setCurrent] = useState(0);
  
  const getTestimonialsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };
  
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(
    typeof window !== 'undefined' ? getTestimonialsPerPage() : 3
  );
  
  React.useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerPage(getTestimonialsPerPage());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  return (
    <section id="testimonials" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-blue-600 mb-2 text-sm sm:text-base font-semibold tracking-wider uppercase">TRUSTED BY 600+ CLIENTS</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials
              .slice(
                current * testimonialsPerPage,
                current * testimonialsPerPage + testimonialsPerPage
              )
              .map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="relative h-96 sm:h-[28rem] rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Background image with gradient overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${testimonial.photo})`,
                      backgroundPosition: testimonial.bgPosition
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent"></div>
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.3)' }}>
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    
                    <p className="text-lg sm:text-xl italic mb-6 leading-relaxed font-medium text-white/95">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    
                    <div className="border-t border-white/20 pt-4">
                      <p className="font-bold text-xl tracking-wide text-white">{testimonial.name}</p>
                      <p className="text-blue-300 text-sm font-semibold tracking-wider uppercase">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Studio watermark */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white/90 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
                    CD Photography
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-3 mt-10">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "w-6 bg-blue-600" : "bg-gray-300"}`}
                aria-label={`View testimonials group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default TestimonialSwipe;