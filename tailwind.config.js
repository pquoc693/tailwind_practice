/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
      colors: {
        "light-coffee": "#c89f94",
        coffee: {
          50: "#e8e6d0",
          200: "#c89f94",
          400: "#a25f4b",
          600: "#744838"
        }
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out",
        fadeIn: "fadeIn 0.4s ease-in-out"
      },
      backgroundImage: {
        "slider-bg": "url('./assets/images/slide.jpg')"
      }
    }
  },
  plugins: []
};
