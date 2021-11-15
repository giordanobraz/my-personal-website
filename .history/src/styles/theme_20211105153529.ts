import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  useSystemColorMode: false,
  fonts: {
    body: "Open Sans",
    heading: "Fjalla One",
  },
  colors: {
    blue: {
      "500": "#3684BD",
      "300": "#179AF9",
    },
    black: {
      "700": "#1c1c1c",
    },
    grey: {
      "300": "#dddddd",
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
