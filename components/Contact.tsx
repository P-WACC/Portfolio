"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export function Contact() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const h = rect.width / 2;
      
      // Calculate distance from center of button
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - h;

      // Magnetic radius
      if (Math.abs(x) < h * 2 && Math.abs(y) < h * 2) {
        gsap.to(button, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.5,
          ease: "power4.out",
        });
      } else {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (button) button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="contact" className="relative w-full h-[80vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Animated Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-900/40 via-blue-900/40 to-transparent rounded-full blur-3xl animate-pulse mix-blend-screen" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-orange-900/30 via-red-900/20 to-transparent rounded-full blur-3xl animate-pulse mix-blend-screen" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 flex flex-col items-center gap-12 px-6" ref={containerRef}>
        <h2 className="text-6xl md:text-[120px] font-black tracking-tighter text-white mix-blend-difference text-center leading-[0.9]">
          Let's Build<br />The Future.
        </h2>

        <div className="p-12 cursor-pointer relative">
          <button 
            ref={buttonRef}
            className="w-48 h-48 rounded-full bg-white text-black font-bold tracking-widest uppercase text-sm flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl relative z-20"
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}
