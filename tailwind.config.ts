import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#FF6B6B",
          50: "#FFF0F0",
          100: "#FFE1E1",
          200: "#FFC2C2",
          300: "#FFA3A3",
          400: "#FF8585",
          500: "#FF6B6B",
          600: "#E64545",
          700: "#CC2828",
          800: "#B31212",
          900: "#990505",
        },
        secondary: {
          DEFAULT: "#4ECDC4",
          50: "#F0FCFB",
          100: "#E1F9F7",
          200: "#C2F2EE",
          300: "#A3EBE5",
          400: "#85E4DC",
          500: "#4ECDC4",
          600: "#36B3AA",
          700: "#259990",
          800: "#178078",
          900: "#0C6660",
        },
        accent: {
          DEFAULT: "#FFE66D",
          50: "#FFFDF0",
          100: "#FFFAE1",
          200: "#FFF5C2",
          300: "#FFF0A3",
          400: "#FFEB85",
          500: "#FFE66D",
          600: "#E6CC45",
          700: "#CCB328",
          800: "#B39912",
          900: "#998005",
        },
        cream: "#FFFDF9",
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
