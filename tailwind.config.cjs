/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)"],
      },
      colors: {
        btn: {
          primary: "#FFD33F",
          secondary: "#F45D02",
        },
        bgPrimary: "#F4F8FB",
        primary: "#102542",
      },
    },
  },
  plugins: [],
};

module.exports = config;
