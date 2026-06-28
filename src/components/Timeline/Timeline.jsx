import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "../../data/portfolioData";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const mm = gsap.matchMedia();

      // Desktop layout: Apply GSAP pinning and horizontal scrolling
      mm.add("(min-width: 1024px)", () => {
        const totalScroll = scrollContainer.scrollWidth - window.innerWidth;

        gsap.to(scrollContainer, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 0.5,
            start: "top top",
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
            preventOverlaps: "timelinePin",
            fastScrollEnd: true
          },
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-24 w-full h-screen md:py-32 lg:py-0 relative overflow-hidden bg-white select-none lg:h-screen lg:flex lg:flex-col lg:justify-center"
    >
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center mb-6 lg:mb-8">
        <p className="text-[#1B8AE5] font-sans font-bold tracking-widest text-xs uppercase mb-2">
          Milestones
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
          the journey so far
        </h2>
        <p className="text-slate-500 font-sans text-sm md:text-base max-w-lg mt-2 mx-auto font-light leading-relaxed">
          A timeline showing my professional evolution, key engineering learnings, and achievements.
        </p>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="w-full overflow-x-auto overflow-y-hidden lg:overflow-x-hidden timeline-scroll-container">
        <div
          ref={scrollContainerRef}
          className="timeline-scroll flex items-center gap-12 lg:gap-20 px-[8vw] lg:px-[25vw] relative py-12 min-w-max h-[530px]"
        >
          {/* Central Track Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-100 -translate-y-1/2 z-0" />

          {/* Timeline Nodes */}
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            const isPresent = index === timeline.length - 1;

            return (
              <div
                key={`${item.year}-${index}`}
                className="relative flex flex-col items-center justify-center h-[390px] sm:h-[450px] w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0"
              >
                {/* Vertical connector line */}
                <div className="absolute top-8 bottom-8 w-[1px] border-l-2 border-dashed border-slate-200 z-10" />

                {/* Central Dot on the line */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white z-30 shadow-md ${
                    isPresent
                      ? "bg-green-500 shadow-green-500/50"
                      : "bg-[#1B8AE5] shadow-blue-500/50"
                  }`}
                />

                {/* Alternating bubble and content card */}
                {isEven ? (
                  <>
                    {/* Date Bubble (Top) */}
                    <div className="absolute top-2 z-20">
                      <span
                        className={`rounded-full px-4.5 py-1.5 text-xs font-semibold shadow-sm border ${
                          isPresent
                            ? "bg-green-50 text-green-600 border-green-100"
                            : "bg-blue-50 text-blue-600 border-blue-100/50"
                        }`}
                      >
                        {isPresent ? "2026 - Present" : item.year}
                      </span>
                    </div>

                    {/* Content Card (Bottom) */}
                    <div className="absolute bottom-2 z-20 w-full">
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-slate-200/80 transition-all duration-300">
                        <div className="flex items-center gap-3.5 mb-3">
                          <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-sm ${
                            isPresent
                              ? "bg-green-50 border-green-100 text-green-500"
                              : "bg-blue-50 border-blue-100 text-[#1B8AE5]"
                          }`}>
                            ✦
                          </div>
                          <div className="flex flex-col">
                            <span className="font-sans font-bold text-slate-800 text-sm">
                              {item.title}
                            </span>
                            <span className="font-sans text-slate-400 text-[10px] font-semibold uppercase tracking-wider">
                              Milestone {index + 1}
                            </span>
                          </div>
                        </div>
                        <p className="font-sans font-light text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content Card (Top) */}
                    <div className="absolute top-2 z-20 w-full">
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-slate-200/80 transition-all duration-300">
                        <div className="flex items-center gap-3.5 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1B8AE5] font-bold text-sm">
                            ✦
                          </div>
                          <div className="flex flex-col">
                            <span className="font-sans font-bold text-slate-800 text-sm">
                              {item.title}
                            </span>
                            <span className="font-sans text-slate-400 text-[10px] font-semibold uppercase tracking-wider">
                              Milestone {index + 1}
                            </span>
                          </div>
                        </div>
                        <p className="font-sans font-light text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Date Bubble (Bottom) */}
                    <div className="absolute bottom-2 z-20">
                      <span
                        className={`rounded-full px-4.5 py-1.5 text-xs font-semibold shadow-sm border ${
                          isPresent
                            ? "bg-green-50 text-green-600 border-green-100"
                            : "bg-blue-50 text-blue-600 border-blue-100/50"
                        }`}
                      >
                        {isPresent ? "2026 - Present" : item.year}
                      </span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
