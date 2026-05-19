"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
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

  const child: Variants = {
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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 pb-10 overflow-hidden bg-transparent">
      {/* Subtle Hero-specific gradient overlay (now transparent at edges) */}
      <div className="absolute inset-0 hero-gradient -z-10" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm mb-6 md:mb-10 text-sparkGold-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] border border-white/5 shrink-0"
        >
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>Innovate • Educate • Scale</span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-6 md:mb-10 flex justify-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Spark E-Solutions Logo"
            width={100}
            height={100}
            className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-xl"
            priority
          />
        </motion.div>

        {/* Title */}
        <div className="mb-6 md:mb-10 px-4 shrink-0">
          <h1 className="sr-only">Spark E-Solutions</h1>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center overflow-visible"
            aria-hidden="true"
          >
            {line1.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                className="text-4xl sm:text-6xl md:text-[5.5rem] font-display font-black tracking-tighter leading-[1] text-white py-1 px-1 inline-block cursor-default select-none"
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
            className="flex flex-wrap justify-center mt-2 md:mt-4 overflow-visible"
            aria-hidden="true"
          >
            {line2.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? -5 : 5 }}
                className="text-4xl sm:text-6xl md:text-[5.5rem] font-display font-black tracking-tighter leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-sparkGold-300 to-sparkGold-600 py-1 px-1 inline-block cursor-default select-none"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-sm md:text-lg text-slate-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium px-4"
        >
          Bridging the gap between <span className="text-white font-bold">Hardware Concepts</span> and <span className="text-white font-bold">Industrial Reality</span>. Elite IoT training for the next generation.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 shrink-0"
        >
          <Link
            href="/book"
            className="group relative flex items-center gap-3 bg-sparkGold-500 hover:bg-sparkGold-400 text-sparkBlue-950 font-black px-8 md:px-10 py-4 md:py-5 rounded-full transition-all hover:scale-105 shadow-xl text-lg md:text-xl"
          >
            Start Your Batch <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#services"
            className="flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full text-white bg-white/5 hover:bg-white/10 font-bold transition-all text-lg md:text-xl border border-white/5"
          >
            Explore Tech
          </a>
        </motion.div>

        {/* Bottom Labels */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 text-slate-600 hidden sm:flex shrink-0">
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
              <span className="font-heading font-black text-[9px] tracking-[0.4em] uppercase">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border border-white/10 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-1 h-1 bg-sparkGold-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
