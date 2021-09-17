// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import * as gtag from "../lib/gtag";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="title"
            content="Giordano Bruno - Desenvolvedor Fullstack"
          />
          <meta
            name="description"
            content="Seja bem-vindo ao meu site! Aqui voc ê pode ver projetos que já desenvolvi, e links para minhas mídias sociais."
          />
          <meta
            name="keywords"
            content="desenvolvedor, developer, javascript, typescript, angular, react, reactjs, nextjs, fullstack, full stack, mern, mean"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Portuguese" />
          <meta name="author" content="Giordano Bruno" />
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
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.G_TAG_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.G_TAG_ID}');
                `,
            }}
          />
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
