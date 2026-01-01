"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const categories = ["Все", "2D анимация", "3D анимация", "Моушн-дизайн", "VFX"];

const projects = [
  {
    id: 1,
    title: "Рекламный ролик TechCorp",
    category: "Моушн-дизайн",
    description: "30-секундный рекламный ролик с динамичными переходами",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    video: "#",
  },
  {
    id: 2,
    title: "Персонаж для игры",
    category: "3D анимация",
    description: "Полный цикл создания и анимации игрового персонажа",
    image: "https://images.unsplash.com/photo-1614729939124-032d7d9d4c08?w=800&h=600&fit=crop",
    video: "#",
  },
  {
    id: 3,
    title: "Explainer видео для стартапа",
    category: "2D анимация",
    description: "Анимационное объяснение продукта для презентации инвесторам",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&h=600&fit=crop",
    video: "#",
  },
  {
    id: 4,
    title: "Визуальные эффекты для фильма",
    category: "VFX",
    description: "Комплексные визуальные эффекты для короткометражного фильма",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop",
    video: "#",
  },
  {
    id: 5,
    title: "Лого анимация",
    category: "Моушн-дизайн",
    description: "Динамичная анимация логотипа для IT-компании",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    video: "#",
  },
  {
    id: 6,
    title: "Музыкальный клип",
    category: "2D анимация",
    description: "Полностью анимированный музыкальный видеоклип",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
    video: "#",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredProjects =
    selectedCategory === "Все"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="section-padding bg-gray-50 dark:bg-black"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Портфолио
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Избранные работы и проекты
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.video}
                    className="p-3 bg-white rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-6 h-6 text-purple-600" />
                  </motion.a>
                  <motion.a
                    href={project.video}
                    className="p-3 bg-white rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-6 h-6 text-purple-600" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
