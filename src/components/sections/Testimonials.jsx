import React, { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

const testimonials = [
  {
    id: 1,
    name: "Rathi Priya",
    role: "Quality Output",
    content: "I had a great experience working with Chandru & his team for a wedding. They captured each and every moment beautifully and were really flexible towards their approach. I think great pictures are achieved when you have a good teamwork and Focusstudios were super fun as made us really comfortable."
  },
  {
    id: 2,
    name: "Lalith Kumar",
    role: "Simply amazing!",
    content: "Had a great experience with Focus Studios Team. Right from the date of confirmation of my wedding till the date of handing over the deliverables, things were completely taken care by Surya Lakshmi. I would like to appreciate her client handling skills. Had a very good journey with Team Focus."
  },
  {
    id: 3,
    name: "Dhinesh Ram",
    role: "Great Experience",
    content: "Wonderful job Focus. Especially during Covid times, the way the dedicated team stretched themselves to deliver a quality output is amazing. Good People and Quality Output... What more needed for a customer? Thanks very much... This is on Rathipriya Vignesh Wedding Photo shoot."
  },
  {
    id: 4,
    name: "Anjali Mehta",
    role: "Highly Recommend",
    content: "The entire experience with Focus Studios was seamless. Their attention to detail and creative approach made my wedding album truly special."
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Fantastic Work",
    content: "From the first discussion to the final delivery, everything was perfect. Focus Studios team is truly passionate about their work."
  }
];

const TestimonialSwipe = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section
      id="testimonials"
      className="min-h-80 flex items-center justify-center "
    >
      <RevealOnScroll>
        <div className="relative bg-gray-100 p-8 rounded-lg shadow-lg max-w-7xl mx-auto min-h-[500px]">
          <h2 className="text-2xl font-bold text-center mb-6">Words From Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex items-center justify-center">
            {testimonials.slice(current * testimonialsPerPage, (current + 1) * testimonialsPerPage).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <p className="text-gray-900 font-semibold mt-4">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            <button onClick={prevTestimonial} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              Prev
            </button>
            <button onClick={nextTestimonial} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              Next
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default TestimonialSwipe;
