/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-digolinha': 'black',
        "titulos":'#264A80'
      },
      fontFamily: {
        'body': ['Montserrat', 'sans-sertf']
      }
    },
  },
  plugins: [],
}