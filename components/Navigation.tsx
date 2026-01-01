"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Главная", href: "#home" },
  { name: "Программы", href: "#programs" },
  { name: "Галерея", href: "#gallery" },
  { name: "Отзывы", href: "#testimonials" },
  { name: "Заказать", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm border border-white/20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎈 Праздник
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  item.name === "Заказать"
                    ? "bg-primary text-white hover:bg-primary-600 shadow-md hover:shadow-lg"
                    : "hover:bg-primary-50 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden border border-primary/10"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-center font-bold text-gray-700 dark:text-gray-200 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
