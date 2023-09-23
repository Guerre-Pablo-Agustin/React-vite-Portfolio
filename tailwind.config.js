/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#07beb8',
        'secondary': '#0a58ca',
      },
      textshadow:{
        'primary': '0px 0px 2px #07beb8',
        'secondary': '0px 0px 2px #0a58ca',
      },
      animation: {
        'animate-bounce': '1s',
      }
    },
  },
  plugins: [],
}
