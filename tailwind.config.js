/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        biryuza: {
          bg: '#E6FAF9',
          light: '#B2F7EF',
          brand: '#38B2AC',
          accent: '#71D7BD',
          dark: '#24475B',
        }
      }
    },
  },
  plugins: [],
}
