// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script';
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="desenvolvedor, developer, javascript, typescript, angular, react, reactjs, nextjs, fullstack, full stack, mern, mean"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`//cdn.iframe.ly/embed.js?api_key=${process.env.NEXT_PUBLIC_IFRAMELY}`}
          />   
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
