import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f7fb",
          100: "#e7edf7",
          200: "#c9d4e3",
          300: "#8f9bb3",
          400: "#56627c",
          500: "#2a3348",
          600: "#1b2334",
          700: "#131a28",
          800: "#0c111b",
          900: "#070b12"
        },
        accent: {
          100: "#cdf4ff",
          200: "#8de2ff",
          300: "#46c6eb",
          400: "#17a8cf"
        },
        copper: {
          200: "#f7d4a8",
          300: "#efb77a",
          400: "#d19359"
        }
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "serif"],
        body: ["Avenir Next", "Segoe UI", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 40px rgba(23,168,207,0.16)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(130,150,190,0.15) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
