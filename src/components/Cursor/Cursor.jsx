import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isInSkills, setIsInSkills] = useState(false);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configuration for the smooth lag-follow outer circle
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile/touch devices
    const checkDevice = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
    };
    checkDevice();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Check if cursor is hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const inSkills = !!target.closest("#skills");
      setIsInSkills(inSkills);

      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") || 
        target.classList.contains("clickable") ||
        target.closest(".clickable");
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile || isInSkills) return null;

  return (
    <>
      {/* Outer follow circle */}
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
          scale: isHovered ? 2.5 : 1,
          borderColor: isHovered ? "#60A5FA" : "#1B8AE5",
          backgroundColor: isHovered ? "rgba(45, 140, 255, 0.1)" : "rgba(45, 140, 255, 0.05)"
        }}
      />
      
      {/* Inner precise dot */}
      <motion.div
        className="custom-cursor-dot hidden md:block"
        style={{
          left: mouseX,
          top: mouseY,
          scale: isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? "#60A5FA" : "#1B8AE5"
        }}
      />

      {/* Large radial ambient follow glow */}
      <motion.div
        className="custom-cursor-glow hidden md:block"
        style={{
          left: mouseX,
          top: mouseY
        }}
      />
    </>
  );
}
