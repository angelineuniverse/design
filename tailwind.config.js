/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/component/**/*.{html,js,ts,tsx,jsx}",
    "./src/index.ts",
    "./src/index.html",
  ],
  safelist: [{ pattern: /(bg|text|border|w)-./ }, { pattern: /([a-zA-Z]+)-./ }],
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
      colors: {
        primary: "#4651ff",
        "primary-dark": "#333fff",
        "primary-border": "#444eef",
        secondary: "#daff71",
        "secondary-dark": "#D6FF62",
        "secondary-border": "#c4f242",
        error: "#ff4b41",
        "error-dark": "#ff3e33",
        "error-border": "#eb4b42",
        warning: "#ffcc24",
        "warning-dark": "#ffc400",
        "warning-border": "#e2f335",
        success: "#1d7f42",
        "success-dark": "#196c38",
        "success-border": "#e2f335",
        "secondary-light": "#FB2576",
        green: "#3A4D39",
        "green-light": "#4F6F52",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
