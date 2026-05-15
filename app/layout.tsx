import type { Metadata } from "next";
import { Inter, Space_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded" });

export const metadata: Metadata = {
  title: "Spark E-Solutions | IoT & Embedded Systems Training",
  description:
    "Empowering the next generation of IoT & Embedded Systems engineers through hands-on, industry-focused training sessions.",
  keywords: ["IoT", "Embedded Systems", "Engineering", "Training", "Spark E-Solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${unbounded.variable} font-sans min-h-screen antialiased selection:bg-sparkGold-500 selection:text-sparkBlue-950`}>
        {/* Persistent Global Background Layers */}
        <div className="site-bg-grid" />
        <div className="site-bg-glow" />
        
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
