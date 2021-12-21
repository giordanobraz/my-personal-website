import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import { getAllPosts } from "../../services/strapi";
import HeroSection from "./components/hero";
import PreviousContent from "./components/previous_content";

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

const BlogHome = ({ posts }: PostProps) => {
  const hero_post: HeroPost = posts[0];
  const previous_posts = posts.slice(1);

  return (
    <>
      {/* <DefaultSeo {...SEO} /> */}
      <Flex
        flexDir={["column", "column", "column", "row"]}
        maxWidth="1120px"
        margin="0 auto"
        paddingX="2em"
      >
        <Box
          display="flex"
          flexDir="column"
          paddingX={15}
          overflow={["none", "auto"]}
          minHeight={"calc(100vh - 10rem)"}
          style={{ gap: "2rem" }}
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
          <Stack spacing={2}>
            <Heading textTransform={"uppercase"}>
              Postagens Mais Antigas
            </Heading>
            <Divider />
          </Stack>
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

export default BlogHome;
