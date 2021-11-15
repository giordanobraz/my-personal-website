import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./home.module.scss";

import githubImg from "../../public/social_icons/github.svg";
import instagramImg from "../../public/social_icons/instagram.svg";
import youtubeImg from "../../public/social_icons/youtube.svg";
import { Flex, Box, SimpleGrid, Text } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import HeroSection from "../components/hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Giordano Bruno - Desenvolvedor Fullstack</title>
      </Head>
      <Flex
        flexFlow="row no-wrap"
        height="calc(100vh - 10rem)"
        maxWidth="1366px"
        margin="0 auto"
        paddingX="2em"
        gap={20}
      >
        {/** Side Bar **/}
        <Sidebar />
        {/** Main Content **/}
        <HeroSection />
      </Flex>
    </>
  );
};

export default Home;
