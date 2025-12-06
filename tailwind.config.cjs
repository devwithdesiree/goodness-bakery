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
          cream: "#FFF7E9",
          caramel: "#D29B6E",
          chocolate: "#4B2E2B",
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
