import Head from "next/head";

interface PostSeo {
  seo: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
}

export const Seo = ({ seo }: PostSeo) => {
  return (
    <Head>
      <title>{seo.title} | Giordano Bruno - Desenvolvedor Fullstack</title>
      <meta property="og:title" content={seo.title} />
      <meta name="twitter:title" content={seo.title} />

      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:description" content={seo.description} />
    </Head>
  );
};
