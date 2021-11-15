// eslint-disable-next-line @next/next/no-document-import-in-page
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import PortfolioItems from "../../components/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Giordano Bruno - Portfólio</title>
      </Head>

      <Flex 
      maxWidth="1366px"
      margin="0 auto"
      paddingX="2em"
      minHeight={"calc(100vh - 10rem)"}
      
      >
        <Heading>Projetos</Heading>

        <SimpleGrid columns={3}>
          <PortfolioItems />
        </SimpleGrid>
      </Flex>      
    </>
  );
}