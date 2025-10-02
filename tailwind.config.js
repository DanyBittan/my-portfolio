/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      screens: {
        'xs': '390px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'space': "url('/Pictures/spaceBg.jpg')",
        'space2': "url('/Pictures/space2.jpg')",
      },
      textShadow: {
        sm: '2px 2px 8px var(--tw-shadow-color)',
        DEFAULT: '0 0px 14px var(--tw-shadow-color)',
        lg: '0 8px 10px var(--tw-shadow-color)',
      },
      fontFamily: {
        'rocket': ["Rocket", "sans-serif"],
        'alien': ["Alien", "sans-serif"],
        'pixelify': ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
