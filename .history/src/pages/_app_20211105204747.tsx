import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Script from "next/script";
import Footer from "../components/footer";
import Header from "../components/header";
import { theme } from "../styles/theme";
import "../styles/globals.scss";
import SEO from "../configs/seo.config";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
        <Script src={"../../public/prism/prism.js"}></Script>
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
