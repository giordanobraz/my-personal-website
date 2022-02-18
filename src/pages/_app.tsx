import { ChakraProvider, CSSReset, ScaleFade } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../../public/prism/prism.css";
import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import SiteScripts from "../components/shared/scripts";
import ScrollToTop from "../components/shared/scrollToTopButton";
import { LocaleProvider } from "../hooks/useLocale";
import "../styles/globals.scss";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <SiteScripts />
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ScaleFade key={router.route} initialScale={0.9} in={true}>
          <LocaleProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ScrollToTop />
          </LocaleProvider>
        </ScaleFade>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
