/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tiny': '10px',
        'custom-lg': '1166px',
        'whatWeDo-sm': '583px',
        'whatWeDo-md': '842px',
        'home-competitions-md': '1153px',
        'home-brand-sm': '526px',
        'home-subscribe-sm': '813px',
      },
    },
  },
  plugins: [],
}