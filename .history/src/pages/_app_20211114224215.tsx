import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Script from "next/script";
import "../../public/prism/prism.css";
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
      <Script>{`function loadIframelyEmbedJs() {
        // Replace 'iframe.ly' with your custom CDN if available.
        if (document.querySelectorAll("[data-iframely-url]").length === 0
            && document.querySelectorAll("iframe[src*='iframe.ly']").length === 0) return;
        var iframely = window.iframely = window.iframely || {};
        if (iframely.load) {
            iframely.load();
        } else {
            var ifs = document.createElement('script'); ifs.type = 'text/javascript'; ifs.async = true;
            ifs.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//cdn.iframe.ly/embed.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ifs, s);
        }
    }
    // Run after DOM ready.
    loadIframelyEmbedJs();`}</Script>
      <Script src={"/prism/prism.js"}></Script>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
