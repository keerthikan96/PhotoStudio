import { useEffect } from "react";
import { motion } from "framer-motion";
import logoLoder from "../assets/logoLoader.png";

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Extended slightly for better animation flow
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Main logo container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Glowing ring animation */}
        <motion.div
          className="absolute -inset-4 rounded-full border-2 border-transparent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.1)"]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main logo with enhanced size and animation */}
        <motion.img
          src={logoLoder}
          alt="Loading"
          className="w-64 h-64 md:w-80 md:h-80 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 5, -5, 0] // subtle wobble
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            scale: { duration: 1, ease: "backOut" },
            rotate: { 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />

        {/* Modern progress indicator with connecting line */}
        <div className="mt-12 relative w-48">
          <motion.div 
            className="absolute h-0.5 bg-white/30 w-full top-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div 
            className="absolute h-0.5 bg-white w-0 top-1/2"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2.5, 
              ease: "linear" 
            }}
          />
          
          <div className="flex justify-between relative">
            {[0, 1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className="w-4 h-4 bg-white rounded-full relative"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                  boxShadow: ["0 0 0 rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.8)", "0 0 0 rgba(255,255,255,0)"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};