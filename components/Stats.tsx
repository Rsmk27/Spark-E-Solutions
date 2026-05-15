"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Students Trained" },
  { value: 10, suffix: "+", label: "Workshops Completed" },
  { value: 3, suffix: "+", label: "Services Offered" },
  { value: 5, suffix: "+", label: "Team Members" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Simple easeOutQuad for smoothness
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-5xl md:text-7xl font-black text-sparkGold-500 mb-4 tabular-nums tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-slate-600 font-black uppercase tracking-[0.4em] text-[10px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
