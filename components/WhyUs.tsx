"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Rocket, Award } from "lucide-react";

const reasons = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Industry-First Approach",
    desc: "We don't just teach theory. We solve real-world industrial problems using the latest IoT stacks."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Rapid Prototyping",
    desc: "Go from idea to functional hardware prototype in weeks, not months, with our expert guidance."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Expert Mentorship",
    desc: "Learn directly from engineers who have built and deployed products in the field."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Project Certification",
    desc: "Every workshop ends with a concrete project that adds massive value to your professional portfolio."
  }
];

export default function WhyUs() {
  return (
    <section className="py-32 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sparkGold-500 font-black tracking-widest text-sm uppercase mb-4"
          >
            The Difference
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight"
          >
            WHY <span className="text-sparkGold-500">SPARK</span> <br />
            E-SOLUTIONS?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl leading-relaxed mb-10"
          >
            We bridge the gap between academic learning and industrial requirements. Our mission is to democratize high-end hardware engineering for everyone.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-1 rounded-3xl bg-gradient-to-r from-sparkGold-500/20 to-transparent inline-block"
          >
            <div className="px-8 py-4 bg-slate-950 rounded-[calc(1.5rem-1px)] text-white font-bold">
              1,000+ Hours of Practical Training
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] glass-card border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-sparkGold-500/10 flex items-center justify-center text-sparkGold-500 mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
