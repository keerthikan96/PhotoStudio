import { useState, useRef, useEffect, createRef } from "react";
import PropTypes from "prop-types";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  // Initialize refs array with the correct length
  useEffect(() => {
    contentRefs.current = Array(faqs.length)
      .fill()
      .map((_, i) => contentRefs.current[i] || createRef());
  }, [faqs.length]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-700 hover:shadow-md"
          >
            <button
              className="w-full text-left p-4 font-medium flex justify-between items-center transition-all duration-700 hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="text-gray-800">{faq.question}</span>
              <div className={`transition-transform duration-700 ease-in-out transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                {activeIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                )}
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              style={{ 
                maxHeight: activeIndex === index ? contentRefs.current[index]?.scrollHeight + 'px' : '0px',
              }}
            >
              <div 
                ref={el => contentRefs.current[index] = el} 
                className="p-4 pt-0 text-gray-600"
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FAQ.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FAQ;