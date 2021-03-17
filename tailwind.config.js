module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '700px',
      md: '900px',
      lg: '1000px',
      xl: '1440px',
    },

    fontFamily: {
      poppins : ['Poppins']
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}