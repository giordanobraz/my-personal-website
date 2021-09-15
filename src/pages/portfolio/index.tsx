// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from "next/head";
import Image from "next/image";
import { projects } from "./data";
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
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <Image
                className={styles.image_card}
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
              />

              <div className={styles.card_content}>
                <div className={styles.card_title}>{project.title}</div>
                <p className={styles.card_text}>{project.info}</p>
                <a className={styles.card_button} href="" target="_blank">
                  Visualizar
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
