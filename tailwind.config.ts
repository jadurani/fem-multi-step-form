import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      body2: "0.8rem",
      body1: "1rem",
      h6: "1rem",
      h5: "1.25rem",
      h4: "1.563rem",
      h3: "1.953rem",
      h2: "2.441rem",
      h1: "3.052rem",
    },
    extend: {
      colors: {
        zircon: "#EFF5FF",
        denim: "#022959",
        lightBlue: "#ABBCFF",
        orange: "#FFAF7E",
        skyBlue: "#BEE2FD",
        pink: "#F9818E",
        purple: "#483EFF",
        error: "#EE374A",
        grey: {
          DEFAULT: "#9699AA",
          veryLight: "#F8F9FF",
          light: "#D6D9E6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
