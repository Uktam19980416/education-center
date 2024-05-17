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
      translate: {
        '-0.5px': '-0.5px',
        '0.2em': '0.2em',
      },
      clipPath: {
        custom:
          'polygon(69% 5%, 100% 1%, 100% 94%, 68% 100%, 35% 93%, 0 100%, 0 7%, 36% 0);',
      },
    },
  },
  plugins: [
    daisyui,
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom': {
          clipPath:
            'polygon(69% 5%, 100% 1%, 100% 94%, 68% 100%, 35% 93%, 0 100%, 0 7%, 36% 0);',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

