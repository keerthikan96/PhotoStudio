import { useRef, useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const PagesUI = ({ children }) => {
  const pageRef = useRef(null);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showSecondLayer, setShowSecondLayer] = useState(false);
  const [showFirstLayer, setShowFirstLayer] = useState(false);

  useEffect(() => {
    // Show main content first
    setTimeout(() => setShowMainContent(true), 100);
    
    // Show second layer after a delay
    setTimeout(() => setShowSecondLayer(true), 400);
    
    // Show first layer last
    setTimeout(() => setShowFirstLayer(true), 700);
  }, []);

  return (
    <div className="relative mt-8 w-full">
      {/* First stacked div */}
      <div className={`absolute w-[94%] h-[35px] bg-gray-400/20 shadow-md rounded-t-3xl -top-9 left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ease-in-out ${showFirstLayer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}></div>
      {/* Second stacked div */}
      <div className={`absolute w-[96%] h-[40px] bg-gray-400/30 shadow-md rounded-3xl -top-5 left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ease-in-out ${showSecondLayer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}></div>
      <div 
        ref={pageRef}
        className={` mx-2 p-5 bg-[#f8f9fa] shadow-2xl rounded-3xl min-h-[80vh] relative z-30 transition-all duration-500 ease-in-out ${showMainContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
