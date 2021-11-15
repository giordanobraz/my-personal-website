// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from "next/head";
import Card from "./data";
import styles from "./index.module.scss";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Giordano Bruno - Portfólio</title>
      </Head>
      <main id="container" className={styles.portfolio_page}>
        <div className={styles.page_title}>
          <h1>Projetos</h1>
        </div>
        <section className={styles.cards}>
          <Card />
        </section>
      </main>
    </>
  );
}
