import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ArticleJsonLd } from "next-seo";
import { getAllPosts, getPostBySlug } from "../../services/strapi";

interface Category {
  name: string;
  slug: string;
}

interface Author {
  name: string;
  email: string;
  picture: {
    url: string;
  };
}

interface PostProps {
  post: {
    title: string;
    description: string;
    content: string;
    slug: string;
    image: {
      url: string;
    };
    author: Author[];
    category: Category[];
    published_at: string;
    formatted_content: any;
    formatted_date: string;
  };
}

export default function Post({ post }: PostProps) {
  function createMarkup(content: any) {
    return {
      __html: content,
    };
  }

  return (
    <>
      {/* <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://giordano.dev.br",
          title: `${post.title}`,
          description: `${post.description}`,
          site_name: "Giordano Bruno - Desenvolvedor Fullstack",
          images: [
            {
              url: `${post.image}`,
              alt: `${post.title}`,
            },
          ],
        }}
        twitter={{}}
      /> */}
      <ArticleJsonLd
        url={`https://giordano.dev.br/posts/${post.slug}`}
        title={post.title}
        datePublished={post.published_at}
        authorName={[`${post.author}`]}
        description={post.description}
        publisherLogo={post.author[0].picture?.url}
        publisherName={post.author[0].name}
        images={[`${post.image.url}`]}
      />

      <Flex
        flexDir="column"
        maxWidth="1120px"
        margin="0 auto"
        paddingX="2em"
        style={{ gap: "20px" }}
      >
        <Stack spacing={25} minH={"calc(100vh - 10rem)"}>
          <Img
            src={`${post.image?.url}`}
            alt={post.title}
            maxH={500}
            loading="lazy"
            objectFit="cover"
          />
          <Stack spacing={3}>
            <Heading fontSize="md" color="grey.500" textAlign="left">
              {post.formatted_date}
            </Heading>
            <Heading fontSize="6xl" textTransform="uppercase">
              {post.title}
            </Heading>
          </Stack>
          <Box fontSize="xl" color="grey.300" fontFamily="Roboto">
            <div
              className="article"
              dangerouslySetInnerHTML={createMarkup(post.content)}
            />
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getAllPosts();
  const posts = response.data;

  return {
    paths: posts.map((post: any) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const response = await getPostBySlug(slug);
  const post = response.data;
  // const formatted_content = await markdownToHtml(post.content);
  const formatted_date = new Date(post.published_at).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
  return {
    props: {
      post: {
        ...post,
        formatted_date,
      },
    },
    revalidate: 1,
  };
};
