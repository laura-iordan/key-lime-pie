import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

const theme = createTheme({
    teal: {
        100: "#cfedef",
        200: "#9fdae0",
        300: "#6fc8d0",
        400: "#3fb5c1",
        500: "#0fa3b1",
        600: "#0c828e",
        700: "#09626a",
        800: "#064147",
        900: "#032123"
    },
    blue: {
        100: "#f0f9fe",
        200: "#e1f3fd",
        300: "#d3eefc",
        400: "#c4e8fb",
        500: "#b5e2fa",
        600: "#91b5c8",
        700: "#6d8896",
        800: "#485a64",
        900: "#242d32"
    },
    common: {
        100: "#fefdfd",
        200: "#fdfcfa",
        300: "#fbfaf8",
        400: "#faf9f5",
        500: "#f9f7f3",
        600: "#c7c6c2",
        700: "#959492",
        800: "#646361",
        900: "#323131"
    },
    yellow: {
        100: "#fbf8ed",
        200: "#f8f2db",
        300: "#f4ebc8",
        400: "#f1e5b6",
        500: "#eddea4",
        600: "#beb283",
        700: "#8e8562",
        800: "#5f5942",
        900: "#2f2c21"
    },
    orange: {
        100: "#fdece3",
        200: "#fcd9c7",
        300: "#fac6aa",
        400: "#f9b38e",
        500: "#f7a072",
        600: "#c6805b",
        700: "#946044",
        800: "#63402e",
        900: "#312017"
    }, 
    green: {
          100: "#eaf5e8",
          200: "#d5ead1",
          300: "#c1e0ba",
          400: "#acd5a3",
          500: "#97cb8c",
          600: "#79a270",
          700: "#5b7a54",
          800: "#3c5138",
          900: "#1e291c"
    },
    palette: {
        primary: {
            main: colors.green[500],
        },
        secondary: {
            main: colors.blue[500],
        },
        neutral: {
            dark: colors.yellow[700],
            main: colors.yellow[500],
            light: colors.yellow[100]
        },
        background: {
            default: colors.common[500]
        }
    }, 

    typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
        },
        h2: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
        },
        h3: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
        },
        h4: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
        },
        h5: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
        },
        h6: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
        }
    }
});

export const mainTheme = theme;