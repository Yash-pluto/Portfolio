/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        white: "#ffffff",
        flame: "#3B82F6",
      },
      backgroundImage: {
        "grid-dark": "radial-gradient(transparent 1px, #0b0b0f 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
    fontFamily: {
      rajdhani: ['"Rajdhani"', "sans-serif"],
      orbitron: ['"Orbitron"', "sans-serif"],
      grotesk: ['"Space Grotesk"', "sans-serif"],
    },
  },
  plugins: [],
};
