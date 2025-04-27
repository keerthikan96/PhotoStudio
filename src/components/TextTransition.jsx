import { useState, useEffect } from "react";


const TextTransition = ({ text}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger the animation after component mount
    setIsVisible(true);
  }, []);
  
  return (
    <>
      {text?.split('')?.map((char, index) => (
        <span 
          key={index} 
          className="inline-block transition-all duration-300 ease-in-out"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
            transitionDelay: `${index * 40}ms`, // Increased delay for more spacing in animation
            marginRight: char === ' ' ? '0.25em' : '0.05em' // Add spacing between letters
          }}
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default TextTransition;
