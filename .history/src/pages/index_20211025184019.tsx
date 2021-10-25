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

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.avatar}>            
            <img
              src="https://lorempixel.com/185/185/people/"
              alt="Foto pessoal"
            />
          </div>

          <h1>Mayk Brito</h1>
          <a href="https://instagram.com/maykbrito">
            <img src="images/github.svg" alt="ícone github" />
            maykbrito
          </a>

          <p>
            An instructor focused on helping pople start programming for web
          </p>

          <ul>
            <li>
              <a href="https://youtube.com/maykbrito">
                <img src="images/youtube.svg" alt="ícone youtube" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/maykbrito">
                <img src="images/facebook.svg" alt="ícone facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/maykbrito">
                <img src="images/instagram.svg" alt="ícone instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/maykbrito">
                <img src="images/twitter.svg" alt="ícone twitter" />
              </a>
            </li>
          </ul>
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
