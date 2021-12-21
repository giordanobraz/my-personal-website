import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import HeroSection from "../../components/hero";
import PreviousContent from "../../components/previous_content";
import { getAllPosts } from "../../services/strapi";

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

export default function BlogHome({ posts }: PostProps) {
  const hero_post: HeroPost = posts[0];
  const previous_posts = posts.slice(1);

  return (
    <>
      <NextSeo
        title={`Blog | Giordano Bruno - Desenvolvedor`}
        description="Blog do Giordano"
        openGraph={{
          type: "website",
          url: `"https://giordano.dev.br/blog"`,
          site_name: "Giordano Bruno - Desenvolvedor",
        }}
      />
      <Flex
        flexDir={"column"}
        maxWidth="1160px"
        margin="0 auto"
        paddingX="2rem"
        paddingY={"7rem"}
      >
        <Box borderLeft={"8px solid"} borderColor={"purple.500"}>
          <Heading fontSize={["36px", "72px"]} marginLeft={"10px"}>
            Blog
          </Heading>
        </Box>

        <Flex
          flexDir="column"
          paddingTop={50}
          style={{ gap: "2rem" }}
          paddingX={1}
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
            <Heading textTransform={"uppercase"}>Mais Antigas</Heading>
            <Divider />
          </Stack>
          {previous_posts.length > 0 && (
            <PreviousContent previous_posts={previous_posts} />
          )}
        </Flex>
      </Flex>
    </>
  );
}

export async function getServerSideProps() {
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
  };
}
