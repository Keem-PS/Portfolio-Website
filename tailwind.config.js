/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        dark: "#292929",
        granite: "#616161"
      },
      fontFamily: {
        poppins:["Poppins"]
      },
      spacing: {
        hero: "95vh",
      }
    },
  },
  plugins: [],
}

