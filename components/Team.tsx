"use client";

import { motion } from "framer-motion";
import { Users, Linkedin, FileText } from "lucide-react";

const team = [
  { 
    name: "Chaitanya", 
    role: "Founder & Lead Engineer", 
    icon: "CE",
    resume: "/resumes/chaitanya-resume.pdf",
    linkedin: "https://www.linkedin.com/in/chaitu0303/",
    image: "" 
  },
  { 
    name: "Ramu", 
    role: "Co-founder & Web Lead", 
    icon: "RA",
    resume: "/resumes/ramu-resume.pdf",
    linkedin: "https://www.linkedin.com/in/ramunarlapati/",
    image: ""
  },
  { name: "Anand", role: "Embedded Specialist", icon: "AN", linkedin: "", image: "" },
  { name: "Prem", role: "App Developer", icon: "PR", linkedin: "", image: "" },
  { 
    name: "Manikanta", 
    role: "Frontend Developer", 
    icon: "MA",
    resume: "/resumes/manikanta-resume.pdf",
    linkedin: "https://www.linkedin.com/in/srinivasamanikanta/",
    image: ""
  },
  { 
    name: "DivyaKanth", 
    role: "Strategic Partner", 
    icon: "DK", 
    linkedin: "https://www.linkedin.com/in/divyakanthsiddineni/",
    image: "" 
  },
  { name: "Navya", role: "Strategic Partner", icon: "NA", linkedin: "", image: "" },
];

export default function Team() {
  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-sparkGold-500 mb-4"
            >
              <Users className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase text-sm">Our People</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight"
            >
              MEET THE <span className="text-sparkGold-500">EXPERTS</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg md:text-right max-w-sm"
          >
            A passionate group of engineers building the future of tech education.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-3xl glass-card flex items-start gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sparkGold-500/20 to-sparkGold-600/10 flex items-center justify-center flex-shrink-0 text-sparkGold-500 font-black text-xl border border-sparkGold-500/20 group-hover:border-sparkGold-500/50 transition-all overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span>{member.icon}</span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-black text-xl text-white group-hover:text-sparkGold-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-400 text-sm font-medium mb-4">{member.role}</p>
                <div className="flex gap-3">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-[#0077b5] transition-colors"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.resume && (
                    <a 
                      href={member.resume} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-sparkGold-400 transition-colors"
                      title="View Resume"
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
