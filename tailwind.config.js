
/** @type {import('tailwindcss').Config} */

export const content = ["./**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      primary: "#F4D04E",
      secondary: {
        DEFAULT: "#FF9C01",
        100: "#FF9001",
        200: "#FF8E01",
      },
      black: {
        DEFAULT: "#000",
        100: "#1E1E2D",
        200: "#232533",
      },
      gray: {
        100: "#111111",
        200: "#6B6B6B"
      },
    },
    fontFamily: {
      figtree: ["FigTree", "sans-serif"],
     
    },
  },
};
export const plugins = [{
  tailwindcss: {},
  autoprefixer: {}
}];
