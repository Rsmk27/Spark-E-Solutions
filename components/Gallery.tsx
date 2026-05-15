"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

const images = [
  { src: "/gallery/workshop.png", title: "IoT Workshop", category: "Training" },
  { src: "/gallery/embedded.png", title: "Hardware Design", category: "Engineering" },
  { src: "/gallery/software.png", title: "App Development", category: "Software" },
  { src: "/gallery/workshop.png", title: "Sensor Interfacing", category: "Training" },
  { src: "/gallery/embedded.png", title: "PCB Prototyping", category: "Engineering" },
  { src: "/gallery/software.png", title: "Cloud Integration", category: "Software" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sparkGold-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4"
          >
            Visual Log
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            SESSION <span className="text-sparkGold-500">HIGHLIGHTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl"
          >
            A glimpse into our past workshops, hardware prototypes, and student projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-900 border border-white/5"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-sparkGold-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                  {img.category}
                </span>
                <h3 className="text-white font-black text-2xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </h3>
              </div>
              <div className="absolute top-6 right-6 p-3 rounded-2xl bg-white/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                <ImageIcon className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
