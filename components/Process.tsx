"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Inquiry",
    desc: "Reach out to us for personalized workshop or training requirements."
  },
  {
    num: "02",
    title: "Curriculum",
    desc: "We tailor the training modules based on your skill level and goals."
  },
  {
    num: "03",
    title: "Hands-on Training",
    desc: "Dive deep into hardware and software with live sessions and debugging."
  },
  {
    num: "04",
    title: "Project Launch",
    desc: "Finalize your prototype and get certified with a functional project."
  }
];

export default function Process() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
            >
              HOW WE <span className="text-sparkGold-500">WORK</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-400 text-xl"
            >
              A streamlined, transparent process from your first click to the final prototype.
            </motion.p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-sparkGold-500/50 to-transparent mx-12" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-white/5 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="w-24 h-24 rounded-3xl bg-slate-900 border border-white/5 flex items-center justify-center text-4xl font-black text-slate-800 mb-8 group-hover:bg-sparkGold-500 group-hover:text-sparkBlue-950 transition-all duration-500 group-hover:scale-110 shadow-2xl">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-sparkGold-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
