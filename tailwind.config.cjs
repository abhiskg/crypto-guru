/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
