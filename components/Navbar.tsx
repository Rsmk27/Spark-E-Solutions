"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-sparkGold-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div
        className={cn(
          "max-w-6xl mx-auto rounded-2xl transition-all duration-300 flex items-center justify-between px-6 py-3",
          isScrolled ? "glass shadow-lg" : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Spark E-Solutions Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className={cn(
            "font-display font-black text-xl tracking-tighter transition-colors text-white"
          )}>
            SPARK <span className="text-sparkGold-500">E-S</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Process", "Gallery"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-slate-300 hover:text-sparkGold-500 transition-colors text-sm font-heading font-bold uppercase tracking-wider relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sparkGold-500 transition-all group-hover:w-full" />
            </a>
          ))}
          <Link
            href="/book"
            className="bg-sparkGold-500 hover:bg-sparkGold-400 text-sparkBlue-950 font-heading font-black px-6 py-2.5 rounded-full transition-all hover:scale-105 text-sm shadow-[0_4px_10px_rgba(255,193,0,0.2)]"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
