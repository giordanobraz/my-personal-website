import { extendTheme } from "@chakra-ui/react";

const colors = {
  grey: {
    100: "#E1E1E6",
    200: "#C4C4CC",
    300: "#8D8D99",
    400: "#7C7C8A",
    500: "#505059",
    600: "#323238",
    700: "#29292E",
    800: "#202024",
    900: "#121214",
    950: "#09090A",
  }
}

export const theme = extendTheme({
  useSystemColorMode: false,
  fonts: {
    body: "Fjalla One",
    heading: "Fjalla One",
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