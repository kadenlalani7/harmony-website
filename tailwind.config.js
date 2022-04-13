module.exports = {
  content: ['./src/components/Navbar/Navbar.js',
            './src/components/**/**.js',
            './src/App.js'],
  theme: {
    extend: {
      backgroundImage: {
        'doctor-background': "url('./images/doctor.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    
  },
  // plugins: [require("daisyui")],
  plugins: [],

}
