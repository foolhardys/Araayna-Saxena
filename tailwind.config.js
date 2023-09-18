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
      'white': '#FFFFFF',
      'black': ' #000000',
      'background': '#E2D9D1',
    },
    fontFamily: {
      garamond: ["Cormorant Garamond", 'serif'],
      raleway: ['Raleway', 'sans-serif'],
      serif: ['Inclusive Sans', 'sans-serif'],
      monserrat: ['Montserrat', 'sans-serif'],
      libre: ['Libre Baskerville', 'serif'],
      display: ['DM Serif Display', 'serif'],
      quicksand: ['Quicksand', 'sans-serif'],
    },
    backgroundImage: {
      'home-img': "url('src/components/Home/HOME-PIC.jpg')",
    }
  },
  plugins: [],
}

