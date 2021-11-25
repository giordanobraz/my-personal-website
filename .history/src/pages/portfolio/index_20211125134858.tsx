// eslint-disable-next-line @next/next/no-document-import-in-page
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import PortfolioItems from "../../components/portfolio";

export const SeoDetails = {
  title: "Portfólio | Giordano Bruno - Desenvolvedor Fullstack",
  description: "Alguns dos projetos que desenvolvi. Sempre atualizo :)",
  author: "Giordano Bruno Borges Braz da Silva",
  openGraph: {
    type: "website",
    url: "https://giordano.dev.br/portfolio",
    site_name: "Giordano Bruno - Desenvolvedor Fullstack",
    title: "Portfólio | Giordano Bruno - Desenvolvedor Fullstack",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <NextSeo
        title={SeoDetails.title}
        description={SeoDetails.description}
        openGraph={{
          type: "website",
          url: "https://giordano.dev.br/portfolio",
          site_name: "Giordano Bruno - Desenvolvedor Fullstack",
          title: "Portfólio | Giordano Bruno - Desenvolvedor Fullstack",
          images: [
            {
              url: "https://avatars.githubusercontent.com/u/14043484?v=4?s=400",
            },
          ],
        }}
      />
      <Flex
        maxWidth="1120px"
        margin="0 auto"
        paddingX="2em"
        minHeight={"calc(100vh - 10rem)"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{ gap: "2rem" }}
      >
        <Heading>Projetos</Heading>
        <Flex>
          <PortfolioItems />
        </Flex>
      </Flex>
    </>
  );
}
