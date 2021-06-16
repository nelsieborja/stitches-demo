import { createCss } from "@stitches/react";

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme
} = createCss({
  theme: {
    colors: {
      blue: "#9ed2cb",
      lightBlue: "rgb(158 210 203 / 70%)",
      green: "#9ebb38",
      lightGreen: "rgb(158 187 56 / 70%)",
      white: "#fff"
    }
  },
  media: {
    bp1: "(min-width: 768px)"
  },
  utils: {
    p: (config) => (value) => ({
      padding: value
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
});

export const darkTheme = theme({
  colors: {
    blue: "#044239",
    lightBlue: "rgb(4 66 57 / 70%)",
    green: "#5b7500",
    lightGreen: "rgb(91 117 0 / 70%)"
  }
});

export const globalStyles = global({
  // "@import": "styles.css",
  "*": {
    margin: 0,
    padding: 0,
    font: "14px Arial"
  }
});
