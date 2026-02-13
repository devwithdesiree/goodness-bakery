/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goodness: {
          white:"FDFCF9",
          gold: "#C9A227",         // accent
          charcoal: "#2B2B2B",     // primary text
          beige: "#F4F1EC",        // soft section bg
          muted: "#6B6B6B",
          //remove below colors if not needed
          cream: "#FFF7E9",
          caramel: "#D29B6E",
          chocolate: "#4B2E2B",
          dark:"#080504",
          sugar: "#F4D9B5",
        },
      },
      animation: {
    "spin-slow": "spin 2s linear infinite",
  },
    },
  },
  plugins: [],
};
