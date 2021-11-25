// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from "next/document";
import { Script } from "next/script";

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
          ></script>
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
          <Script
            id="iframely"
            strategy="lazyOnload"
          >{`document.querySelectorAll( 'oembed[url]' ).forEach( element => {
        iframely.load( element, element.attributes.url.value );
    } );`}</Script>
          <Script src={"/prism/prism.js"}></Script>
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
