import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { personalInfo } from "../../data/portfolioData";
import contactVideo from "../../assets/video/ZFhoqlxuV09Rbo2TYA3i62HyQ.mp4";
import BlurText from "./BlurText";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const words = ["design", "build", "create"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const contactCtx = gsap.context(() => {
      // Slowly drift the background cloud in the footer section
      gsap.to(".contact-floating-cloud", {
        x: -30,
        y: 8,
        duration: 16,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Bottom Left Cloud: Zoom and fly in from bottom-left corner
      gsap.fromTo(
        ".footer-bottom-left-cloud",
        {
          scale: 0.4,
          x: -120,
          y: 80,
          opacity: 0,
          transformOrigin: "bottom left"
        },
        {
          scale: 1,
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );

      // Bottom Right Cloud: Zoom and fly in from bottom-right corner
      gsap.fromTo(
        ".footer-bottom-right-cloud",
        {
          scale: 0.4,
          x: 120,
          y: 80,
          opacity: 0,
          transformOrigin: "bottom right"
        },
        {
          scale: 1,
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );

      // Slowly drift the bottom left corner cloud image
      gsap.to(".footer-bottom-left-cloud img", {
        y: -10,
        x: 6,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Slowly drift the bottom right corner cloud image
      gsap.to(".footer-bottom-right-cloud img", {
        y: -8,
        x: -6,
        duration: 7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

    });
    return () => contactCtx.revert();
  }, []);

  return (
    <footer
      id="contact"
      className="relative w-full h-auto md:h-[103vh] flex flex-col justify-start pt-20 md:pt-24 pb-8 lg:pb-12 overflow-hidden bg-gradient-to-b from-[#1B8AE5] via-[#4da9f7] to-[#1361b5] text-white select-none"
    >
      {/* Sky & Clouds Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
        {/* Floating Drifting Cloud Asset */}
        <img
          src="/assets/cloud.png"
          alt="Drifting Cloud"
          className="contact-floating-cloud absolute top-[12%] right-[8%] w-[260px] sm:w-[360px] md:w-[480px] h-auto opacity-35 pointer-events-none select-none z-10 mix-blend-screen"
        />
      </div>

      {/* Top transition blur overlay */}
      <div
        className="absolute inset-x-0 top-0 h-[50px] sm:h-[70px] backdrop-blur-[24px] pointer-events-none z-10 transform translate-z-0"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          willChange: "transform, filter",
          transform: "translate3d(0, 0, 0)"
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[50px] sm:h-[70px] bg-gradient-to-b from-white via-white/95 to-transparent pointer-events-none z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full flex flex-col justify-start gap-6">
        
        {/* Top Content: Heading & Video Mockup & Email/Socials */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Typography & Contact Details */}
          <div className="w-full lg:w-1/2 flex flex-col relative pt-4 lg:pt-8">
            
            {/* Faded Background "design" text */}
            <div className="absolute top-[-20px] left-[-10px] font-['Caveat'] text-[13vw] sm:text-[10vw] lg:text-[8vw] text-white/[0.04] pointer-events-none select-none z-0">
              design
            </div>

            {/* Main Header typography */}
            <div className="relative z-10 flex flex-col select-none">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-[Helvetica_Now_Display] font-[600] leading-[0.9] lowercase bg-gradient-to-b from-white via-white to-white/75 bg-clip-text text-transparent drop-shadow-sm">
                <span className="flex items-center gap-x-3.5 flex-wrap h-[1.1em] overflow-hidden">
                  <span>lets</span>
                  <span className="relative inline-block h-[1.1em] min-w-[3em] align-top overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={words[wordIndex]}
                        initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                        animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: "-100%", opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-0 font-['Caveat'] font-[500] lowercase tracking-tight text-white block select-none"
                      >
                        {words[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
                incredible work
                <br />
                together.
              </h2>
            </div>

            {/* Email and Social details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-row justify-between sm:justify-start sm:gap-24 mt-10 sm:mt-14 relative z-10"
            >
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <span className="text-white/60 font-sans text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
                  Email
                </span>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="font-sans font-bold text-white text-sm sm:text-base hover:underline"
                >
                  vanshsharma0963@gmail.com
                </a>
              </div>

              {/* Socials */}
              <div className="flex flex-col gap-1.5">
                <span className="text-white/60 font-sans text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
                  Social
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1B8AE5] hover:scale-110 transition-transform duration-300 shadow-md"
                    aria-label="LinkedIn Profile"
                  >
                    <RiLinkedinLine size={14} />
                  </a>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1B8AE5] hover:scale-110 transition-transform duration-300 shadow-md"
                    aria-label="GitHub Profile"
                  >
                    <RiGithubLine size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Video Mockup */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative z-10 pt-4 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] sm:w-[360px] md:w-[400px] lg:w-[350px] aspect-[16/9] rounded-[20px] overflow-hidden border-3 border-white bg-slate-950 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] transform transition-transform duration-500 cursor-pointer select-none"
            >
              <video
                src={contactVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
            </motion.div>
          </div>

        </div>

        {/* Divider Line & Copyright Metadata (Positioned immediately below the email row) */}
        <div className="w-full">
          {/* Horizontal Divider Line */}
          <div className="w-full border-t border-white/10 pt-4 flex flex-row items-center justify-between gap-4 font-sans text-xs md:text-sm text-white/65">
            {/* Copyright Metadata */}
            <div>
              © {new Date().getFullYear()} Vansh
            </div>
          </div>
        </div>

      </div>

      {/* Massive Outlined / Semi-transparent "VANSH" text absolute positioned at the bottom */}
      <div className="absolute -bottom-[2%]  left-0 right-0 text-center pointer-events-none select-none z-0">
        <h2 className="text-[15vw] font-zalando font-black leading-none uppercase tracking-widest bg-gradient-to-b from-white/20 via-white/9 to-white/0 bg-clip-text text-transparent select-none">
          VANSH
        </h2>
      </div>

      {/* Bottom Left Cloud Wrapper */}
      <div className="footer-bottom-left-cloud absolute bottom-[-30px] left-[-12%] w-[250px] sm:w-[350px] md:w-[480px] h-auto pointer-events-none select-none z-10">
        <img
          src="/assets/cloud.png"
          alt="Bottom Left Cloud"
          className="w-full h-full object-contain mix-blend-screen opacity-75"
        />
      </div>

      {/* Bottom Right Cloud Wrapper */}
      <div className="footer-bottom-right-cloud absolute bottom-[-40px] right-[-12%] w-[250px] sm:w-[350px] md:w-[480px] h-auto pointer-events-none select-none z-10">
        <img
          src="/assets/cloud.png"
          alt="Bottom Right Cloud"
          className="w-full h-full object-contain scale-x-[-1] mix-blend-screen opacity-75"
        />
      </div>

    </footer>
  );
}
