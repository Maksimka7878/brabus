"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 dark:from-primary-950 dark:via-accent-950 dark:to-secondary-950"
    >
      {/* Animated background elements - Balloons/Confetti */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: Math.random() * 60 + 40,
              height: Math.random() * 70 + 50,
              backgroundColor: [
                'var(--primary)', 
                'var(--secondary)', 
                'var(--accent)'
              ][Math.floor(Math.random() * 3)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 120}%`,
              borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%", // Balloon shape
            }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, Math.random() * 10 - 5],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          >
             {/* String for balloon */}
             <div className="absolute bottom-0 left-1/2 w-0.5 h-10 bg-gray-400 opacity-50 translate-y-full origin-top transform -rotate-6"></div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="mb-6 inline-block"
          >
            <span className="bg-accent text-accent-900 px-6 py-2 rounded-full text-lg font-bold shadow-lg transform -rotate-2 inline-block">
              🎉 Дарим радость детям!
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-800 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Лучший <span className="text-primary">праздник</span>
            <br />
            для вашего <span className="text-secondary">ребенка</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Веселые аниматоры, захватывающие шоу и море позитива! 
            Сделаем день рождения или выпускной незабываемым событием.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#programs"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all flex items-center gap-2 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} fill="currentColor" />
              Выбрать программу
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-secondary hover:bg-secondary-50 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Заказать звонок
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#programs"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-purple-600" />
        </motion.a>
      </div>
    </section>
  );
}
