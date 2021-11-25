import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import { DefaultSeo } from "next-seo";
import HeroSection from "../components/hero";
import PreviousContent from "../components/previous_content";
import SEO from "../configs/seo.config";
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
      <DefaultSeo {...SEO} />
      <Flex
        flexDir={["column", "column", "column", "row"]}
        maxWidth="1120px"
        margin="0 auto"
        paddingX="2em"
        style={{ gap: "20px" }}
      >
        <Box
          display="flex"
          flexDir="column"
          paddingX={15}
          overflow={["none", "auto"]}
          minHeight={"calc(100vh - 10rem)"}
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
          <Heading textTransform={"uppercase"}>Postagens Mais Antigas</Heading>
          <Divider />
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
    revalidate: 1,
  };
};

export default Home;
