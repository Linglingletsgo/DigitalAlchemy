"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const directory = [
  { name: "MANIFESTO", cnName: "宣言", path: "/manifesto", id: "01" },
  { name: "FILM", cnName: "影像", path: "/film", id: "02" },
  { name: "TECHNOLOGY DISCLOSURE", cnName: "技术披露", path: "/technology-disclosure", id: "03" },
  { name: "INVOCATION", cnName: "祷词", path: "/invocation", id: "04" },
  { name: "PARTICIPATION", cnName: "参与", path: "/participation", id: "05" },
];

export default function Home() {
  const { language } = useLanguage();
  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-6">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black pointer-events-none" />

      <div className="z-10 w-full max-w-4xl space-y-16">
        
        {/* Header */}
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           <div className="relative w-20 h-20 mx-auto mb-6">
              <Image src="/logo.svg" alt="Logo" fill className="object-contain opacity-80" />
           </div>
           <h1 className="font-serif text-4xl md:text-6xl text-alchemy-gold tracking-[0.2em]">
             DIGITAL ALCHEMY
           </h1>

        </motion.div>

        {/* Directory List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-sans tracking-widest">
          {directory.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link 
                href={item.path}
                className="group flex items-center justify-between border-b border-white/10 py-4 hover:border-alchemy-gold/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-neutral-600 group-hover:text-alchemy-gold transition-colors">
                    {item.id}
                  </span>
                  <span className="text-xl text-neutral-300 group-hover:text-white transition-colors">
                    {language === "CN" ? item.cnName : item.name}
                  </span>
                </div>
                <span className="text-alchemy-gold opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Footer Note */}
      <div className="absolute bottom-8 text-neutral-700 text-[10px] font-mono tracking-[0.2em]">
        SYSTEM STATUS: ONLINE
      </div>
    </main>
  );
}
