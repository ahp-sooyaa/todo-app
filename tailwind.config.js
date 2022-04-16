module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-light': "url('../images/bg-mobile-light.jpg')",
        'desktop-light': "url('../images/bg-desktop-light.jpg')",
        'mobile-dark': "url('../images/bg-mobile-dark.jpg')",
        'desktop-dark': "url('../images/bg-desktop-dark.jpg')",
      },
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"']
      }
    },
  },
  plugins: [],
}
