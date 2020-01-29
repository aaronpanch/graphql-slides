export default {
  fonts: {
    body: "ff-tisa-web-pro, serif",
    heading: "ff-tisa-web-pro, serif",
    monospace: '"Fira Code", monospace'
  },
  fontWeights: {
    body: 100,
    heading: 100,
    bold: 300
  },
  colors: {
    text: "#333",
    background: "#fff",
    primary: "blue"
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      textAlign: "left",
      fontSize: ["1em", "1.5em", null, "4em"]
    },
    h1: {
      fontStyle: "italic"
    },
    small: {
      fontWeight: 300,
      color: "colors.primary"
    },
    Slide: {
      display: "flex",
      justifyContent: "space-around",
      padding: "2em",
      textAlign: "left"
    }
  }
};
