import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Dynamic GSAP context for clean scoping and automatic cleanup
    let ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards || cards.length === 0) return;

      // Responsive GSAP animations using matchMedia
      const mm = gsap.matchMedia();

      // Desktop layout: Apply premium sticky card stacking
      mm.add("(min-width: 1024px)", () => {
        // Stacking scale and opacity fades
        cards.forEach((card, index) => {
          if (index === cards.length - 1) return; // Skip the last card

          const nextCard = cards[index + 1];
          if (!nextCard) return;

          // Target is the inner content card wrapper containing the sky bg
          const cardContent = card.querySelector(".project-card-content");
          if (!cardContent) return;

          // Scale down (to 0.96) and fade (to 0.55) as the next card covers it
          gsap.to(cardContent, {
            scale: 0.96,
            opacity: 0.55,
            yPercent: -3,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              // Start when the top of the next card reaches the bottom of the current sticky card
              start: () => {
                const height = cardContent.offsetHeight;
                return `top ${80 + height}px`;
              },
              // End when the next card is fully stuck at 80px
              end: "top 80px",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      // Cleanup
      return () => mm.revert();
    }, containerRef);

    return () => {
      ctx.revert();
      // Ensure ScrollTrigger parses new page heights correctly on transition
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="pt-10 md:pt-16 pb-24 md:pb-32 relative bg-white select-none"
    >
      {/* Header Container (centered, constrained max width) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="text-center">
          <div className="flex items-center gap-1.5 justify-center text-xs font-sans font-bold uppercase tracking-widest text-slate-500 select-none mb-3">
            <span className="text-[#1B8AE5] text-sm">✦</span> Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 leading-tight">
            check out some of my work
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 max-w-xl mx-auto font-light leading-relaxed">
            A handpicked selection of products I've helped build, combining clean code with premium user experiences.
          </p>
        </div>
      </div>

      {/* Cards Stack Container (Full Width) */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 flex flex-col pointer-events-none">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            innerRef={(el) => (cardsRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
}
