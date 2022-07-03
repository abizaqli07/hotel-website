/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        primary: "#EEBC1D",
        primary_hover: "#FFB11A",
        dark: "#0C0800",
        nav: "#060A0E"
      },
      fontFamily: {
        poppins: ['Poppins'],
        tangerin: ['Tangerine']
      }
    },
  },
  plugins: [],
}
