/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}",],
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
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
      'cream': '#F7F1EB',
      'peach': '#EA9D68',
      'gray': '#696969',
      'dark-gray': '#4C4C4C',
      'purple': '#A771FF',
      'lightpurple': '#F6EBF7',
      'blue': '#0096FF',
      'card': '#FAFAFA',
      'talent': '#D8C6F6',
      'dark-purple': '#6F38C9',
      'deep-purple': '#2E2340',
      'bg-purple': '#2E2340',
      'gray-white-bg': '#00000040',
      'div-bg': '#F6EBF7',
      'light-blue': '#8B93DB',
      "light-gray": '#FAFAFA'
    },
    fontFamily: {
      garamond: ["Cormorant Garamond", 'serif'],
      raleway: ['Raleway', 'sans-serif'],
      serif: ['Inclusive Sans', 'sans-serif'],
      monserrat: ['Montserrat', 'sans-serif'],
      libre: ['Libre Baskerville', 'serif'],
      display: ['DM Serif Display', 'serif'],
      quicksand: ['Quicksand', 'sans-serif'],
      quicksandlight: ['Quicksand', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      courier: ['Courier Prime', 'monospace'],
      dancing: ['Dancing Script', 'cursive'],
    },
    extend: {
      backgroundImage: {
        'book-1': "url('src/components/Assets/Author/Book/bg-1.jpg')",
        'book-2': "url('src/components/Assets/Author/Book/bg-4.jpg')",
        'book-3': "url('src/components/Assets/Author/Book/bg-2.jpg')",
        'book-4': "url('src/components/Assets/Author/Book/bg-3.jpg')",
      }
    }
  },
  plugins: [],
}

