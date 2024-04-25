/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.jsx',
    './src/App.jsx',
    './src/main.jsx',
    './vite.config.{js,ts}',
  ],
  theme: {
    screens: {
      'xs': '576px',
      's': '1024px',
      'm': '1280px',
      'l': '1536px',
      'no-hover': {'raw': '(hover: hover) and (pointer: fine)'}
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      blue: '#02202f',
      white: {
        '100': '#e8e8e8',
        '200': '#9d9d9d'
      },
      orange: '#fc8d00',
      grey: '#727272',
      yellow: "#ffec2a",
      green: "#24a903",
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

