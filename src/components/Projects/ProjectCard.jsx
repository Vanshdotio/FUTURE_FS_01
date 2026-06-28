import React, { useRef } from "react";
import { RiGithubLine, RiArrowRightUpLine, RiLockLine } from "react-icons/ri";

export default function ProjectCard({ project, index, total, innerRef }) {
  const cardContentRef = useRef(null);

  // Mouse move handler for the premium cursor-tracking radial shine
  const handleMouseMove = (e) => {
    const cardEl = cardContentRef.current;
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardEl.style.setProperty("--mouse-x", `${x}px`);
    cardEl.style.setProperty("--mouse-y", `${y}px`);
  };

  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={innerRef}
      className={`relative lg:sticky lg:top-[80px] w-full project-card-wrapper pointer-events-auto ${
        index === total - 1 ? "pb-12 lg:pb-0" : "pb-12 lg:pb-[25vh]"
      }`}
      style={{
        zIndex: index + 1,
      }}
    >
      {/* Outer Card Container with Sky Gradient & Clouds Background */}
      <div className="project-card-content relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-[#1c7ced] to-[#b3dcff] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between p-6 sm:p-8 md:p-12 border border-white/20 will-change-transform">
        
        {/* Sky Background Clouds Image Overlay */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/assets/hero_bg.png"
            alt="Sky background clouds"
            className="w-full h-full object-cover opacity-45 mix-blend-overlay"
          />
        </div>

        {/* Glassmorphic Details Box (Left) */}
        <div
          ref={cardContentRef}
          onMouseMove={handleMouseMove}
          className="w-full lg:w-[55%] relative overflow-hidden rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 text-white p-6 md:p-10 shadow-[0_15px_30px_rgba(0,0,0,0.1)] flex flex-col z-10"
          style={{
            background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.15), transparent 40%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)`,
          }}
        >
          {/* Subtle top border highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          {/* Top Row: Index & Year */}
          <div className="flex items-center justify-between w-full mb-6">
            <span className="text-xs font-bold w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center backdrop-blur-md">
              {formattedIndex}
            </span>
            <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">
              2026
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-sans font-black mb-6 tracking-tight leading-tight text-white drop-shadow-sm">
            {project.title}: {project.subtitle}
          </h3>

          {/* Tech/Category Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] sm:text-xs font-sans font-medium px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/95 backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-white/90 font-sans font-light text-sm sm:text-base leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex items-center flex-wrap gap-4 mt-auto">
            {/* Secondary: Coming Soon */}
            {/* <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold bg-white/10 border border-white/25 text-white backdrop-blur-md shadow-md cursor-default select-none">
              <RiLockLine className="text-sm text-white/80" />
              Coming Soon
            </span> */}

            {/* Primary Action Button */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold bg-white text-[#1c7ced] hover:bg-[#F8FAFC] hover:shadow-lg transition-all duration-300 group/btn shadow-md"
            >
              View Live
              <RiArrowRightUpLine className="text-lg group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </a>

            {/* GitHub Icon Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-800 hover:border-white transition-all duration-300 shadow-md"
              title="View GitHub Repository"
            >
              <RiGithubLine size={18} />
            </a>
          </div>
        </div>

        {/* Mockup Container (Right) - floats outside the glass card */}
        <div className="w-full lg:w-[40%] flex justify-center relative min-h-[300px] md:min-h-[400px] z-10">
          <img
            src={project.image}
            alt={`${project.title} Mockup`}
            className="project-card-image w-[280px] sm:w-[340px] md:w-[380px] lg:w-[400px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] select-none pointer-events-none z-10"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
