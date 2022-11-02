/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gold: "#daa520",
      "gold-transparent": "rgba(218, 165, 32, 0.45)",
      purple: "#823772",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Comfortaa", "sans-serif"],
    },
    borderRadius: {
      DEFAULT: '6px',
    },
    
  },
    extend: {},
  },
  plugins: [],
};
