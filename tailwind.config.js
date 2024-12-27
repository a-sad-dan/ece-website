/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Franklin"', 'sans-serif'],
      },
      colors:
      {
        buttonGreen:'#0a2c17',
        eceGreen:'#092b16'
      }
    },
  },
  plugins: [],
};
