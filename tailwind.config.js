/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        primary:'#D8A034',
        secondary: '#BF8616',
        noPay:'#06AB20',
        isPay:'#FB1515'
      }
    },
  },
  plugins: [],
}

