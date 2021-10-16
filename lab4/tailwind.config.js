module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '3/5': '60%',
      },
      boxShadow: {
        focus: '0 0 1px 2px rgba(59, 130, 246, 0.2)'
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['active'],
      boxShadow: ['focus'],
    },
  },
  plugins: [],
}
