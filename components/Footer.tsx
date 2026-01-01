"use client";

import { motion } from "framer-motion";
import { Heart, Linkedin, Twitter, Instagram, Youtube, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Главная", href: "#home" },
    { name: "Программы", href: "#programs" },
    { name: "Галерея", href: "#gallery" },
    { name: "Отзывы", href: "#testimonials" },
  ],
  services: [
    { name: "Дни рождения", href: "#programs" },
    { name: "Выпускные", href: "#programs" },
    { name: "Научное шоу", href: "#programs" },
    { name: "Квесты", href: "#programs" },
  ],
  resources: [
    { name: "Вопросы и ответы", href: "#faq" },
    { name: "Политика конфиденциальности", href: "#privacy" },
    { name: "Контакты", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              🎈 Праздник
            </motion.a>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              Мы создаем волшебные моменты для ваших детей. Смех, радость и незабываемые впечатления гарантированы!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Праздники</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Праздник. Все права защищены.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Сделано с</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>для детей</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
