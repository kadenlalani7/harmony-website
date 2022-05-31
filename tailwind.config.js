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
        animatedBackground: 'backgroundZoom 10s linear infinite alternate',
        circleToSqaure: 'sqtToCirc 0.6s ease-out',
        borderFade: 'fadeBorder 0.6s ease-out',
      },

      // that is actual animation NOTE wE MODIFY HTML DOM PROPERTIES https://www.w3schools.com/jsref/prop_style_backgroundsize.asp
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0.2 },
          '100%': { opacity: 1 },
        },
        fadeBorder: {
          '0%': { borderOpacity: 0.2 },
          '100%': { borderOpacity: 1 },
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
          '0%': {backgroundPosition: -20},

          '100%': {backgroundPosition: -10},

        },

        SlowZoom: {
          '0%': {transform: 'scale(1,1)'},
          '50%': {transform: 'scale(1.1,1.1)'},
          '100%': {transform: 'scale(1,1)'},
        },

        backgroundZoom: {
          '0%': {backgroundSize: '100%'},
          '50%': {backgroundSize: '105%'},
          '100%': {backgroundSize: '100%'},
        }

        
      }),
      
      backgroundImage: {
        'doctor-background': "url('./images/cover2bw.jpeg')",
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
