// eslint-disable-next-line @next/next/no-document-import-in-page
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
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
      textAlign={"center"}
      >
        <Heading>Projetos</Heading>
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
