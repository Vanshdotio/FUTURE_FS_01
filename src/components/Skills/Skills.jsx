import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../../data/portfolioData";
import TargetCursor from "../TargetCursor";
import * as RiIcons from "react-icons/ri";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cardVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.97 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03
    }
  }
};

const progressBarVariants = {
  initial: { width: 0 },
  hover: { 
    width: "100%", 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const [isSectionHovered, setIsSectionHovered] = useState(false);

  useEffect(() => {
    // Refresh ScrollTrigger to recalculate layout height shifts after tab selection
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 450);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Helper to render dynamically imported icons from react-icons/ri
  const renderIcon = (iconName, colorClass) => {
    const IconComponent = RiIcons[iconName];
    if (IconComponent) {
      return <IconComponent className={`text-2xl ${colorClass}`} />;
    }
    return <RiIcons.RiCodeLine className={`text-2xl ${colorClass}`} />;
  };

  // Merge categories into a single array with category attributes
  const allSkills = useMemo(() => {
    return [
      ...skills.frontend.map(s => ({ ...s, category: "frontend", iconColor: "text-[#1B8AE5]", bgHover: "group-hover:bg-[#1B8AE5]/8", borderHover: "hover:border-[#1B8AE5]/30", shadowHover: "hover:shadow-[0_10px_25px_rgba(27,138,229,0.05)]", barGradient: "from-[#1B8AE5] to-blue-400" })),
      ...skills.backend.map(s => ({ ...s, category: "backend", iconColor: "text-blue-500", bgHover: "group-hover:bg-blue-500/8", borderHover: "hover:border-blue-500/30", shadowHover: "hover:shadow-[0_10px_25px_rgba(59,130,246,0.05)]", barGradient: "from-blue-500 to-blue-400" })),
      ...skills.tools.map(s => ({ ...s, category: "tools", iconColor: "text-indigo-500", bgHover: "group-hover:bg-indigo-500/8", borderHover: "hover:border-indigo-500/30", shadowHover: "hover:shadow-[0_10px_25px_rgba(99,102,241,0.05)]", barGradient: "from-indigo-500 to-indigo-400" }))
    ];
  }, []);

  // Filter skills based on tab selection
  const filteredSkills = useMemo(() => {
    if (activeTab === "all") return allSkills;
    return allSkills.filter(s => s.category === activeTab);
  }, [activeTab, allSkills]);

  return (
    <section
      id="skills"
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
      className="py-24 md:py-32 relative overflow-hidden bg-[#F8FAFC] border-t border-b border-slate-100"
    >
      {/* Soft Glow elements */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#1B8AE5]/4 blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#1B8AE5]/3 blur-3xl pointer-events-none select-none" />

      {/* Target Cursor - Only rendered when mouse is inside the Skills section */}
      {isSectionHovered && (
        <TargetCursor 
          targetSelector=".skill-card" 
          cursorColor="#1B8AE5" 
          cursorColorOnTarget="#1B8AE5" 
        />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2 items-center"
          >
            <p className="text-[#1B8AE5] font-sans font-semibold tracking-widest text-xs uppercase">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 tracking-tight">
              my technical skill set
            </h2>
            <p className="text-slate-500 font-sans text-sm md:text-base max-w-xl mt-2">
              A comprehensive toolkit of languages, frameworks, databases, and design software that I leverage to build scalable software.
            </p>
          </motion.div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center mb-14 relative z-20">
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/40 backdrop-blur-md rounded-full border border-slate-200/50">
            {[
              { id: "all", label: "All Skills" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "tools", label: "Tools" }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2 rounded-full font-sans text-xs md:text-sm font-semibold transition-colors duration-300 cursor-pointer outline-none focus:outline-none ${
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-[#1B8AE5] rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Skills Grid */}
        <motion.div 
          layout 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={`${skill.category}-${skill.name}`}
                variants={cardVariants}
                whileHover="hover"
                className={`skill-card relative overflow-hidden bg-white p-4.5 rounded-2xl border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] ${skill.borderHover} ${skill.shadowHover} flex items-center gap-4 transition-all duration-300 group cursor-pointer`}
              >
                {/* Card Icon */}
                <div className={`p-3.5 rounded-xl bg-slate-50 ${skill.bgHover} transition-colors duration-300 flex-shrink-0`}>
                  {renderIcon(skill.icon, `${skill.iconColor} transition-transform duration-300 group-hover:scale-110`)}
                </div>
                
                {/* Card Text */}
                <div className="text-left">
                  <h4 className="font-sans font-bold text-slate-800 text-[14px] sm:text-[15px] leading-snug">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-400 capitalize mt-0.5 block">
                    {skill.category}
                  </span>
                </div>

                {/* Bottom Interactive Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-100/50 overflow-hidden">
                  <motion.div
                    variants={progressBarVariants}
                    className={`h-full bg-gradient-to-r ${skill.barGradient}`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
