/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accueil: "#eed9bc",
        apropos: "#a7c4b1",
        projets: "#9c6046",
        menu: "#eed9bc",
        border: "#37495f",
        loader: "#a87b47",
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
      backgroundImage: {
        'accueilI': "url('./src/assets/bgacc.jpg')",
      }
    },
  },
  plugins: [],
}

