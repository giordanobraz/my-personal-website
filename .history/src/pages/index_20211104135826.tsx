import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./home.module.scss";

import githubImg from "../../public/social_icons/github.svg";
import instagramImg from "../../public/social_icons/instagram.svg";
import youtubeImg from "../../public/social_icons/youtube.svg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Giordano Bruno - Desenvolvedor Fullstack</title>
      </Head>

      

      {/* <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.avatar}>
            <Image
              src="https://avatars.githubusercontent.com/u/14043484?v=4?s=400"
              alt="foto pessoal"
              height="460"
              width="460"
            />
          </div>

          <h1>Giordano Bruno</h1>
          <a
            href="https://github.com/giordanobraz"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={githubImg} alt="github" />
            giordanobraz
          </a>

          <p>Fullstack Javascript Developer based in Brazil.</p>

          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCe79dc5tl1MDLKSn7HNoegA"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={youtubeImg} alt="youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/giobraz.exe"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={instagramImg} alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </main>       */}
    </>
  );
};

export default Home;
