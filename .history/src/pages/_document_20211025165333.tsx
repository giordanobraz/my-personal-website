// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

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
            content="Seja bem-vindo ao meu site! Aqui você pode ver projetos que já desenvolvi, e links para minhas redes sociais."
          />
          <meta
            name="keywords"
            content="desenvolvedor, developer, javascript, typescript, angular, react, reactjs, nextjs, fullstack, full stack, mern, mean"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Portuguese" />
          <meta name="author" content="Giordano Bruno" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://giordano.dev.br" />
          <meta property="og:title" content="Giordano Bruno - Desenvolvedor Fullstack" />
          <meta property="og:description" content="Seja bem-vindo ao meu site! Aqui você pode ver projetos que já desenvolvi, e links para minhas redes sociais." />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/14043484?v=4?s=400"
          />
          <meta
            property="og:image:alt"
            content="Fullstack Javascript Developer"
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
