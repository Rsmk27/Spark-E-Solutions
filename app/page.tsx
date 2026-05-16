import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-slate-950">
      <Navbar />

      {/* Sections with consistent vertical spacing for a minimal feel */}
      <Hero />

      <div className="space-y-32 pb-32">
        <Stats />
        <WhyUs />
        <Services />
        <Process />
        <Gallery />
        <Team />
      </div>

      {/* Footer */}
      <footer className="relative py-24 px-4 bg-slate-950 border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-sparkGold-500/30 to-transparent" />

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="mb-10 group">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-sparkGold-500/10 rounded-full blur-xl group-hover:bg-sparkGold-500/20 transition-all duration-500" />
              <Image
                src="/logo.png"
                alt="Spark E-Solutions Logo"
                fill
                className="object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>

          <h2 className="text-3xl font-black text-white tracking-[0.2em] mb-4">SPARK E-SOLUTIONS</h2>
          <p className="text-slate-500 max-w-xl mb-12 text-lg leading-relaxed">
            Leading the transformation in IoT education and embedded engineering.
            Empowering the next wave of hardware innovators since 2024.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
            {["Services", "Process", "Gallery", "Team", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-white font-black text-xs uppercase tracking-[0.3em] transition-all hover:tracking-[0.4em]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-slate-700 text-[10px] font-black uppercase tracking-[0.5em]">
              Made with precision by the Spark Team
            </div>
            <div className="text-slate-800 text-[10px] font-medium tracking-tighter">
              © {new Date().getFullYear()}Spark E-Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
