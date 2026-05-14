import Link from "next/link";
import { Zap, Cpu, Globe, Users, ArrowRight, Image } from "lucide-react";

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
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-lg text-white">Spark E-Solutions</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
              Services
            </a>
            <a href="#gallery" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
              Gallery
            </a>
            <Link
              href="/book"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 opacity-60" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-10 h-10 text-cyan-400" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-white">
              Spark <span className="text-cyan-400">E-Solutions</span>
            </h1>
          </div>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Empowering the next generation of IoT & Embedded Systems engineers
            through hands-on, industry-focused training sessions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/book"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Book a Session <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#services"
              className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Conducted Sessions Counter */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-cyan-400">{stat.value}</p>
              <p className="mt-2 text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Structured training programs designed for students, professionals,
            and organisations looking to upskill in emerging technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Book a Session <ArrowRight className="w-4 h-4" />
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
                <Image className="w-8 h-8" />
                <span className="text-xs">Gallery Image {i}</span>
                <span className="text-xs text-slate-700">Firebase Storage</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">
              Meet the <span className="text-cyan-400">Team</span>
            </h2>
          </div>
          <p className="text-slate-400 mb-10">
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
                className="bg-slate-800 border border-slate-700 rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="font-semibold text-white">{member.name}</p>
                <p className="text-slate-400 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 text-center text-slate-500 text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold text-slate-300">Spark E-Solutions</span>
        </div>
        <p>© {new Date().getFullYear()} Spark E-Solutions. All rights reserved.</p>
      </footer>
    </main>
  );
}
