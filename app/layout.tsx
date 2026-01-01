import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Animator Portfolio - Professional Animation & Motion Design",
  description: "Showcase of professional animation work, motion design, and creative projects",
  keywords: ["animation", "motion design", "animator", "portfolio", "visual effects"],
  authors: [{ name: "Professional Animator" }],
  openGraph: {
    title: "Animator Portfolio",
    description: "Professional Animation & Motion Design Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
