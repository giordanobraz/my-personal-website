import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
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
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Flex
        maxWidth="1366px"
        margin="0 auto"
        paddingX="2em"
        style={{ gap: "20px" }}
      >
        <Box>
          <Text>{post.published_at}</Text>
          <Text>{post.title}</Text>
          <Text
            dangerouslySetInnerHTML={{ __html: post.formatted_content }}
          ></Text>
        </Box>
      </Flex>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const { slug } = params;
  const response = await getPostBySlug(slug);
  const post = response.data;
  const formatted_content = await markdownToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        formatted_content,
      },
    },
  };
}
