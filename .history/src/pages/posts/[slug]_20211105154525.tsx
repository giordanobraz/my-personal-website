import { Img } from "@chakra-ui/react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import markdownToHtml from "../../libs/markdown";
import { getPostBySlug } from "../../services/strapi";

interface Category {
  name: string;
  slug: string;
}

interface Author {
  name: string;
  email: string;
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
  return (
    <>
      <Flex
        flexDir="column"
        maxWidth="1120px"
        margin="0 auto"
        paddingX="2em"
        style={{ gap: "20px" }}
      >
        <Stack spacing={25}>
          <Img
            src={`http://localhost:1337${post.image.url}`}
            alt={post.title}
            maxH={500}
            loading="lazy"
            objectFit="cover"
          />
          <Stack spacing={5}>
            <Heading fontSize={16} color="grey.500" textAlign="left">
              {post.formatted_date}
            </Heading>
            <Heading fontSize={42}>{post.title}</Heading>
          </Stack>
          <Box fontFamily="Roboto" fontSize={20} color="grey.300">
            <div
              className="article"
              dangerouslySetInnerHTML={{ __html: post.formatted_content }}
            ></div>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const { slug } = params;
  const response = await getPostBySlug(slug);
  const post = response.data;
  const formatted_content = await markdownToHtml(post.content);
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
        formatted_content,
        formatted_date,
      },
    },
  };
}
