"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Мария Иванова",
    role: "Мама 5-летнего Артема",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Спасибо огромное за праздник! Артем в восторге от пиратов. Аниматоры смогли удержать внимание 15 детей целых 2 часа. Это настоящий талант!",
  },
  {
    name: "Сергей Петров",
    role: "Папа Алисы",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Заказывали Эльзу на день рождения дочери. Актриса просто волшебная! Костюм, грим, голос - всё как в мультфильме. Алиса поверила в сказку.",
  },
  {
    name: "Екатерина Соколова",
    role: "Мама близнецов",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "Научное шоу - это нечто! Дети визжали от восторга, когда делали лизунов. Очень познавательно и весело. Обязательно позовем вас на следующий год.",
  },
  {
    name: "Дмитрий Волков",
    role: "Организатор выпускного в детском саду",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Проводили выпускной с программой 'Супергерои'. Всё четко, вовремя, профессионально. Дети набегались, наигрались и были счастливы.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-white dark:bg-gray-900"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
             <span className="py-2 px-4 rounded-full bg-accent-100 text-accent-800 font-bold text-sm uppercase tracking-wider">
               Родители рекомендуют
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Счастливые <span className="text-primary">отзывы</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Эмоции родителей и детей — лучшая оценка нашей работы
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary-200 dark:text-primary-800" />

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={`${
                      i < testimonials[currentIndex].rating
                        ? "text-accent fill-accent"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 italic leading-relaxed">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all group"
            >
              <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
