"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Ведущий аниматор",
    company: "Creative Animation Studio",
    period: "2020 - Настоящее время",
    description: [
      "Руководство командой из 5 аниматоров на крупных проектах",
      "Создание концепций и стилей для рекламных кампаний",
      "Работа с клиентами мирового уровня (Nike, Coca-Cola, Apple)",
      "Оптимизация рабочих процессов, увеличение продуктивности на 40%",
    ],
  },
  {
    title: "3D Аниматор",
    company: "GameDev Productions",
    period: "2018 - 2020",
    description: [
      "Создание и анимация персонажей для AAA игр",
      "Разработка кат-сцен и синематиков",
      "Сотрудничество с техническими артистами для оптимизации",
      "Менторство младших членов команды",
    ],
  },
  {
    title: "Моушн-дизайнер",
    company: "Digital Agency Pro",
    period: "2016 - 2018",
    description: [
      "Создание анимированной графики для веб и мобильных приложений",
      "Разработка брендированных анимаций и лого",
      "Работа над UI/UX анимациями",
      "Участие в 50+ успешных проектах",
    ],
  },
  {
    title: "Младший аниматор",
    company: "StartUp Animation",
    period: "2015 - 2016",
    description: [
      "Создание 2D анимации для образовательных видео",
      "Изучение основ After Effects и Cinema 4D",
      "Участие в производстве explainer видео",
      "Развитие навыков работы в команде",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Опыт работы
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Моя карьера в индустрии анимации
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative pl-8 pb-12 border-l-2 border-purple-200 dark:border-purple-800 last:pb-0"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -translate-x-[9px]"
                whileHover={{ scale: 1.5 }}
              />

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-start justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium">
                      <Briefcase size={18} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar size={18} />
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-purple-600 mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
