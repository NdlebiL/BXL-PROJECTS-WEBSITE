/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A8A',
        charcoal: '#111827',
        blueGlow: '#3B82F6',
        whatsapp: '#10B981',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
