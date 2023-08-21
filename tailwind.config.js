/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

