"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-alchemy-dark/90 backdrop-blur-md border-b border-alchemy-gold/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image src="/logo.svg" alt="Digital Alchemy Logo" fill className="object-contain" />
          </div>
          <span className="font-serif text-xl tracking-widest text-alchemy-gold hidden sm:block">
            DIGITAL ALCHEMY
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest font-sans">
          <Link href="/manifesto" className="hover:text-alchemy-gold transition-colors">
            {language === "CN" ? "宣言" : "MANIFESTO"}
          </Link>
          <Link href="/film" className="hover:text-alchemy-gold transition-colors">
            {language === "CN" ? "影像" : "FILM"}
          </Link>
          <Link href="/technology-disclosure" className="hover:text-alchemy-gold transition-colors">
            {language === "CN" ? "技术披露" : "TECHNOLOGY DISCLOSURE"}
          </Link>
          <Link href="/invocation" className="hover:text-alchemy-gold transition-colors">
            {language === "CN" ? "祷词" : "INVOCATION"}
          </Link>
          <Link href="/participation" className="px-5 py-2 border border-alchemy-gold text-alchemy-gold hover:bg-alchemy-gold hover:text-black transition-all">
            {language === "CN" ? "加入我们" : "JOIN US"}
          </Link>
          
          <button 
            onClick={toggleLanguage}
            className="ml-4 font-mono text-xs border border-white/20 px-3 py-1 rounded hover:bg-white/10 transition-colors"
          >
            {language === "CN" ? "En" : "中"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
