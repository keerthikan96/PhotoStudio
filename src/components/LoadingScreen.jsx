import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Capturing Moments...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1200);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-serif">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold tracking-wide text-center"
      >
        {text} <span className="animate-blink">|</span>
      </motion.div>

      <div className="relative mt-6 w-48 h-[3px] bg-gray-700 rounded overflow-hidden">
        <motion.div 
          className="h-full bg-white shadow-[0_0_15px_#fff]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        ></motion.div>
      </div>
    </div>
  );
};
