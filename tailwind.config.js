/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'tableImage': "url('/img/CalBg-1.jpg')",
        'Bgimage': "url('/img/MainBg-1.jpg')",
      }
    },
  },
  plugins: [],
}
