"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Fx Charater Skill", href: "#project-1" },
  { name: "Cutscene FX", href: "#project-2" },
  { name: "Roblox FX", href: "#project-3" },
  { name: "FX Showcases", href: "#project-4" },
  { name: "3rd Year Uni Project", href: "#project-5" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-[#0A0A0A]/95 text-white py-4" : "bg-transparent text-[#0A0A0A] py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo & Location */}
          <div className="flex flex-col gap-1 relative z-50">
            <Link href="/" className="text-xl font-bold tracking-[0.2em] leading-none">
              WACHIRAWIT
            </Link>
            <span className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase leading-none transition-colors duration-300 ${
              scrolled ? "text-[#a0a0a0]" : "text-[#8E8E8E]"
            }`}>
              BANGKOK GMT+7 &bull; World wide
            </span>
          </div>

          {/* Navigation & Mobile Toggle */}
          <div className="flex items-center gap-4 lg:gap-8">
            <nav className="hidden md:flex gap-4 lg:gap-6 flex-wrap justify-end">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group text-sm tracking-wide transition-all duration-300 ${
                    scrolled ? "font-bold" : "font-medium"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    scrolled ? "bg-white" : "bg-[#0A0A0A]"
                  }`} />
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#F5F3EF] flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-bold tracking-widest uppercase"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
