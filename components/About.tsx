"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Star, Music, Gift, Beaker, Crown, Ship, Zap } from "lucide-react";

const programs = [
  {
    title: "Пиратская вечеринка",
    description: "Поиск сокровищ, морские бои и посвящение в пираты! Йо-хо-хо!",
    icon: Ship,
    color: "from-blue-400 to-blue-600",
    price: "от 5000 ₽",
  },
  {
    title: "Принцессы Disney",
    description: "Волшебный бал, уроки этикета и коронация именинницы.",
    icon: Crown,
    color: "from-pink-400 to-pink-600",
    price: "от 6000 ₽",
  },
  {
    title: "Супергерои",
    description: "Школа супергероев, испытания на ловкость и спасение мира.",
    icon: Zap,
    color: "from-red-400 to-red-600",
    price: "от 5500 ₽",
  },
  {
    title: "Научное шоу",
    description: "Химические опыты, взрывы (безопасные!) и создание лизунов.",
    icon: Beaker,
    color: "from-green-400 to-green-600",
    price: "от 7000 ₽",
  },
  {
    title: "Бумажная дискотека",
    description: "Тонны бумаги, зажигательная музыка и безумные танцы.",
    icon: Music,
    color: "from-purple-400 to-purple-600",
    price: "от 4000 ₽",
  },
  {
    title: "Квест-приключение",
    description: "Загадки, головоломки и тайны для самых смышленых.",
    icon: Sparkles,
    color: "from-orange-400 to-orange-600",
    price: "от 6500 ₽",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="programs" className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
             <span className="py-2 px-4 rounded-full bg-primary-100 text-primary-700 font-bold text-sm uppercase tracking-wider">
               Наши услуги
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Популярные <span className="text-primary">программы</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Мы подготовили сценарии для любого возраста и интересов. 
            Каждая программа — это уникальное приключение!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <program.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                  {program.price}
                </span>
                <a href="#contact" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors">
                  <Star size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center bg-accent/20 rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 transform rotate-12">
            <Gift size={120} className="text-accent-600" />
          </div>
          
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white relative z-10">
            Хотите индивидуальный сценарий?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Мы можем разработать уникальную программу специально для вашего ребенка, 
            учитывая его любимые мультфильмы и увлечения.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all relative z-10"
          >
            Обсудить сценарий
          </a>
        </motion.div>
      </div>
    </section>
  );
}
