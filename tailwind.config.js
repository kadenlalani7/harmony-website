module.exports = {
  content: ['./src/components/Navbar/Navbar.js',
            './src/components/**/**.js',
            './src/App.js'],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.inherit') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
      
      backgroundImage: {
        'doctor-background': "url('./images/doctor.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      fontFamily: {
        body: ['Bitter']

      }
    },
    
  },
  // plugins: [require("daisyui")],
  plugins: [],

}
