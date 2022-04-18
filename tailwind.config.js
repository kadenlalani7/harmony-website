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
        animatedBackground: 'animatedBackground 6s linear infinite alternate',
        circleToSqaure: 'sqtToCirc 0.6s ease-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0.2 },
          '100%': { opacity: 1 },
        },

        sqtToCirc: {
          '0%':  {
            borderRadius:'100%',
            // background:black,
            // transform:rotate(0deg),
          },
          '25%':  {
            borderRadius:'75%',
            // background:black,
            // transform:rotate(45deg),
          },
          '50%':  {
            borderRadius:'60%',
            // background:black,
            // transform:rotate(25%),
          },
          '75%':  { 
            borderRadius:'30%',
            // background:black,
            // transform:rotate(180deg),
          },
          '100%': {  
            borderRadius:0,
            // background:black,
            // transform:rotate(360deg),
          }
        },

        
        fadeIn: {
          '100%': { backgroundColor: theme('colors.inherit') },
          '0%': { backgroundColor: theme('colors.tansparent') },
        },

        animatedBackground: {
          '0%': {backgroundPosition: -10},

          '100%': {backgroundPosition: 10},

        }
        
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
