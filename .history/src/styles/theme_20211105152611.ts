import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  useSystemColorMode: false,
  fonts: {
    heading: "Fjalla One",
    body: "Fjalla One",
  },
  colors: {
    blue: {
      "500": "#3684BD",
      "300": "#179AF9",
    },
    black: {
      "700": "#242424",
    },
    grey: {
      "300": "#1c1c1c",
      "500": "#C2C2C2",
    },
  },
  styles: {
    global: {
      body: {
        maxWidth: "1920px",
        margin: "0 auto",
        bg: "black.700",
        color: "white",
      },
    },
  },
});
