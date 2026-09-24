"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    { title: "Internship Technical Artist", desc: "Jumbo Jumps • May 2026 - Present" },
    { title: "VFX Artist", desc: "Personal Project • 2025 - 2026" },
    { title: "Game Designer", desc: "University Projects • 2024 - 2025" },
  ];

  return (
    <section id="experience" className="w-full border-b border-[#d1cfc9] bg-[#F5F3EF] py-32 overflow-hidden">
      <div className="container mx-auto px-6" ref={containerRef}>
        <h2 className="text-xs uppercase tracking-[0.3em] text-[#8E8E8E] font-semibold mb-12">Experience</h2>
        
        <div className="flex flex-col border-t border-[#d1cfc9] max-w-4xl">
          {experiences.map((item, i) => (
            <div 
              key={i} 
              ref={(el) => { itemsRef.current[i] = el; }}
              className="py-8 border-b border-[#d1cfc9] flex flex-col gap-2"
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-black">{item.title}</span>
              <span className="text-base md:text-lg font-medium text-[#8E8E8E]">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
