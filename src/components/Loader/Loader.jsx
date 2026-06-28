import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onLoadComplete }) {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // Total loading time in ms
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setCount(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            if (onLoadComplete) onLoadComplete();
          }, 800); // Wait for exit animation to finish
        }, 300);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 bg-[#0F172A] z-[9999] flex flex-col justify-between p-10 md:p-16 text-white overflow-hidden"
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Top Info */}
          <div className="flex justify-between items-start w-full">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs uppercase tracking-[0.2em] text-slate-400 font-sans"
            >
              PORTFOLIO COLLECTION
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs uppercase tracking-[0.2em] text-slate-400 font-sans"
            >
              VANSH © 2026
            </motion.div>
          </div>

          {/* Center Brand */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl font-display font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-slate-500"
              >
                VANSH
              </motion.h1>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-[1.5px] bg-[#1B8AE5] mt-6"
            />
          </div>

          {/* Bottom Counter */}
          <div className="flex justify-between items-end w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-md text-slate-400 font-serif italic"
            >
              Crafting premium digital experiences...
            </motion.div>
            
            <div className="relative font-display font-medium text-8xl md:text-9xl text-white opacity-95">
              <span className="text-3xl md:text-4xl absolute -left-6 top-2 text-[#1B8AE5] font-sans font-normal">%</span>
              {count}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
