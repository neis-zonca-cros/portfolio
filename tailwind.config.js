/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accueil: "#eed9bc",
        apropos: "#a7c4b1",
        projets: "#c8a796",
        menu: "#d19a60",
        border: "#37495f",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        'dream': ['Dream Orphans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

