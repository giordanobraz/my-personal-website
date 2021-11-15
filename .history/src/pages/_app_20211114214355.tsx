import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Script from "next/script";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.scss";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NNQMNNCNE7`}
      />
      <Script id="gtag" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-NNQMNNCNE7');
        `}
      </Script>
      <Script id="iframely">{`document.querySelectorAll( 'oembed[url]' ).forEach( element => {
          iframely.load( element, element.attributes.url.value );
      } );`}</Script>
      <Script id="prism" src={"/prism/prism.js"}></Script>      
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
