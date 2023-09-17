/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'danger': '#ff0e0e',
      'primary': '#FFFEF8',
      'secondary': '#06273A',
      'brown': '#956E46',
    },
    fontFamily: {
      garamond: ["Cormorant Garamond", 'serif'],
      raleway: ['Raleway', 'sans-serif'],
      serif: ['Inclusive Sans', 'sans-serif']
    },
  },
  plugins: [],
}


