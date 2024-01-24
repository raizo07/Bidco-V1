/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primaryColor: "#012169",
        primaryGradient:
          "linear-gradient(102deg, #012169 2.31%, #012169 54.18%, #01287E 56.58%, #013098 100%)",
      },
    },
  },
  plugins: [],
};
