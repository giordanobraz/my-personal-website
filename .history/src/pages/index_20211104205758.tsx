import type { NextPage } from "next";
import Head from "next/head";
import githubImg from "../../public/social_icons/github.svg";
import instagramImg from "../../public/social_icons/instagram.svg";
import youtubeImg from "../../public/social_icons/youtube.svg";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import HeroSection from "../components/hero";
import PreviousContent from "../components/previous_content";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Giordano Bruno - Desenvolvedor Fullstack</title>
      </Head>
      <Flex
        flexDir={["column", "row"]}
        maxWidth="1366px"
        margin="0 auto"
        paddingX="2em"
        style={{ gap: "20px" }}
      >
        {/** Side Bar **/}
        <Sidebar />
        <Box
          display="flex"
          flexDir="column"
          paddingX={15}
          overflow={["none", "auto"]}
        >
          <HeroSection />
          <PreviousContent />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
