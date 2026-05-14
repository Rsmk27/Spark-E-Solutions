import Link from "next/link";
import Image from "next/image";
import { Zap, Cpu, Globe, Users, ArrowRight, Image as ImageIcon } from "lucide-react";

const services = [
  {
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
    title: "IoT Basics",
    description:
      "Hands-on training with DHT, LDR, IR sensors and more. Build real-world IoT prototypes from the ground up.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-cyan-400" />,
    title: "Embedded Systems Design",
    description:
      "Learn microcontroller programming, circuit design, and firmware development for embedded applications.",
  },
  {
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    title: "Full Stack App Development",
    description:
      "Build complete web and mobile applications that interface with IoT hardware and cloud services.",
  },
];

const stats = [
  { value: "50+", label: "Students Trained" },
  { value: "10+", label: "Workshops Completed" },
  { value: "3+", label: "Services Offered" },
  { value: "5+", label: "Team Members" },
];

const galleryPlaceholders = [1, 2, 3, 4, 5, 6];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Spark E-Solutions Logo" width={40} height={40} className="w-10 h-10 object-contain" />
            <span className="font-bold text-xl text-white">Spark E-Solutions</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-slate-300 hover:text-sparkGold-500 transition-colors text-sm">
              Services
            </a>
            <a href="#gallery" className="text-slate-300 hover:text-sparkGold-500 transition-colors text-sm">
              Gallery
            </a>
            <Link
              href="/book"
              className="bg-sparkGold-500 hover:bg-sparkGold-400 text-sparkBlue-950 font-semibold px-4 py-2 rounded-lg transition-colors text-sm shadow-sm"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sparkBlue-950 via-sparkBlue-900 to-sparkBlue-800 opacity-80" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 mb-4">
            <Image src="/logo.png" alt="Spark E-Solutions Logo" width={160} height={160} className="w-40 h-40 object-contain drop-shadow-lg" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              SPARK <span className="text-sparkGold-500">E-SOLUTIONS</span>
            </h1>
          </div>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Empowering the next generation of IoT & Embedded Systems engineers
            through hands-on, industry-focused training sessions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/book"
              className="flex items-center gap-2 bg-sparkGold-500 hover:bg-sparkGold-400 text-sparkBlue-950 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg text-lg"
            >
              Book a Session <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#services"
              className="flex items-center gap-2 border-2 border-sparkGold-500 text-sparkGold-500 hover:bg-sparkGold-500/10 font-bold px-8 py-4 rounded-xl transition-all text-lg"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Conducted Sessions Counter */}
      <section className="py-16 px-4 bg-sparkBlue-900/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-2xl bg-sparkBlue-800/30 border border-sparkBlue-700/50">
              <p className="text-4xl font-extrabold text-sparkGold-500 drop-shadow-md">{stat.value}</p>
              <p className="mt-2 text-sparkBlue-100 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 bg-sparkBlue-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-4 tracking-tight">
            Our <span className="text-sparkGold-500">Services</span>
          </h2>
          <p className="text-sparkBlue-200 text-center mb-12 max-w-xl mx-auto text-lg">
            Structured training programs designed for students, professionals,
            and organisations looking to upskill in emerging technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-sparkBlue-900/60 border border-sparkBlue-700 hover:border-sparkGold-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-sparkGold-500/10 hover:-translate-y-1 group"
              >
                <div className="mb-4 p-3 bg-sparkBlue-800 rounded-xl inline-block group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sparkBlue-200 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-sparkGold-500 hover:bg-sparkGold-400 text-sparkBlue-950 font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
            >
              Book a Session <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery / Session Highlights */}
      <section id="gallery" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Session <span className="text-cyan-400">Highlights</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            A glimpse into our past workshops, hardware prototypes, and student
            projects — images loaded from Firebase Storage.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPlaceholders.map((i) => (
              <div
                key={i}
                className="aspect-video bg-slate-800 border border-slate-700 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-600"
              >
                <ImageIcon className="w-8 h-8" />
                <span className="text-xs">Gallery Image {i}</span>
                <span className="text-xs text-slate-700">Firebase Storage</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-sparkBlue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-8 h-8 text-sparkGold-500" />
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              Meet the <span className="text-sparkGold-500">Team</span>
            </h2>
          </div>
          <p className="text-sparkBlue-200 mb-12 text-lg">
            A passionate group of engineers building the future of tech education.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              { name: "Chaitanya", role: "Founder, App Developer & Embedded Engineer" },
              { name: "Ramu", role: "Co-founder & Web Developer" },
              { name: "Anand", role: "Embedded Engineer" },
              { name: "Prem", role: "App Developer" },
              { name: "Manikanta", role: "Web Developer" },
              { name: "DivyaKanth & Navya", role: "Funders" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-sparkBlue-900/80 border border-sparkBlue-800 rounded-2xl p-6 hover:border-sparkGold-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-sparkGold-500/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-sparkGold-500" />
                </div>
                <p className="font-bold text-white text-lg">{member.name}</p>
                <p className="text-sparkGold-400 text-sm mt-1 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sparkBlue-800 py-10 px-4 text-center text-sparkBlue-300 text-sm bg-sparkBlue-950">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <Image src="/logo.png" alt="Spark E-Solutions Logo" width={48} height={48} className="w-12 h-12 object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" />
          <span className="font-bold text-white text-lg tracking-wide">SPARK E-SOLUTIONS</span>
        </div>
        <p className="mt-2">Scaling New Heights in IoT.</p>
        <p className="mt-6 opacity-60">© {new Date().getFullYear()} Spark E-Solutions. All rights reserved.</p>
      </footer>
    </main>
  );
}
