import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../../public/prism/prism.css";
import Footer from "../components/footer";
import Header from "../components/header";
import SiteScripts from "../components/scripts";
import "../styles/globals.scss";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <SiteScripts />
      <ChakraProvider theme={theme}>
        <ScaleFade key={router.route} initialScale={0.9} in={true}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ScaleFade>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
