import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spark E-Solutions",
  description:
    "IoT and Embedded Systems training platform by Spark E-Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sparkBlue-950 text-sparkBlue-50">{children}</body>
    </html>
  );
}
