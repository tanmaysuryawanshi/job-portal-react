/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto','sans-serif'],
      },
      gridTemplateColumns:{
        '70/30':'70% 28%'
      }
    },
  },
  plugins: [],
}