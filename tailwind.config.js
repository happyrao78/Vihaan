/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xxs: '300px',
      // => @media (min-width: 300px) { ... }
      xs: '390px',
      // => @media (min-width: 390px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      width: {
        128: '32rem',
      },
      height: {
        128: '32rem',
      },
      backgroundImage: {
        'gradient-83': 'linear-gradient(83deg, #00febe 0%,#FF5500 100%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
  ],
};
