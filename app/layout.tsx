import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Детский аниматор | Праздник для вашего ребенка",
  description: "Организация детских праздников, дней рождения, выпускных. Веселые аниматоры, шоу программы и квесты.",
  keywords: ["детский аниматор", "праздник", "день рождения", "шоу мыльных пузырей", "анимация"],
  authors: [{ name: "Агентство Праздник" }],
  openGraph: {
    title: "Детский аниматор | Праздник для вашего ребенка",
    description: "Организация детских праздников, дней рождения, выпускных.",
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
