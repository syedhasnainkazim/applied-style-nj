/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e90ff",   // brand blue
        dark: "#0b0b0b",      // app background
        card: "#1a1a1a",      // card surfaces
        muted: "#9ca3af",     // muted text
      },
    },
  },
  plugins: [],
};