import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import introImage from "../../assets/image/intro_image.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-white select-none"
    >
      {/* Background elements */}
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#1B8AE5]/5 blur-3xl pointer-events-none select-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Polaroid Image Container (Left) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="bg-white p-4 pb-12 shadow-2xl rounded-sm border border-slate-200/40 w-full max-w-[340px] transform transition-transform duration-300"
            >
              {/* Photo Frame */}
              <div className="aspect-square w-full overflow-hidden bg-slate-100 rounded-sm mb-6 relative">
                <img
                  src={introImage}
                  alt="Vansh Casual Candid"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              
              {/* Handwritten Polaroid Caption */}
              <div className="text-center font-serif text-slate-800 text-lg tracking-wide italic">
                Vansh, 2026
              </div>
            </motion.div>
          </div>

          {/* About Text Content (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-slate-900">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <p className="text-[#1B8AE5] font-sans font-semibold tracking-widest text-xs uppercase">
                  Biography
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 leading-tight">
                  a little about myself
                </h2>
              </div>
              
              <div className="text-slate-600 font-sans font-light text-base md:text-lg leading-relaxed flex flex-col gap-4">
                <p>
                  I'm Vansh, a MERN developer who lives at the intersection of logical engineering and graphic layout beauty. I design products that aren't just functionally sound, but visually outstanding.
                </p>
                <p>
                  My developer journey is fueled by a desire to craft things that feel obvious to the user. I spend my time optimizing database architectures, constructing RESTful APIs, and implementing front-end designs with Apple-grade animations.
                </p>
                <p>
                  Outside of coding, you can find me reviewing the latest design portfolios on Awwwards, exploring typography layouts, or writing clean documentation. Let's build something exceptional!
                </p>
              </div>

              {/* Handwritten Signature */}
              <div className="mt-6 flex flex-col items-start gap-1 select-none pointer-events-none">
                <span className="text-slate-400 font-sans text-xs uppercase tracking-widest">
                  CREATOR
                </span>
                <span className="font-signature text-6xl md:text-7xl text-[#1B8AE5] font-normal leading-none font-['Alex_Brush']">
                  Vansh
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
