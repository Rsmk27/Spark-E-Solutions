import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

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
      <body className={`${outfit.variable} font-sans min-h-screen antialiased selection:bg-sparkGold-500 selection:text-sparkBlue-950`}>
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
