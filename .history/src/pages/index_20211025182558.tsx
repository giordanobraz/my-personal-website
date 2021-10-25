import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import laptop from "../../public/www.png";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Giordano Bruno - Desenvolvedor Fullstack</title>
      </Head>

      <main>
        <div className="container">
          <h3>Giordano</h3>
        </div>
      </main>

      {/* <main id="container" className={styles.home_page}>
        <section className={styles.hero}>
          <div className={styles.greetings}>
            <h1>Olá! Eu sou o Giordano ✌️</h1>
            <p>Desenvolvedor Fullstack Javascript.</p>
          </div>
          <div className={styles.image}>
            <Image src={laptop} alt="laptop" />
          </div>
        </section>
      </main> */}
    </>
  );
};

export default Home;
