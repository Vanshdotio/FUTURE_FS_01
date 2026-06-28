import React from "react";
import { motion } from "framer-motion";
import { RiDownloadLine, RiLinkedinLine, RiGithubLine, RiPhoneLine, RiMailLine } from "react-icons/ri";
import resumePdf from "../../assets/pdf/Vansh_Sharma_resume.pdf";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative w-full min-h-screen bg-[#F8FAFC] py-28 md:py-36 px-4 sm:px-6 overflow-hidden"
    >
      {/* Header Area */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-5"
        >
          <span className="text-[#1B8AE5] text-sm">✦</span>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#1B8AE5]">
            Resume
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[Helvetica_Now_Display] text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight"
        >
          oh sure, let's keep it formal
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-500 font-sans text-sm md:text-base max-w-md mx-auto mt-4 leading-relaxed"
        >
          For recruiters, hiring managers, and anyone who prefers the short version.
        </motion.p>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7"
        >
          <a
            href={resumePdf}
            download
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 text-slate-800 font-sans text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <RiDownloadLine className="text-base text-[#1B8AE5] group-hover:scale-110 transition-transform duration-300" />
            Download
          </a>
        </motion.div>
      </div>

      {/* Resume Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 sm:p-10 md:p-12 relative overflow-hidden">
          
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1B8AE5] via-[#4da9f7] to-[#1B8AE5]" />

          {/* ===== NAME & CONTACT ===== */}
          <div className="text-center mb-6 pb-5 border-b border-slate-100">
            <h3 className="font-[Helvetica_Now_Display] text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Vansh Sharma
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-3 text-slate-500 text-xs sm:text-sm font-sans">
              <span className="flex items-center gap-1.5">
                <RiPhoneLine className="text-[#1B8AE5]" />
                9654043422
              </span>
              <span className="flex items-center gap-1.5">
                <RiMailLine className="text-[#1B8AE5]" />
                vanshsharma0963@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <RiLinkedinLine className="text-[#1B8AE5]" />
                vanshdotio
              </span>
              <span className="flex items-center gap-1.5">
                <RiGithubLine className="text-[#1B8AE5]" />
                vanshdotio
              </span>
            </div>
          </div>

          {/* ===== EDUCATION ===== */}
          <ResumeSection title="Education">
            <EducationItem
              school="Ajay Kumar Garg Engineering College"
              degree="Pursuing Bachelor of Technology in Computer Science"
              location="Delhi Meerut Expressway Ghaziabad-201015"
              date="September 2025 – Current"
            />
            <EducationItem
              school="H R Institute of Engineering and Technology (CGPA: 7.0)"
              degree="Diploma in Computer Science Engineering"
              location="Meerut Rd Ghaziabad, Uttar Pradesh 201003"
              date="June 2022 – July 2025"
            />
            <EducationItem
              school="Govt. Boys Sr. Sec. School"
              degree="High School (10th)"
              location="New Seemapuri, New Delhi-95"
              date="May 2021 – March 2022"
            />
          </ResumeSection>

          {/* ===== SKILLS ===== */}
          <ResumeSection title="Skills">
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              <p><strong className="text-slate-800">Programming Languages:</strong> Python(Basic), JavaScript(ES6+)</p>
              <p><strong className="text-slate-800">Frontend Technologies/Framework:</strong> HTML5, CSS3, SCSS, ReactJS, JavaScript</p>
              <p><strong className="text-slate-800">Backend Technologies/Frameworks:</strong> ExpressJS, NodeJS</p>
              <p><strong className="text-slate-800">Database:</strong> MongoDB</p>
              <p><strong className="text-slate-800">Developer Tools:</strong> VS Code, Postman, Git</p>
              <p><strong className="text-slate-800">Version Controls:</strong> Git and GitHub</p>
              <p><strong className="text-slate-800">GenerativeAI / AI Tools:</strong> Google Gemini API</p>
              <p><strong className="text-slate-800">Soft Skills:</strong> Teamwork, Collaboration, Adaptability, Leadership, Creative & Innovation, Problem Solving</p>
            </div>
          </ResumeSection>

          {/* ===== PROJECTS ===== */}
          <ResumeSection title="Projects">
            <ProjectItem
              name="Moody Player"
              tech="MongoDB, ExpressJS, ReactJS, NodeJS, Face-api.js"
              date="August 2025"
              bullets={[
                "Built a dynamic backend using Node.js and Express.js, seamlessly integrated with MongoDB for efficient data management.",
                "Designed an engaging React-based frontend with Tailwind CSS, enhancing user experience and responsiveness.",
                "Developed robust RESTful APIs to handle authentication, data storage, and retrieval processes.",
                "Integrated advanced machine learning models to enable real-time mood detection and analysis.",
              ]}
            />
            <ProjectItem
              name="MoviGenix"
              tech="ReactJS, Tailwindcss, NodeJS, ExpressJS, MongoDB"
              date="November 2025"
              bullets={[
                "Premium Dark-Themed Streaming Hub that offers a visually stunning, glassmorphic UI for browsing and watching movies, TV shows, anime, and cartoons without clutter.",
                "Personalization & Categorization that automatically sorts content into tailored genre sliders while delivering personalized recommendations based on user interests.",
                "Dual Auth & Active Session Handler that supports both traditional email and Google OAuth logins, securing user accounts with JWTs and capturing live session heartbeats.",
              ]}
            />
            <ProjectItem
              name="SwiftSupport"
              tech="ReactJS, Tailwindcss, NodeJS, ExpressJS, MongoDB"
              date="November 2025"
              bullets={[
                "AI-powered customer support chatbot that instantly searches the Knowledge Base and provides accurate responses without requiring human intervention.",
                "Automatic ticket escalation system that creates and assigns support tickets whenever the AI cannot resolve a customer's query.",
                "Role-based dashboards for Admins, Agents, and Customers, ensuring organized support management, secure access control, and efficient workflow handling.",
              ]}
            />
          </ResumeSection>

          {/* ===== COURSE ===== */}
          <ResumeSection title="Course" noBorder>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              <strong className="text-slate-800">Job Ready AI Powered Cohort:</strong> Complete Web Development + DSA + Aptitude
            </p>
          </ResumeSection>

        </div>
      </motion.div>
    </section>
  );
}

/* ─── Sub-Components ─── */

function ResumeSection({ title, children, noBorder = false }) {
  return (
    <div className={`${noBorder ? "" : "mb-5 pb-5 border-b border-slate-100"}`}>
      <h4 className="font-[Helvetica_Now_Display] text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1B8AE5] inline-block" />
        {title}
      </h4>
      {children}
    </div>
  );
}

function EducationItem({ school, degree, location, date }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
        <p className="font-sans text-xs sm:text-sm font-bold text-slate-800">{school}</p>
        <span className="font-sans text-[11px] sm:text-xs text-slate-400 font-medium whitespace-nowrap">{date}</span>
      </div>
      <p className="font-sans text-xs sm:text-sm text-slate-600 italic">{degree}</p>
      <p className="font-sans text-[11px] sm:text-xs text-slate-400">{location}</p>
    </div>
  );
}

function ProjectItem({ name, tech, date, bullets }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
        <p className="font-sans text-xs sm:text-sm font-bold text-slate-800">
          {name} <span className="font-normal text-slate-400">| {tech}</span>
        </p>
        <span className="font-sans text-[11px] sm:text-xs text-slate-400 font-medium whitespace-nowrap">{date}</span>
      </div>
      <ul className="mt-1.5 space-y-1 list-disc list-outside ml-4">
        {bullets.map((b, i) => (
          <li key={i} className="font-sans text-[11px] sm:text-xs text-slate-600 leading-relaxed">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
