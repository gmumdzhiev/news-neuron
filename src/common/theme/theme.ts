import { IBreakPoints } from "./ITheme";

const utilBreakPoints: IBreakPoints = {
  small: "0rem",
  medium: "40rem",
  large: "64rem",
  extraLarge: "80rem",
};

export const theme = {
  initialColorModeName: "default",
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["0rem", "40rem", "52rem", "64rem"],
  utilBreakPoints,
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Red Hat Display",  sans-serif',
    monospace: "Menlo, monospace",
  },
  responsiveProperties: {
    "font-size": {
      small: {
        small: "8px",
        medium: "10px",
        large: "12px",
        extraLarge: "14px",
      },
      medium: {
        small: "14px",
        medium: "18px",
        large: "24px",
        extraLarge: "22px",
      },
      large: {
        small: "18px",
        medium: "22px",
        large: "28px",
        extraLarge: "22px",
      },
    },
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  borderRadius: {
    smaller: "0.25rem",
    small: "0.5rem",
    medium: "0.8rem",
    large: "1rem",
    largest: "3rem",
  },
  borderStyles: ["solid"],
  borderWidths: ["0px", "1px", "2px", "3px", "4px", "5px"],
  boxShadows: {
    "0-dp": "none",
    "1-dp":
      " 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",
    "2-dp":
      "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)",
    "3-dp":
      "0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)",
    "4-dp":
      "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)",
    "6-dp":
      " 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)",
    "8-dp":
      "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)",
    "9-dp":
      "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)",
    "12-dp":
      "0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20)",
    "16-dp":
      " 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)",
    "24-dp":
      "0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)",
  },

  colors: {
    body: "#F8FFF5",
    text: "#F8FFF5",
    background: "#005cd9",
    inverseBackground: "#F8FFF5",
    gradient:
      "linear-gradient(128deg, rgba(0,92,217,1) 0%, rgba(255,3,134,1) 100%)",
    secondGradient:
      "linear-gradient(60deg, rgba(0,255,255,1) 0%, rgba(0,92,217,1) 100%)",
    accentGradient:
      "linear-gradient(90deg, rgba(254,131,204,1) 0%, rgba(254,186,181,1) 100%)",
    hoverGradient:
      "linear-gradient(to left, rgba(255, 255, 255, .05), transparent)",
    primary: {
      white: "#F8FFF5",
      light: "#ff0386",
      main: "#005cd9",
      dark: "#0E5FD6",
      disabled: "#E0B6DA",
      softText: "#808080",
      contrastText: "#272525",
      mutedText: "#E5E7E8",
      none: "none",
    },
    secondary: {
      light: "#febab5",
      main: "#fe83cc",
      dark: "#0039c7",
      disabled: "#e6e6e6",
      contrastText: "#272525",
      mutedText: "#E5E7E8",
      none: "none",
    },
    highlight: "#ff0386",
    accent: "#00ffff",
    darken: "#005cd9",
    info: "#2164db",
    warning: "#fbb03b",
    success: "#69d321",
    error: "#d24444",
    blue: {
      100: "#cfe2ff",
      200: "#9ec5fe",
      300: "#6ea8fe",
      400: "#3d8bfd",
      500: "#0d6efd",
      600: "#0a58ca",
      700: "#084298",
      800: "#052c65",
      900: "#031633",
    },
    indigo: {
      100: "#e0cffc",
      200: "#c29ffa",
      300: "#a370f7",
      400: "#9462e7",
      500: "#6610f2",
      600: "#520dc2",
      700: "#3d0a91",
      800: "#290661",
      900: "#140330",
    },
    purple: {
      100: "#e2d9f3",
      200: "#c5b3e6",
      300: "#a98eda",
      400: "#8c68cd",
      500: "#6f42c1",
      600: "#59359a",
      700: "#432874",
      800: "#2c1a4d",
      900: "#160d27",
    },
    pink: {
      100: "hsl(330.91,67.35%,90.39%)",
      200: "hsl(330,67.35%,80.78%)",
      300: "hsl(330.31,65.99%,71.18%)",
      400: "hsl(330,66.33%,61.57%)",
      500: "hsl(330.18,66.53%,51.96%)",
      600: "hsl(330,61.32%,41.57%)",
      700: "hsl(330.31,61.01%,31.18%)",
      800: "hsl(330,62.26%,20.78%)",
      900: "hsl(330.91,62.26%,10.39%)",
    },
    red: {
      100: "hsl(354.55,70.21%,90.78%)",
      200: "hsl(353.73,70.53%,81.37%)",
      300: "hsl(354.6,70.42%,72.16%)",
      400: "hsl(354.18,70.53%,62.75%)",
      500: "hsl(354.25,70.46%,53.53%)",
      600: "hsl(354.18,61.47%,42.75%)",
      700: "hsl(354.6,60.98%,32.16%)",
      800: "hsl(353.73,61.47%,21.37%)",
      900: "hsl(354.55,60%,10.78%)",
    },
    orange: {
      100: "hsl(26.81,100%,90.78%)",
      200: "hsl(27.1,97.89%,81.37%)",
      300: "hsl(27.43,98.59%,72.16%)",
      400: "hsl(27.42,97.89%,62.75%)",
      500: "hsl(27.3,98.31%,53.53%)",
      600: "hsl(27.42,85.32%,42.75%)",
      700: "hsl(27.43,85.37%,32.16%)",
      800: "hsl(27.1,85.32%,21.37%)",
      900: "hsl(26.81,85.45%,10.78%)",
    },
    yellow: {
      100: "hsl(45.6,100%,90.2%)",
      200: "hsl(44.85,100%,80.59%)",
      300: "hsl(45.1,100%,70.78%)",
      400: "hsl(44.85,100%,61.18%)",
      500: "hsl(45,100%,51.37%)",
      600: "hsl(44.85,94.29%,41.18%)",
      700: "hsl(45.1,94.9%,30.78%)",
      800: "hsl(44.85,94.29%,20.59%)",
      900: "hsl(45.6,96.15%,10.2%)",
    },
    green: {
      100: "hsl(152.73,31.43%,86.27%)",
      200: "hsl(152.73,31.43%,72.55%)",
      300: "hsl(151.82,31.43%,58.82%)",
      400: "hsl(152.05,38.26%,45.1%)",
      500: "hsl(152.18,68.75%,31.37%)",
      600: "hsl(152.05,68.75%,25.1%)",
      700: "hsl(151.82,68.75%,18.82%)",
      800: "hsl(152.73,68.75%,12.55%)",
      900: "hsl(152.73,68.75%,6.27%)",
    },
    teal: {
      100: "hsl(162.35,60.71%,89.02%)",
      200: "hsl(162.09,60.36%,78.24%)",
      300: "hsl(162.35,61.45%,67.45%)",
      400: "hsl(162.22,61.09%,56.67%)",
      500: "hsl(162.25,72.53%,45.69%)",
      600: "hsl(162.22,72.19%,36.67%)",
      700: "hsl(162.35,72.86%,27.45%)",
      800: "hsl(162.09,72.04%,18.24%)",
      900: "hsl(162.35,73.91%,9.02%)",
    },
    cyan: {
      100: "hsl(190.67,88.24%,90%)",
      200: "hsl(189.89,88.35%,79.8%)",
      300: "hsl(190.15,88.31%,69.8%)",
      400: "hsl(189.89,88.35%,59.61%)",
      500: "hsl(190.04,89.72%,49.61%)",
      600: "hsl(189.89,90.1%,39.61%)",
      700: "hsl(190.15,89.47%,29.8%)",
      800: "hsl(189.89,90.1%,19.8%)",
      900: "hsl(190.67,88.24%,10%)",
    },
    gray: {
      100: "hsl(210,16.67%,97.65%)",
      200: "hsl(210,15.79%,92.55%)",
      300: "hsl(210,13.79%,88.63%)",
      400: "hsl(210,13.95%,83.14%)",
      500: "hsl(210,10.81%,70.98%)",
      600: "hsl(208.24,7.3%,45.69%)",
      700: "hsl(210,8.75%,31.37%)",
      800: "hsl(210,10.34%,22.75%)",
      900: "hsl(210,10.81%,14.51%)",
    },
    modes: {
      dark: {
        text: "#e9ecef",
        background: "#272525",
        inverseBackground: "#e9ecef",
        gradient: "linear-gradient(270deg, #0d324d, #0d324d)",
        secondGradient:
          "linear-gradient(60deg, rgba(0,255,255,1) 0%, rgba(0,92,217,1) 100%)",
        accentGradient:
          "linear-gradient(59deg, rgba(0,255,154,1) 0%, rgba(52,235,226,1) 100%)",
        hoverGradient:
          "linear-gradient(to left, rgba(255, 255, 255, .05), transparent)",
        primary: {
          light: "#8885A3",
          main: "#333B5B",
          dark: "#1F295C",
          disabled: "#e6e6e6",
          contrastText: "#fbb03b",
          mutedText: "#d24444",
          none: "none",
        },
        secondary: {
          light: "#fbb03b",
          main: "#fbb03b",
          dark: "#fbb03b",
          disabled: "#e6e6e6",
          contrastText: "#fbb03b",
          mutedText: "#fbb03b",
          none: "none",
        },
        highlight: "#47c1bf",
        accent: "#34eb8c",
        darken: "#00044c",
        info: "#2164db",
        warning: "#fbb03b",
        success: "#69d321",
        error: "#d24444",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: { color: "primary" },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
  },
};

export type NewsNeuronTheme = typeof theme;