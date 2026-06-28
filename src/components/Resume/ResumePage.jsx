import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiArrowLeftSLine, RiDownloadLine } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function ResumePage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white/80 border border-slate-200/60 shadow-sm backdrop-blur-md text-slate-700 font-sans text-sm font-semibold hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-x-0.5 group"
        >
          <RiArrowLeftSLine className="text-lg group-hover:-translate-x-0.5 transition-transform duration-300" />
          Back
        </Link>
      </div>

      <main className="w-full">
        <section className="relative w-full min-h-screen bg-[#F8FAFC] py-28 md:py-36 px-4 sm:px-6 overflow-hidden">
          {/* Header Area */}
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-5"
            >
              <span className="text-[#1B8AE5] text-sm">✦</span>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#1B8AE5]">
                Resume
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-[Helvetica_Now_Display] text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight"
            >
              oh sure, let's keep it formal
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-slate-500 font-sans text-sm md:text-base max-w-md mx-auto mt-4 leading-relaxed"
            >
              For recruiters, hiring managers, and anyone who prefers the short version.
            </motion.p>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-7"
            >
              <a
                href="/src/assets/pdf/Vansh_Sharma_Resume.pdf"
                download
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 text-slate-800 font-sans text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <RiDownloadLine className="text-base text-[#1B8AE5] group-hover:scale-110 transition-transform duration-300" />
                Download
              </a>
            </motion.div>
          </div>

          {/* Resume Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-4 sm:p-6 md:p-8 relative overflow-hidden">
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1B8AE5] via-[#4da9f7] to-[#1B8AE5]" />

              {/* Resume Image */}
              <img
                src="/src/assets/image/Vansh_Sharma_resume-1.png"
                alt="Vansh Sharma Resume"
                className="w-full h-auto rounded-lg select-none"
                draggable={false}
              />
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
