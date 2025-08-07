/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['open sans', 'sans-serif'],
        poppins: ['poppins', 'san-serif'],
        roboto: ['roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}