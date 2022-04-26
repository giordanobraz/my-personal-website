import { Box, Heading, Stack, VStack } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Layout from "../../../components/blog/blogLayout";
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

  const seo = {
    title: `${post.attributes.title} | Giordano Bruno - Desenvolvedor`,
    description: post.attributes.description,
    openGraph: {
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
    },
  };

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
      <NextSeo {...seo} />

      <Layout>
        <Stack paddingTop={"70px"} flexDir={"column"} spacing={5}>
          <Img
            src={`${post.attributes.image?.data.attributes.url}`}
            alt={post.attributes.title}
            maxH={500}
            loading="lazy"
            objectFit="cover"
            id="top"
          />

          <Stack minWidth={"100%"}>
            <VStack maxWidth={"900px"} margin={"0 auto"}>
              <Heading fontSize={"md"} color="grey.500" textAlign="left">
                {formatted_date}
              </Heading>
              <Heading
                fontSize={["2xl", "3xl", "6xl"]}
                textTransform="uppercase"
                textAlign={"center"}
              >
                {post.attributes.title}
              </Heading>
              <Box fontSize={["sm", "md"]} color="grey.300" fontFamily="Roboto">
                <div
                  className="ck-content article"
                  dangerouslySetInnerHTML={createMarkup(
                    post.attributes.content
                  )}
                />
              </Box>
            </VStack>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params;
  const response = await getPostBySlug(slug);
  const post = response.data[0];

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
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const getAllDataFromStrapi = await getAllPosts();
  const posts = getAllDataFromStrapi.data;

  return {
    fallback: false,
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
  };
}
