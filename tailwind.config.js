/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      main: {
        background: "linear-gradient(to bottom,transparent 0, var(--b-color) 80%,transparent 100%)", // Adds a new `font-display` class
      },
      animation: {
        anm: 'anm_20s_linear_infinite',
      },
      keyframes: {
        anm: {
          '0%': { transform: "translate(0)" },
          '100%': { transform: "translateX(-100%)" },
        }
      },
      screens: {
        'sm': '320px',
        'md': '600px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

