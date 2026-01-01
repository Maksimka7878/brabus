"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Программное обеспечение",
    skills: [
      { name: "After Effects", level: 95 },
      { name: "Cinema 4D", level: 90 },
      { name: "Blender", level: 85 },
      { name: "Adobe Animate", level: 88 },
      { name: "Premiere Pro", level: 92 },
      { name: "Photoshop", level: 90 },
    ],
  },
  {
    name: "Техники и навыки",
    skills: [
      { name: "2D Анимация", level: 95 },
      { name: "3D Моделирование", level: 87 },
      { name: "Риггинг персонажей", level: 85 },
      { name: "Моушн-графика", level: 93 },
      { name: "Визуальные эффекты", level: 88 },
      { name: "Композитинг", level: 90 },
    ],
  },
  {
    name: "Дополнительные навыки",
    skills: [
      { name: "Сторителлинг", level: 92 },
      { name: "Цветокоррекция", level: 85 },
      { name: "Звуковой дизайн", level: 75 },
      { name: "Управление проектами", level: 88 },
      { name: "Работа в команде", level: 95 },
      { name: "Креативное мышление", level: 93 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-black">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Навыки и технологии
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Инструменты и техники, которыми я владею
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Также работаю с
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Maya",
              "Houdini",
              "Nuke",
              "DaVinci Resolve",
              "Substance Painter",
              "ZBrush",
              "Unreal Engine",
              "Unity",
              "Figma",
              "Illustrator",
              "Toon Boom Harmony",
              "Spine",
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
