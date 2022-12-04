/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#1e1e1e",
        darkergray: "#0f0f0f",
      }
    },
  },
  plugins: [],
};
