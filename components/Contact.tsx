"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Gift, Calendar, User } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@prazdnik.ru",
    href: "mailto:hello@prazdnik.ru",
  },
  {
    icon: MapPin,
    label: "Офис",
    value: "Москва, ул. Веселая, 1",
    href: "#",
  },
];

const themes = [
  "Не определились",
  "Пиратская вечеринка",
  "Принцессы Disney",
  "Супергерои",
  "Научное шоу",
  "Бумажная дискотека",
  "Квест-приключение",
  "Другое",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    theme: "Не определились",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Как к вам обращаться?";
    }

    if (formData.phone.trim().length < 10) {
      newErrors.phone = "Укажите номер телефона";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Симуляция отправки формы
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Ура! Заявка отправлена. Мы скоро позвоним, чтобы обсудить праздник!");
      setFormData({ name: "", phone: "", theme: "Не определились", date: "", message: "" });
      setErrors({});
    } catch (error) {
      alert("Ой, что-то пошло не так. Позвоните нам!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
             <span className="py-2 px-4 rounded-full bg-accent-100 text-accent-800 font-bold text-sm uppercase tracking-wider">
               Контакты
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Заказать <span className="text-primary">праздник</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Оставьте заявку, и мы перезвоним в течение 15 минут, чтобы обсудить детали!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-2 border-transparent hover:border-primary/20 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Мы на связи!</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">{item.label}</p>
                      <p className="text-lg font-bold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary-600 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-20">
                 <Gift size={100} />
               </div>
               <h3 className="text-2xl font-bold mb-4 relative z-10">Скидка 10%</h3>
               <p className="mb-6 relative z-10">
                 При заказе праздника в будний день (пн-чт) дарим скидку на любую программу!
               </p>
               <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg font-mono font-bold">
                 PROMO: BUDNI
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                  Ваше имя
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Мама Анна"
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-2 outline-none transition-all ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-100 dark:border-gray-700 focus:border-primary"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm ml-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                  Телефон
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 000-00-00"
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-2 outline-none transition-all ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-100 dark:border-gray-700 focus:border-primary"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm ml-1">{errors.phone}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Тематика
                  </label>
                  <div className="relative">
                    <select
                      name="theme"
                      value={formData.theme}
                      onChange={handleChange}
                      className="w-full pl-4 pr-10 py-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-2 border-gray-100 dark:border-gray-700 focus:border-primary outline-none appearance-none cursor-pointer"
                    >
                      {themes.map((theme) => (
                        <option key={theme} value={theme}>
                          {theme}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Дата праздника
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-2 border-gray-100 dark:border-gray-700 focus:border-primary outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                  Пожелания (необязательно)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Сколько будет детей? Где планируете отмечать?"
                  rows={3}
                  className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-2 border-gray-100 dark:border-gray-700 focus:border-primary outline-none resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Отправить заявку
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
