/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        Radialgradient: 'radial-gradient(circle, #ff00ff, #800080)',
        'radial-gradient': 'radial-gradient(circle at top left, var(--tw-gradient-stops) , transparent)'
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
        white: '0 2px 2px rgba(0 , 130 , 255, 0.5)',
      },
    },
  },
  plugins: [],
};

