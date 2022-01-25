import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { getAllPosts, getPostBySlug } from "../../../services/strapi";

interface Params {
  params: {
    slug: string;
  };
}

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
  };
  formatted_date: string;
}

export default function Post({ post, formatted_date }: PostProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <span>Carregando...</span>;
  }

  function createMarkup(content: any) {
    return {
      __html: content,
    };
  }

  return (
    <>
      <NextSeo
        title={`${post.attributes.title} | Giordano Bruno - Desenvolvedor`}
        description={post.attributes.description}
        openGraph={{
          type: "website",
          url: `"https://giordano.dev.br/blog/post/${post.attributes.slug}"`,
          title: `${post.attributes.title}`,
          description: `${post.attributes.description}`,
          site_name: "Giordano Bruno - Desenvolvedor",
          images: [
            {
              url: `${post.attributes.image?.data.attributes.url}`,
              alt: `${post.attributes.title}`,
            },
          ],
        }}
      />

      <Flex
        flexDir="column"
        maxWidth="1120px"
        margin="0 auto"
        paddingX="2em"
        paddingTop={100}
        style={{ gap: "20px" }}
      >
        <Stack spacing={25} minH={"calc(100vh - 10rem)"}>
          <Img
            src={`${post.attributes.image?.data.attributes.url}`}
            alt={post.attributes.title}
            maxH={500}
            loading="lazy"
            objectFit="cover"
            id="top"
          />

          <Stack spacing={3}>
            <Heading fontSize="md" color="grey.500" textAlign="left">
              {formatted_date}
            </Heading>
            <Heading fontSize="6xl" textTransform="uppercase">
              {post.attributes.title}
            </Heading>
          </Stack>
          <Box fontSize="xl" color="grey.300" fontFamily="Roboto">
            <div
              className="ck-content article"
              dangerouslySetInnerHTML={createMarkup(post.attributes.content)}
            />
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts();

  const paths = allPosts.data.data.map((post: any) => ({
    params: {
      slug: post.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params;
  const response = await getPostBySlug(slug);
  const post = response.data.data[0];

  const formatted_date = new Date(
    post.attributes.publishedAt
  ).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return {
    props: {
      post,
      formatted_date,
    },
  };
}
