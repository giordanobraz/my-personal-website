import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import laptop from '../../public/www.png';
import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Giordano Bruno</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <h1>Olá! Eu sou o Giordano ✌️</h1>
          <p>Desenvolvedor Fullstack Javascript.</p>
        </section>
        <Image src={laptop} alt="laptop" />
      </main>
    </>
  )
}

export default Home
