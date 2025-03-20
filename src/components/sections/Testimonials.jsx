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
  const [selectedCard, setSelectedCard] = useState(null);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  return (
    <section id="testimonials" className="flex items-center justify-center pb-20">
      <RevealOnScroll>
        <div className="relative  p-8 rounded-lg  max-w-7xl mx-auto min-h-[500px] flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-6">Words From Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
            {testimonials.slice(current * testimonialsPerPage, (current + 1) * testimonialsPerPage).map((testimonial) => (
              <div
                key={testimonial.id}
                className={`bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between h-full transition-transform duration-300 ease-in-out ${
                  selectedCard === testimonial.id ? 'transform scale-105 border-2 border-blue-400' : 'hover:scale-105 hover:shadow-xl'
                }`}
                //onClick={() => setSelectedCard(testimonial.id)}
              >
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="mt-4">
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                //onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${current === index ? 'bg-gray-800' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default TestimonialSwipe;