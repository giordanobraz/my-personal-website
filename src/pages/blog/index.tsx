import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import HeroSection from "../../components/blog/hero";
import PreviousContent from "../../components/blog/previous_content";
import { getAllPosts } from "../../services/strapi";

interface Category {
  name: string;
  slug: string;
}

interface Post {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    author: string;
    category: Category[];
    publishedAt: string;
  };
}

interface PostProps {
  posts: Post[];
}

interface HeroPost extends Post {}

export default function BlogHome({ posts }: PostProps) {
  const hero_post: HeroPost = posts[0];
  const previous_posts = posts.slice(1);

  const seo = {
    title: `Blog | Giordano Bruno - Desenvolvedor`,
    description: "Blog do Giordano",
    openGraph: {
      type: "website",
      url: `"https://giordano.dev.br/blog"`,
      site_name: "Giordano Bruno - Desenvolvedor",
    },
  };

  return (
    <>
      <NextSeo {...seo} />
      <Flex
        flexDir={"column"}
        maxWidth="1160px"
        margin="0 auto"
        paddingX="2rem"
        paddingY={"7rem"}
      >
        <Box borderLeft={"8px solid"} borderColor={"purple.500"}>
          <Heading id="top" fontSize={["36px", "72px"]} marginLeft={"10px"}>
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
              title={hero_post.attributes.title}
              description={hero_post.attributes.description}
              slug={hero_post.attributes.slug}
              image={hero_post.attributes.image}
              published_at={hero_post.attributes.publishedAt}
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

export async function getStaticProps() {
  const getAllDataFromStrapi = await getAllPosts();
  const posts = getAllDataFromStrapi.data;

  if (!posts) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  posts.forEach((post: any) => {
    post.attributes.publishedAt = new Date(
      post.attributes.publishedAt
    ).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  });

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
