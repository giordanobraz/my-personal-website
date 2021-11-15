import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      "500": "#3684BD",
      "300": "#179AF9",
    },
    black: {
      "700": "#181616",
    },
  },
  styles: {
    global: {
      body: {
        maxWidth: "1920px",
        margin: "0 auto",
        bg: "black.700",
      },
    },
  },
});
