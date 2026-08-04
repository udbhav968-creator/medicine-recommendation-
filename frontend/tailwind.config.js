/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#02060f",
        bgCard: "#0a1426",
        cyanAccent: "#22d3ff",
        blueAccent: "#3b82f6",
        greenGlow: "#00e5a0",
        amberGlow: "#ffb547",
        redGlow: "#ff4d6d"
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
