import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Components
import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";
import Footer from "./components/Footer/Footer";
import ResumePage from "./components/Resume/ResumePage";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <About />
        <Timeline />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5
    });

    // Synchronize ScrollTrigger with Lenis scroll events
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync with page layout calculations
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
    };
  }, [isLoading]);

  // Force document element to remove dark class (pure light mode)
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <>
      {/* Premium Loader Screen */}
      <Loader onLoadComplete={() => setIsLoading(false)} />

      {/* Main Site Content */}
      {!isLoading && (
        <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 transition-colors duration-300">
          {/* Custom Cursor with light glow */}
          <Cursor />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}
