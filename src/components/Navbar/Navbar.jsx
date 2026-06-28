import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import avatarImg from "../../assets/image/avatar.jpg";

export default function Navbar() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsScrolledDown(true);
        } else {
          // Scrolling up
          setIsScrolledDown(false);
        }
      } else {
        // At the top
        setIsScrolledDown(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({ top: target.offsetTop - 90, behavior: "smooth" });
        }
      }, 300);
    } else {
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 90, behavior: "smooth" });
      }
    }
  };

  const isCollapsed = isScrolledDown && !isHovered;

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-[Zalando] flex justify-center p-6 select-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full transition-all duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCollapsed ? "max-w-[235px]" : "max-w-[400px]"
        } bg-gradient-to-r from-white/85 via-white/45 to-white/18 border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.01)] rounded-full pl-3 pr-6 py-2.5 flex items-center justify-between overflow-hidden`}
        style={{
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)"
        }}
      >
        {/* Left Side: Circular Avatar + Name Button */}
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2.5 cursor-pointer border-none bg-transparent outline-none focus:outline-none p-0 text-left flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-slate-200/60 overflow-hidden border border-slate-200/80 flex items-center justify-center relative shadow-sm flex-shrink-0">
            <img
              src={avatarImg}
              alt="Vansh Headshot"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="font-zalando font-black text-[13px] tracking-widest text-slate-950 uppercase cursor-pointer flex-shrink-0">
            VANSH
          </span>
        </button>

        {/* Right Side: Menu Button Links OR Three Dots */}
        <div className="flex items-center flex-shrink-0">
          {isCollapsed ? (
            <motion.button
              key="dots"
              initial={{ opacity: 0, scale: 0.6, x: 15 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setIsHovered(true)}
              className="flex items-center justify-center cursor-pointer text-slate-950 font-black text-xl tracking-wider select-none pr-1 border-none bg-transparent outline-none focus:outline-none flex-shrink-0"
            >
              •••
            </motion.button>
          ) : (
            <motion.div
              key="links"
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 flex-shrink-0"
            >
              <button
                onClick={() => handleNavClick("#projects")}
                className="font-sans text-[13px] font-semibold text-slate-700 hover:text-slate-950 transition-colors duration-200 cursor-pointer border-none bg-transparent outline-none focus:outline-none p-0"
              >
                Work
              </button>
              <button
                onClick={() => handleNavClick("#about")}
                className="font-sans text-[13px] font-semibold text-slate-700 hover:text-slate-950 transition-colors duration-200 cursor-pointer border-none bg-transparent outline-none focus:outline-none p-0"
              >
                About
              </button>
              <Link
                to="/resume"
                className="font-sans text-[13px] font-semibold text-slate-700 hover:text-slate-950 transition-colors duration-200 cursor-pointer border-none bg-transparent outline-none focus:outline-none p-0"
              >
                Resume
              </Link>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </header>
  );
}
