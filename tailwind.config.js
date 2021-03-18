module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      sm2: '550px',
      md: '800px',
      md2: '1024px',
      lg: '1350px',
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
