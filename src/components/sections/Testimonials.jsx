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
    content:
      "I had a wonderful experience working with Chamodh and his team for our wedding. They captured every moment beautifully!",
    photo: image1,
    bgPosition: "center center",
  },
  {
    id: 2,
    name: "Lalith Kumar",
    role: "Portrait Session",
    content:
      "Absolute delight to work with. Professionalism and care in every aspect!",
    photo: image2,
    bgPosition: "center top",
  },
  {
    id: 3,
    name: "Dhinesh Ram",
    role: "Corporate Event",
    content:
      "Went above and beyond to capture every detail perfectly. Truly memorable!",
    photo: image3,
    bgPosition: "center 30%",
  },
  {
    id: 4,
    name: "Anjali Meera",
    role: "Fashion Shoot",
    content:
      "Seamless experience with creative vision that made our photos one of a kind.",
    photo: image4,
    bgPosition: "center center",
  },
  {
    id: 5,
    name: "Sanjana Kumar",
    role: "Family Portrait",
    content:
      "Final results exceeded our expectations. Truly passionate professionals!",
    photo: image5,
    bgPosition: "center 70%",
  },
];

const TestimonialSwipe = () => {
  const [current, setCurrent] = useState(0);

  const getTestimonialsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [testimonialsPerPage, setTestimonialsPerPage] = useState(
    typeof window !== "undefined" ? getTestimonialsPerPage() : 3
  );

  React.useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerPage(getTestimonialsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  return (
    <section
      id="testimonials"
      className="py-8 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>{" "}
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 border border-black/20 rounded-full bg-black/5 backdrop-blur-sm">
            <p className="text-black/90 text-sm sm:text-base font-medium tracking-wider uppercase">
              TRUSTED BY 600+ CLIENTS
            </p>
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4 tracking-tight">
            Client Testimonials
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto"></div>
        </div>{" "}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {testimonials
              .slice(
                current * testimonialsPerPage,
                current * testimonialsPerPage + testimonialsPerPage
              )
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="relative h-[32rem] sm:h-[36rem] rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  style={{
                    boxShadow:
                      "0 25px 50px -12px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Background image with modern overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${testimonial.photo})`,
                      backgroundPosition: testimonial.bgPosition,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>

                  {/* Modern content overlay */}
                  <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end text-white">
                    {/* Quote icon with modern styling */}
                    <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                      </div>
                    </div>

                    {/* Testimonial text with better typography */}
                    <p className="text-xl sm:text-2xl italic mb-8 leading-relaxed font-light text-white/95 tracking-wide">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Client info with modern separator */}
                    <div className="border-t border-white/20 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-xl tracking-wide text-white mb-1">
                            {testimonial.name}
                          </p>
                          <p className="text-white/70 text-sm font-medium tracking-wider uppercase">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modern studio watermark */}
                  <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-xs font-medium tracking-wider border border-white/20">
                    CD Photography
                  </div>
                </div>
              ))}
          </div>{" "}
          {/* Modern Pagination */}
          <div className="flex items-center justify-center space-x-4 mt-16">
            <div className="flex items-center space-x-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-500 ${
                    current === index
                      ? "w-8 h-3 bg-white rounded-full shadow-lg shadow-white/20"
                      : "w-3 h-3 bg-white/30 rounded-full hover:bg-white/50"
                  }`}
                  aria-label={`View testimonials group ${index + 1}`}
                />
              ))}
            </div>

            {/* Page counter */}
            <div className="ml-6 text-white/60 text-sm font-medium">
              {current + 1} / {totalPages}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default TestimonialSwipe;
