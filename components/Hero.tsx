"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Cpu } from "lucide-react";

export default function Hero() {
  const line1 = "SPARK";
  const line2 = "E-SOLUTIONS";
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-20">
        <Image 
          src="/bg-hero.png" 
          alt="Tech Background" 
          fill 
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      {/* Grid & Gradient Overlays */}
      <div className="absolute inset-0 bg-grid-white -z-10 opacity-30" />
      <div className="absolute inset-0 hero-gradient -z-20" />
      
      {/* Background orbs */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sparkBlue-500/10 rounded-full blur-[120px] -z-10" 
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm mb-12 text-sparkGold-400 text-xs font-black uppercase tracking-[0.2em] border border-white/5"
        >
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>Innovate • Educate • Scale</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-10 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Spark E-Solutions Logo"
              width={120}
              height={120}
              className="relative w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl"
              priority
            />
          </div>
        </motion.div>

        <div className="mb-10 px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center overflow-visible"
          >
            {line1.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                className="text-5xl md:text-[6.5rem] font-black tracking-tight leading-[1] text-white py-1 px-1 inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            custom={1}
            className="flex flex-wrap justify-center overflow-visible"
          >
            {line2.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                className="text-5xl md:text-[6.5rem] font-black tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-sparkGold-300 to-sparkGold-600 py-1 px-1"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
        >
          Bridging the gap between <span className="text-white font-bold">Hardware Concepts</span> and <span className="text-white font-bold">Industrial Reality</span>. Elite IoT training for the next generation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/book"
            className="group relative flex items-center gap-3 bg-sparkGold-500 hover:bg-sparkGold-400 text-sparkBlue-950 font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-xl text-xl"
          >
            Start Your Batch <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#services"
            className="flex items-center gap-3 px-10 py-5 rounded-full text-white bg-white/5 hover:bg-white/10 font-bold transition-all text-xl border border-white/5"
          >
            Explore Tech
          </a>
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 text-slate-600">
          {[
            { icon: <Cpu className="w-4 h-4" />, label: "EMBEDDED" },
            { icon: <Globe className="w-4 h-4" />, label: "CLOUD" },
            { icon: <Zap className="w-4 h-4" />, label: "IOT" }
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + (i * 0.1) }}
              className="flex items-center gap-2"
            >
              {item.icon}
              <span className="font-black text-[9px] tracking-[0.4em]">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border border-white/10 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-sparkGold-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
