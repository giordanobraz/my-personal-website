import type { NextPage } from "next";
import Head from "next/head";
import githubImg from "../../public/social_icons/github.svg";
import instagramImg from "../../public/social_icons/instagram.svg";
import youtubeImg from "../../public/social_icons/youtube.svg";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import HeroSection from "../components/hero";
import PreviousContent from "../components/previous_content";
import { getAllPosts } from "../services/strapi";
import { GetStaticProps } from "next";

interface Category {
  name: string;
  slug: string;
}

interface Post {
  title: string;
  description: string;
  content: string;
  slug: string;
  image: {
    url: string;
  };
  author: string;
  category: Category[];
}

interface PostProps {
  posts: Post[];
}

interface HeroPost extends Post {}

const Home = ({ posts }: PostProps) => {
  const hero_post: HeroPost = posts[0];
  const previous_posts = posts.slice(1);

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
          {hero_post && (
            <HeroSection
              title={hero_post.title}
              description={hero_post.description}
              content={hero_post.content}
              slug={hero_post.slug}
              image={hero_post.image}
              author={hero_post.author}
              category={hero_post.category}
            />
          )}
          <PreviousContent />
        </Box>
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getAllPosts();
  const posts = response.data;
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
