/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      spacing:{
        '400':'400px'
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
    },
  },
  plugins: [],
}

