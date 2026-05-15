"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Zap className="w-8 h-8 text-sparkGold-400" />,
    title: "IoT Basics",
    description:
      "Hands-on training with DHT, LDR, IR sensors and more. Build real-world IoT prototypes from the ground up.",
    features: ["Sensor Integration", "Real-time Monitoring", "Data Protocols", "NodeMCU/ESP32"],
    color: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    title: "Embedded Systems",
    description:
      "Learn microcontroller programming, circuit design, and firmware development for industrial applications.",
    features: ["ARM Cortex-M", "PCB Design Basics", "Bare-metal Programming", "RTOS Fundamentals"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    title: "Full Stack IoT",
    description:
      "Build complete web and mobile applications that interface with IoT hardware and cloud services.",
    features: ["MQTT & HTTP APIs", "Cloud Dashboards", "React/Next.js Apps", "Firebase/MongoDB"],
    color: "from-purple-500/10 to-pink-500/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sparkGold-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            OUR <span className="text-sparkGold-500">SERVICES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Comprehensive training modules and technical solutions designed for the modern engineering landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="group relative flex flex-col p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 overflow-hidden h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-105 transition-all duration-500 border border-white/5">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-sparkGold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-10 group-hover:text-slate-400 transition-colors">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <div className="space-y-4 mb-10">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-3 text-[13px] text-slate-600 group-hover:text-slate-400 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-sparkGold-500/30 group-hover:text-sparkGold-500/60 transition-colors" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/book"
                    className="flex items-center justify-between w-full p-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-black text-sm transition-all group/btn border border-white/5"
                  >
                    <span>VIEW CURRICULUM</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
