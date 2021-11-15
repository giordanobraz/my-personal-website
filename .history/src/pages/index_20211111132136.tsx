import { Box, Flex } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import HeroSection from "../components/hero";
import PreviousContent from "../components/previous_content";
import Sidebar from "../components/sidebar";
import { getAllPosts } from "../services/strapi";

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
  published_at: string;
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
        flexDir={["column", "column", "column", "row"]}
        maxWidth="1366px"
        margin="0 auto"
        paddingX="2em"
        style={{ gap: "20px" }}
      >
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
              slug={hero_post.slug}
              image={hero_post.image}
              published_at={hero_post.published_at}
            />
          )}
          {previous_posts.length > 0 && (
            <PreviousContent previous_posts={previous_posts} />
          )}
        </Box>
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getAllPosts();
  const posts = response.data;

  posts.forEach((post: Post) => {
    post.published_at = new Date(post.published_at).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );
  });

  return {
    props: {
      posts,
    },
    revalidate: 60
  };
};

export default Home;