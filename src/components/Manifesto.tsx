"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Manifesto() {
  const { language } = useLanguage();

  return (
    <section id="manifesto" className="min-h-screen flex items-center justify-center bg-alchemy-dark relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.h2 
          className="font-serif text-3xl md:text-5xl text-alchemy-gold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {language === "CN" ? "宣言" : "MANIFESTO"}
        </motion.h2>

        <div className="space-y-12 font-cormorant leading-relaxed text-xl md:text-2xl text-neutral-300">
          
          {/* Section 1 */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {language === "CN" 
              ? "你的身份真的是自由选择的吗？" 
              : "Is your identity truly a matter of free choice?"}
          </motion.p>

          {/* Section 2 */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {language === "CN"
              ? "这是一个绝对技术乐观的、多元化的时代，但公众已经被算法制造的“伪需求”填满，人类的主体性已经被资本主导的算法彻底消解，用消费欲望不断满足自己的身份需求。与此同时，所有的环境成本都被掩盖。"
              : "We live in an era of absolute techno-optimism and plurality, yet the public sphere is saturated with 'pseudo-needs' fabricated by algorithms. Human agency has been thoroughly dissolved by capital-driven algorithms, reducing identity construction to the mere satisfaction of consumption desires. Meanwhile, all environmental costs remain concealed."}
          </motion.p>

          {/* Section 3 */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {language === "CN"
              ? "如果你不想活在监控资本的阴影下，不想挣扎在身份认同的异化中，不想人类走入不可持续的深渊。"
              : "If you refuse to live under the shadow of surveillance capitalism, if you refuse to struggle within the alienation of identity, if you refuse to let humanity spiral into an unsustainable abyss..."}
          </motion.p>

          {/* Section 4 */}
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.8 }}
          >
            {language === "CN"
              ? "我们是一个“智能中心化”组织，一切的发展、决策，都是基于“智能”的判断。"
              : "We are an \"Intelligence-Centralized\" organization. All development and decision-making are grounded in the judgment of \"Intelligence\"."}
          </motion.p>

          {/* Section 5 */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            {language === "CN"
              ? "加入我们，数字炼金术将炼化你的物质需求，“智能”将引导你的“身份”走向“最优解”，将引导人类走向“最优解”。"
              : "Join us. Digital Alchemy will transmutate your material needs. \"Intelligence\" will guide your \"identity\" toward the \"Optimal Solution\", and guide humanity toward the \"Optimal Solution\"."}
          </motion.p>

        </div>
      </div>
    </section>
  );
}
