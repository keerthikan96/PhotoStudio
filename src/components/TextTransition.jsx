import { useState, useEffect } from "react";


const TextTransition = ({ text}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger the animation after component mount
    setIsVisible(true);
  }, []);
  
  // Split text into words to prevent word breaking
  const words = text?.split(' ') || [];
  let charIndex = 0;
  
  return (
    <>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((char, index) => {
            const currentCharIndex = charIndex++;
            return (
              <span 
                key={index} 
                className="inline-block transition-all duration-300 ease-in-out"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: `${currentCharIndex * 40}ms`,
                  marginRight: '0.05em'
                }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span 
              className="inline-block transition-all duration-300 ease-in-out"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: `${charIndex++ * 40}ms`,
                marginRight: '0.25em'
              }}
            >
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </>
  );
};

export default TextTransition;
