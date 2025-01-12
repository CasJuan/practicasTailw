/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'tablet': '900px',
      },
      colors:{
        'azul-claro' : ' #243cff ' ,
        'azul-oscuro': ' #0d1b3e ',
      },
      width:{
        ' 42 ' : '170px',
      }
    },
  },
  plugins: [],
}