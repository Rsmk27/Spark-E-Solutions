import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Book an IoT, Embedded Systems, or App Development training session with Spark E-Solutions.",
  openGraph: {
    title: "Book a Session | Spark E-Solutions",
    description: "Book an IoT, Embedded Systems, or App Development training session with Spark E-Solutions.",
    url: "https://spark-e-solutions.com/book",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
