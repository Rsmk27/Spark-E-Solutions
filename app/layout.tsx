import type { Metadata } from "next";
import { Inter, Space_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://spark-e-solutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Spark E-Solutions | IoT & Embedded Systems Training",
    template: "%s | Spark E-Solutions",
  },
  description:
    "Empowering the next generation of IoT & Embedded Systems engineers through hands-on, industry-focused training sessions.",
  keywords: ["IoT", "Embedded Systems", "Engineering", "Training", "Spark E-Solutions", "Robotics", "Arduino", "Microcontrollers"],
  authors: [{ name: "Spark E-Solutions" }],
  creator: "Spark E-Solutions",
  publisher: "Spark E-Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Spark E-Solutions | IoT & Embedded Systems Training",
    description: "Empowering the next generation of IoT & Embedded Systems engineers through hands-on, industry-focused training sessions.",
    url: baseUrl,
    siteName: "Spark E-Solutions",
    images: [
      {
        url: "/og-image.png", // Assuming an og-image will be created or exists
        width: 1200,
        height: 630,
        alt: "Spark E-Solutions - IoT & Embedded Systems Training",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark E-Solutions | IoT & Embedded Systems Training",
    description: "Empowering the next generation of IoT & Embedded Systems engineers through hands-on, industry-focused training sessions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
