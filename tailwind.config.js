/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      keyframes: {
        rainbow: {
          '0%, 100%': { borderColor: 'red' },
          '33%': { borderColor: 'green' },
          '66%': { borderColor: 'blue' },
        },
      },
 animation: {
        rainbow: 'rainbow 3s linear infinite',
      },
      colors: {
        purp: 'purple',
        primary:'#004987'
      },
      backgroundColor: {

      },
      backgroundImage: {
        'hero-back': "url('/images/barbie.jpg')"
      }
    },


    screens: {
        'sm': '340px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      
    },
  },
  plugins: [],
});