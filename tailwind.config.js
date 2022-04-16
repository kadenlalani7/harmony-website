module.exports = {
  content: ['./src/components/Navbar/Navbar.js',
            './src/components/**/**.js',
            './src/App.js'],
  theme: {
    extend: {
      animation: {
        fadeOut: 'fadeOut 1.5s ease-in-out',
        fade1: 'fadeOut 1.5s ease-in-out',
        fade2: 'fadeOut 2s ease-in-out',
        fade3: 'fadeOut 2.5s ease-in-out',
        fadeIn: 'fadeIn 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0.2 },
          '100%': { opacity: 1 },
        },
        fadeIn: {
          '100%': { backgroundColor: theme('colors.inherit') },
          '0%': { backgroundColor: theme('colors.tansparent') },
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
