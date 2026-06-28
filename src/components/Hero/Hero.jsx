import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RiMapPinLine } from "react-icons/ri";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const developerTextRef = useRef(null); // Ref for GSAP floating animation

  // Scroll parallax effects for background and the ledge portrait
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    const floatCtx = gsap.context(() => {
      gsap.to(developerTextRef.current, {
        y: -15,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Slowly drift the background cloud
      gsap.to(".hero-floating-cloud", {
        x: 35,
        y: -12,
        duration: 18,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
    return () => floatCtx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-white"
    >
      {/* Sky & Clouds Background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[115%] z-0 bg-gradient-to-b from-[#1B8AE5] to-[#b3dcff]"
      >
        <img
          src="/assets/hero_background_1782642609840.png"
          onError={(e) => {
            e.target.src = "/assets/hero_bg.png";
          }}
          alt="Blue Sky with Clouds"
          className="w-full h-full object-cover object-bottom opacity-50 mix-blend-overlay"
        />

        {/* Floating Drifting Cloud Asset */}
        <img
          src="/assets/cloud.png"
          alt="Drifting Cloud"
          className="hero-floating-cloud absolute top-[22%] left-[18%] w-[320px] sm:w-[450px] md:w-[600px] h-auto opacity-70 pointer-events-none select-none z-10 mix-blend-screen"
        />

        {/* Light ambient sky glow */}
        <div className="absolute inset-0 bg-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), transparent 60%) pointer-events-none" />
      </motion.div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between h-full pt-32 pb-8">
        {/* Empty placeholder to push content down */}
        <div />

        {/* Text Area (Left) */}
        <div className="max-w-2xl text-white select-none relative z-30 mb-20">
          <div className="relative mb-20 flex flex-col leading-none">
            {/* Waving Hand Sub-label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-sans font-medium text-white/95 mb-4 select-none"
            >
              <span className="inline-block origin-[70%_70%] animate-[wave_2.5s_infinite]">
                👋
              </span>
              <span className="inline-block font-[500] sm:text-lg md:text-xl font-[Inter_Display]  text-white/95">
                Hey, I'm <span className="font-bold">Vansh</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
              className="text-6xl sm:text-7xl md:text-9xl lg:text-[8rem] font-display font-semibold tracking-tighter drop-shadow-md text-white select-none"
            >
              <span>W</span>
              <span>e</span>
              <span>b</span>
            </motion.h1>

            {/* Cursive Overlapping "developer" with floating animation */}
            <motion.span
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -2, scale: 1 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.20,
              }}
              className="absolute font-signature top-38 font-medium text-8xl sm:text-7xl md:text-8xl lg:text-[9rem] font-[Caveat] text-white drop-shadow-md  sm:-mt-8 md:-mt-10 ml-16 sm:ml-24 md:ml-36 select-none origin-left inline-block"
            >
              <span ref={developerTextRef} className="inline-block">
                <span>d</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
              </span>
            </motion.span>
          </div>

          {/* Subheading details */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-white/90 font-sans font-normal mt-6 max-w-lg drop-shadow-sm flex items-center gap-1.5"
          >
            Building creative MERN Stack & scalable web products
          </motion.p>
        </div>

        {/* Bottom Metadata row */}
        <div className="w-full flex items-center justify-between text-slate-700 font-sans text-xs md:text-sm font-semibold uppercase tracking-widest relative z-30 select-none border-t border-slate-300/10 pt-6">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-1.5"
          >
            <span>BASED IN</span>
            <RiMapPinLine className="text-[#1B8AE5] text-sm animate-bounce" />
            <span className="font-bold">DELHI, INDIA</span>
          </motion.div>

          {/* Tagline details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden  sm:block"
          >
            CREATE • BUILD • DEPLOY
          </motion.div>
        </div>
      </div>

      {/* Vansh Sitting Cutout Image (Right aligned, extending bottom) */}
      <motion.div
        style={{ y: yPortrait }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute right-[-25%] sm:right-[-15%] md:right-[-10%] lg:right-[-6%] xl:right-[-3%] bottom-[-10px] w-[145%] sm:w-[110%] md:w-[92%] lg:w-[80%] xl:w-[68%] 2xl:w-[62%] max-h-[92vh] z-10 select-none pointer-events-none flex items-end justify-end"
      >
        <img
          src="/src/assets/image/ChatGPT_Image_Jun_28__2026__04_35_54_PM__1_-removebg-preview.png"
          alt="Vansh Sitting on Ledge"
          className="w-full h-full object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
        />
      </motion.div>

      {/* Premium Foggy Blur Transition Overlays (z-20 sitting on top of background & portrait, under text z-30) */}
      {/* Layer 1: Backdrop blur with gradient mask */}
      <div
        className="absolute inset-x-0 bottom-0 h-[38vh] backdrop-blur-[24px] pointer-events-none z-20"
        style={{
          maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />

      {/* Layer 2: Color fade overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[38vh] bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none z-20" />
    </section>
  );
}
