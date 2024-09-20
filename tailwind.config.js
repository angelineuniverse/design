/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    fontFamily: {
      mono: ["Roboto", "monospace"],
      interblack: ["interblack"],
      interextrabold: ["interextrabold"],
      interbold: ["interbold"],
      intermedium: ["intermedium"],
      intersemibold: ["intersemibold"],
      interregular: ["interregular"],
      interlight: ["interlight"],
      interthin: ["interthin"],
    },
    extend: {
      fontSize: {
        xsm: ["11px", "14px"],
      },
      colors: {
        primary: "#0D335D",
        secondary: "#EA047E",
        "primary-light": "#1A508B",
        "secondary-light": "#FB2576",
        green: "#3A4D39",
        "green-light": "#4F6F52",
      },
    },
  },
  plugins: [],
};
