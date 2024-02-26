/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backdrop: "#121212",
        primary: "#1db954",
        active: "#282828",
        link: "#b3b3b3",
        footer: "#181818",
      },
      fontSize: {
        s: "0.813rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
