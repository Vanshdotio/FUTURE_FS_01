import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // Array of words representing the poetic narrative
  const words = [
    { text: "I", highlight: "normal" },
    { text: "turn", highlight: "normal" },
    { text: "complex", highlight: "normal" },
    { text: "backend", highlight: "normal" },
    { text: "logic", highlight: "normal" },
    { text: "into", highlight: "normal" },
    { text: "products", highlight: "normal" },
    { text: "people", highlight: "normal" },
    { text: "actually", highlight: "normal" },
    { text: "understand", highlight: "cursive" },
    { text: "—", highlight: "normal" },
    { text: "interfaces", highlight: "normal" },
    { text: "that", highlight: "normal" },
    { text: "feel", highlight: "normal" },
    { text: "obvious,", highlight: "normal" },
    { text: "systems", highlight: "normal" },
    { text: "that", highlight: "normal" },
    { text: "scale,", highlight: "normal" },
    { text: "and", highlight: "normal" },
    { text: "details", highlight: "normal" },
    { text: "that", highlight: "normal" },
    { text: "quietly", highlight: "normal" },
    { text: "do", highlight: "normal" },
    { text: "the", highlight: "normal" },
    { text: "work.", highlight: "normal" }
  ];

  useEffect(() => {
    // Bind ScrollTrigger animation inside a React cleanup context
    const ctx = gsap.context(() => {
      const revealSpans = gsap.utils.toArray(".reveal-word");

      gsap.to(revealSpans, {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Animation begins when the top of the text is 80% down the viewport
          end: "bottom 55%", // Animation ends when the bottom of the text reaches 55%
          scrub: 0.5 // Bind animation progress to scrollbar
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="pt-24 md:pt-32 pb-8 md:pb-10 relative overflow-hidden bg-white select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Label indicator */}
          <div className="lg:col-span-4 flex flex-col items-start justify-start">
            <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-slate-500 select-none">
              <span className="text-[#1B8AE5] text-sm">✦</span> WHAT I DO
            </div>
          </div>

          {/* Right Column: Narrative Copy & Stats */}
          <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
            
            {/* Core Paragraph containing the word-by-word ScrollTrigger reveal */}
            <div 
              ref={textRef}
              className="font-sans font-semibold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] leading-[1.2] text-black/200 tracking-normal max-w-3xl flex flex-wrap"
            >
              {words.map((word, idx) => {
                if (word.highlight === "cursive") {
                  return (
                    <span
                      key={idx}
                      className="reveal-word inline-block mr-[0.25em] font-['Caveat'] text-[#1B8AE5] text-4xl sm:text-5xl md:text-6xl font-normal rotate-[-2deg] select-none opacity-20"
                    >
                      {word.text}
                    </span>
                  );
                } else {
                  return (
                    <span
                      key={idx}
                      className="reveal-word inline-block mr-[0.25em] text-black opacity-20"
                    >
                      {word.text}
                    </span>
                  );
                }
              })}
            </div>

            {/* Stats list aligned on the right side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl">
              {/* Stat 1: Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col gap-2.5"
              >
                <div className="text-5xl md:text-6xl font-display font-black text-[#1B8AE5] tracking-tight leading-none">
                  6+
                </div>
                <div className="text-sm font-sans font-bold text-slate-900 mt-1">
                  Months experience
                </div>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  building scalable backends, robust REST APIs, and designing interactive MERN applications.
                </p>
              </motion.div>

              {/* Stat 2: Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-2.5"
              >
                <div className="text-5xl md:text-6xl font-display font-black text-[#1B8AE5] tracking-tight leading-none">
                  5+
                </div>
                <div className="text-sm font-sans font-bold text-slate-900 mt-1">
                  Projects completed
                </div>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  delivering responsive web applications, secure user dashboards, and custom database designs.
                </p>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
