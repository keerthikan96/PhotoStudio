import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const testimonials = [
  {
    id: 1,
    name: "Rathi Priya",
    role: "Quality Output",
    content:
      "I had a wonderful experience working with Chamodh and his team for our wedding. They captured every moment beautifully and made us feel so comfortable throughout. Great teamwork and a truly memorable experience!",
  },
  {
    id: 2,
    name: "Lalith Kumar",
    role: "Simply Amazing!",
    content:
      "Working with Chamodh Delpearachchi Photography was an absolute delight. From our first meeting to the final delivery of the photos and videos, everything was handled with great professionalism and care. Highly recommend them!",
  },
  {
    id: 3,
    name: "Dhinesh Ram",
    role: "Great Experience",
    content:
      "Chamodh and the team went above and beyond to ensure that every detail was captured perfectly. Their dedication, passion, and quality of work truly made our special day even more memorable. Thank you so much!",
  },
  {
    id: 4,
    name: "Anjali Meera",
    role: "Highly Recommend",
    content:
      "The entire experience with Chamodh Delpearachchi Photography was seamless. Their attention to detail and creative vision made our wedding album truly one of a kind.",
  },
  {
    id: 5,
    name: "Sanjana Kumar",
    role: "Fantastic Work",
    content:
      "From our very first conversation, Chamodh and his team made us feel confident and excited. Every step was smooth, and the final results exceeded our expectations. Truly passionate professionals!",
  },
];


const TestimonialSwipe = () => {
  const [current, setCurrent] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  
  // Responsive testimonials per page
  const getTestimonialsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 3; // Desktop
    }
    return 3; // Default for SSR
  };
  
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(
    typeof window !== 'undefined' ? getTestimonialsPerPage() : 3
  );
  
  // Update testimonialsPerPage on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerPage(getTestimonialsPerPage());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  return (
    <section
      id="testimonials"
      className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll>
        <p className="text-center text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">600+ Happy Clients</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-1 sm:mb-2">
          Words From Our Clients
        </h2>
        <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">-CD Testimonials-</p>

        <div className="relative p-4 sm:p-8 rounded-lg max-w-7xl mx-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-center justify-center">
            {testimonials
              .slice(
                current * testimonialsPerPage,
                current * testimonialsPerPage + testimonialsPerPage
              )
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center flex flex-col justify-between h-[250px] sm:h-[300px] md:h-[350px] max-w-[330px] mx-auto transition-transform duration-300 ease-in-out ${
                    selectedCard === testimonial.id
                      ? "transform scale-105 border-2 border-blue-400"
                      : "hover:scale-105 hover:shadow-xl"
                  }`}
                  onClick={() => setSelectedCard(testimonial.id)}
                >
                  <p className="text-gray-700 italic text-sm sm:text-base">
                    "{testimonial.content.length > 150 && window.innerWidth < 640 
                      ? testimonial.content.substring(0, 150) + '...' 
                      : testimonial.content}"
                  </p>
                  <div className="mt-3 sm:mt-4">
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-center space-x-2 mt-4 sm:mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gray-300 transition-all duration-300 cursor-pointer ${
                  current === index ? "w-4 sm:w-6 bg-gray-700" : "bg-gray-300"
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default TestimonialSwipe;
