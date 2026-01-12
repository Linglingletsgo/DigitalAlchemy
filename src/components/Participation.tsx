"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Participation() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
        const response = await fetch("https://formspree.io/f/xojjqljk", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus("success");
            form.reset();
            setEmail("");
        } else {
            console.error("Formspree submission error");
            setStatus("error");
        }
    } catch (error) {
        console.error("Network error:", error);
        setStatus("error");
    }
  };

  return (
    <section id="participation" className="min-h-[70vh] bg-alchemy-dark flex flex-col items-center justify-center py-20 px-6 border-t border-white/5">
      <div className="max-w-xl w-full text-center space-y-12">
         {/* Header & Intro */}
         <div className="space-y-8">
           <motion.h2 
            className="font-serif text-3xl md:text-4xl text-alchemy-gold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {language === "CN" ? "参与" : "PARTICIPATION"}
          </motion.h2>

          <motion.p
             className="text-neutral-400 font-serif leading-relaxed"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
          >
            {language === "CN" 
              ? "如果您感兴趣，请在此注册您的邮箱，我们将与您联系。" 
              : "If you are interested, sign up your email here and we will be in touch."}
          </motion.p>
         </div>

        {/* Signup Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          // ACTION URL PLACEHOLDER - User to replace
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <div className="relative">
            <input 
              type="email" 
              name="email"
              placeholder={language === "CN" ? "输入您的邮箱" : "ENTER YOUR EMAIL"}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-neutral-700 py-3 text-center text-white focus:outline-none focus:border-alchemy-gold transition-colors font-mono tracking-wider placeholder:text-neutral-700"
            />
          </div>
          
          <button 
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="mt-6 px-8 py-3 bg-white/5 hover:bg-alchemy-gold/10 border border-white/10 hover:border-alchemy-gold/50 text-alchemy-gold transition-all uppercase tracking-[0.2em] font-sans text-sm"
          >
            {status === "submitting" 
              ? (language === "CN" ? "传输中..." : "TRANSMITTING...") 
              : status === "success" 
                ? (language === "CN" ? "信号已接收" : "SIGNAL RECEIVED") 
                : (language === "CN" ? "启动" : "INITIATE")}
          </button>
        </motion.form>

        {/* Location Section */}
        <motion.div
           className="space-y-6 pt-12 border-t border-white/10 w-full"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
        >
           <div className="flex flex-col items-center gap-6">
              <div className="relative w-full max-w-lg aspect-video border border-white/10 bg-neutral-900 overflow-hidden">
                 <img 
                   src="/base.png" 
                   alt="Base Location" 
                   className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" 
                 />
              </div>
              <div className="text-center space-y-2">
                 <h3 className="text-alchemy-gold font-mono text-xs tracking-widest">
                    {language === "CN" ? "位置" : "LOCATION"}
                 </h3>
                 <p className="text-neutral-300 font-serif text-xl tracking-wide">
                    SE2 London
                 </p>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
