/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c89d7c',
        secondary: 'rgba(128, 120, 120, 0.493)',
      },
    },
  },
  plugins: [],
}