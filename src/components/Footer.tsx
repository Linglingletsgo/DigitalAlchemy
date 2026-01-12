"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="py-8 bg-black text-center border-t border-white/5">
      <p className="text-neutral-700 text-xs font-mono tracking-widest">
        &copy; {new Date().getFullYear()} {language === "CN" ? "数字炼金术. 版权所有." : "DIGITAL ALCHEMY. ALL RIGHTS RESERVED."}
      </p>
    </footer>
  );
}
