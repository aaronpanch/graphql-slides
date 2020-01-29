const headerHighlight = {
  backgroundSize: "100% 1.2em",
  wordBreak: "keep-all",
  paddingRight: "1em",
  marginRight: "-0.5em",
  backgroundPosition: "0.5em 0px",
  backgroundRepeat: "no-repeat space"
};

export default {
  googleFont: "https://fonts.googleapis.com/css?family=Fira+Code&display=swap",
  fonts: {
    body: "ff-tisa-web-pro, serif",
    heading: "ff-tisa-web-pro, serif",
    monospace: '"Fira Code", monospace'
  },
  fontWeights: {
    body: 300,
    heading: 300,
    bold: 400
  },
  colors: {
    text: "#333",
    background: "#fff",
    primary: "rgb(208,46,149)",
    accent: "#3D50C5"
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
      fontStyle: "italic",
      backgroundImage:
        "linear-gradient(transparent 55%,#FED1D1 55%,#FED1D1 95%,transparent 95%)",
      ...headerHighlight
    },
    h2: {
      backgroundImage:
        "linear-gradient(transparent 55%,#FECB29 55%,#FECB29 95%,transparent 95%)",
      ...headerHighlight
    },
    strong: {
      color: "primary"
    },
    Slide: {
      display: "flex",
      justifyContent: "space-around",
      padding: "2em",
      textAlign: "left"
    },
    CodeSurfer: {
      pre: {
        color: "text",
        backgroundColor: "background"
      },
      code: {
        color: "text",
        backgroundColor: "background",
        fontFamily: "monospace"
      },
      tokens: {
        "comment cdata doctype": {
          fontStyle: "italic"
        },
        "builtin changed keyword punctuation operator tag deleted string attr-value char number inserted": {
          color: "primary"
        },
        plain: {
          color: "accent"
        }
      },
      title: {
        backgroundColor: "background",
        color: "text"
      },
      subtitle: {
        color: "#d6deeb",
        backgroundColor: "rgba(10,10,10,0.9)"
      },
      unfocused: {
        // only the opacity of unfocused code can be changed
        opacity: 0.2
      }
    }
  }
};
