/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'], // basic system font
      },
      colors: {
        primary: '#2ECC71', // soft green
        dark: '#1C1C1C',    // soft black
      },
    },
  },
  plugins: [],
};
