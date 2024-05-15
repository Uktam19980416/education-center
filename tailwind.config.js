/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/src/images/mainbg.jpg')",
        'footer-texture': "url('/src/assets/footer-texture.svg')",
      },
    },
  },
  plugins: [daisyui],
}

