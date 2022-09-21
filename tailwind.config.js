/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'tableImage': "url('/img/PinkBG-1080p.jpg')",
        'Bgimage': "url('/img/bgtable.webp')",
      }
    },
  },
  plugins: [],
}
