"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { projects, robloxCategories } from "./FeaturedWork";

const allRobloxClips = robloxCategories.flatMap(cat => cat.items.map(item => item.src));

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]); // Parallax scrolling effect
  const [index, setIndex] = useState(0);
  const [currentRobloxClip, setCurrentRobloxClip] = useState(allRobloxClips[0]);

  useEffect(() => {
    // Pick initial random clip on mount
    setCurrentRobloxClip(allRobloxClips[Math.floor(Math.random() * allRobloxClips.length)]);
    
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % 3;
        // When switching TO Roblox FX, pick a new random clip
        if (next === 2) {
          setCurrentRobloxClip(allRobloxClips[Math.floor(Math.random() * allRobloxClips.length)]);
        }
        return next;
      });
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const currentMedia = index === 0 ? projects[0].image : index === 1 ? projects[1].image : currentRobloxClip;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-[#d1cfc9]">
      {/* Background Slideshow */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0 pointer-events-none scale-125">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full"
          >
            {currentMedia.endsWith('.mp4') ? (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={currentMedia} type="video/mp4" />
              </video>
            ) : (
              <img src={currentMedia} alt="Hero background" className="w-full h-full object-cover" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Halftone Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "4px 4px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 85%)"
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 mt-16 flex flex-col items-center gap-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] font-semibold text-black bg-[#F5F3EF]/80 backdrop-blur-md px-6 py-2 rounded-full inline-block border border-black/10"
        >
          Technical Artist &bull; VFX Artist
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl md:text-[140px] leading-none font-black tracking-tighter"
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* Bottom Left Text */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-10 left-6 md:left-10 z-20 max-w-xs md:max-w-sm"
      >
        <p className="text-sm md:text-base font-medium text-[#0A0A0A] leading-relaxed mix-blend-overlay opacity-80">
          i turn concept to effects and make game comes to life making game feel more juice!
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
