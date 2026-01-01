export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 принципов анимации, которые должен знать каждый аниматор",
    excerpt: "Классические принципы анимации от студии Disney, которые остаются актуальными и сегодня.",
    content: `
# 10 принципов анимации

Эти принципы были разработаны аниматорами Disney в 1930-х годах и остаются фундаментом анимации по сей день.

## 1. Сжатие и растяжение (Squash and Stretch)

Этот принцип придает персонажам вес и гибкость. Важно сохранять постоянный объем объекта при деформации.

## 2. Подготовка (Anticipation)

Движение, предшествующее основному действию, подготавливает зрителя к тому, что произойдет.

## 3. Сценичность (Staging)

Правильная композиция кадра направляет внимание зрителя на важные элементы сцены.

И так далее...
    `,
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop",
    category: "Обучение",
    date: "2024-01-15",
    author: {
      name: "Профессиональный аниматор",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    readTime: "5 мин",
    tags: ["принципы", "основы", "обучение"],
  },
  {
    id: "2",
    title: "After Effects vs Cinema 4D: Какой инструмент выбрать?",
    excerpt: "Сравнение двух мощных инструментов для создания моушн-графики и анимации.",
    content: `
# After Effects vs Cinema 4D

Оба инструмента мощные, но служат разным целям...
    `,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    category: "Инструменты",
    date: "2024-01-10",
    author: {
      name: "Профессиональный аниматор",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    readTime: "8 мин",
    tags: ["After Effects", "Cinema 4D", "сравнение"],
  },
  {
    id: "3",
    title: "Создание персонажа: от скетча до финальной анимации",
    excerpt: "Полный процесс создания анимированного персонажа для вашего проекта.",
    content: `
# Создание персонажа

Процесс создания персонажа включает несколько этапов...
    `,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    category: "Процесс",
    date: "2024-01-05",
    author: {
      name: "Профессиональный аниматор",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    readTime: "12 мин",
    tags: ["персонажи", "3D", "моделирование"],
  },
  {
    id: "4",
    title: "Тренды моушн-дизайна 2024",
    excerpt: "Актуальные тенденции в мире моушн-дизайна и анимации в этом году.",
    content: `
# Тренды моушн-дизайна 2024

В этом году мы видим несколько интересных направлений...
    `,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    category: "Тренды",
    date: "2024-01-01",
    author: {
      name: "Профессиональный аниматор",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    readTime: "6 мин",
    tags: ["тренды", "2024", "моушн-дизайн"],
  },
  {
    id: "5",
    title: "Оптимизация рендеринга в Blender",
    excerpt: "Советы и трюки для ускорения процесса рендеринга в Blender.",
    content: `
# Оптимизация рендеринга в Blender

Рендеринг может занимать много времени. Вот как его ускорить...
    `,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "Оптимизация",
    date: "2023-12-28",
    author: {
      name: "Профессиональный аниматор",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    readTime: "10 мин",
    tags: ["Blender", "рендеринг", "оптимизация"],
  },
  {
    id: "6",
    title: "Цветокоррекция для аниматоров",
    excerpt: "Как правильно работать с цветом в анимации для достижения профессионального результата.",
    content: `
# Цветокоррекция для аниматоров

Цвет играет огромную роль в восприятии анимации...
    `,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    category: "Пост-продакшн",
    date: "2023-12-20",
    author: {
      name: "Профессиональный аниматор",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    readTime: "7 мин",
    tags: ["цвет", "цветокоррекция", "пост-продакшн"],
  },
];
