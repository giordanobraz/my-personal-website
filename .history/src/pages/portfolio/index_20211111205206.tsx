// eslint-disable-next-line @next/next/no-document-import-in-page
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import PortfolioItems from "../../components/portfolio";

export const SeoDetails = {
  title: "Portfólio | Giordano Bruno - Desenvolvedor Fullstack",
  description: "",
  author: "",
  openGraph: {
    type: "website",
    url: "https://giordano.dev.br",
    site_name: "Giordano Bruno - Desenvolvedor Fullstack",
    title: "Portfólio | Giordano Bruno - Desenvolvedor Fullstack",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <DefaultSeo {...SeoDetails} />
      <Flex
        maxWidth="1366px"
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
