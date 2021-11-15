// eslint-disable-next-line @next/next/no-document-import-in-page
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";


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
      justifyContent={"center"}
      >
        <Heading>Projetos</Heading>

        <SimpleGrid>
          <Box>
            
          </Box>
        </SimpleGrid>
      </Flex>
      {/* <main id="container" className={styles.portfolio_page}>
        <div className={styles.page_title}>
          <h1>Projetos</h1>
        </div>
        <section className={styles.cards}>
          <Card />
        </section>
      </main> */}
    </>
  );
}
