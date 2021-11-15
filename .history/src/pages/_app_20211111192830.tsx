import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import App from "next/app";
import Script from "next/script";
import { createContext } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SEO from "../configs/seo.config";
import { getGlobalProps } from "../services/strapi";
import "../styles/globals.scss";
import { theme } from "../styles/theme";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;

  return (
    <GlobalContext.Provider value={global}>
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
        <Script>{`document.querySelectorAll( 'oembed[url]' ).forEach( element => {
          iframely.load( element, element.attributes.url.value );
      } );`}</Script>
        <Script src={"/prism/prism.js"}></Script>
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export const getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);
  const response = await getGlobalProps();
  const global = response.data;

  return {
    ...appProps,
    pageProps: {
      global,
    },
  };
};

export default MyApp;
