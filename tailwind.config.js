/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
      colors : {
        primary : '#353535',
        secondary : '#555555',
        tertiary : '#fafafa'
      }
    },
  },
  plugins: [],
}