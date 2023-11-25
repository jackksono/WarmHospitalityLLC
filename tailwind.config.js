/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "BG": "url('../src/images/background/background2.jpg')"
      },
      colors: {
        color: {
          "BG": "#F9F9F9"
        }
      },
      fontFamily: {
        Raleway: ['Raleway'],
        sans: ["var(--font-sophia)", ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}

