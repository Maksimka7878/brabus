"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Heart, Smile } from "lucide-react";
import Image from "next/image";

const categories = ["Все", "Дни рождения", "Шоу программы", "Выпускные"];

const photos = [
  {
    id: 1,
    title: "День рождения Алисы",
    category: "Дни рождения",
    image: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Шоу мыльных пузырей",
    category: "Шоу программы",
    image: "https://images.unsplash.com/photo-1575489006618-97c36e94916a?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Пиратский квест",
    category: "Дни рождения",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Выпускной в саду",
    category: "Выпускные",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Научное шоу",
    category: "Шоу программы",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Веселые старты",
    category: "Выпускные",
    image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&h=600&fit=crop",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredPhotos =
    selectedCategory === "Все"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="section-padding bg-secondary-50 dark:bg-black"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
             <span className="py-2 px-4 rounded-full bg-secondary-100 text-secondary-800 font-bold text-sm uppercase tracking-wider">
               Фотоотчеты
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Яркие <span className="text-secondary">моменты</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Улыбки детей — наша главная награда! Посмотрите, как проходят наши праздники.
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
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-secondary-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPhotos.map((photo) => (
            <motion.div
              layout
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-secondary-300 text-sm font-bold mb-1">
                  {photo.category}
                </span>
                <h3 className="text-white text-xl font-bold">{photo.title}</h3>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                 <Camera className="text-white" size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
            <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary font-bold hover:underline"
            >
                <Smile size={20} />
                Больше фото в нашем Instagram
            </a>
        </div>
      </div>
    </section>
  );
}
