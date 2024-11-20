/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {

        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },

      fontFamily : {
        'alata' :["'Alata'", "sans-serif"],     
        'josefin': ["'Josefin Sans'", "sans-serif"]   
      },

      backgroundImage: {
        'hero-mobile': "url('images/mobile/image-hero.jpg')",
        'hero-desktop': "url('images/desktop/image-hero.jpg')"  

      }


    },
  },
  plugins: [],
}

