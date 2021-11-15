import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { getPostBySlug } from "../../services/strapi";

interface Category {
  name: string;
  slug: string;
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
    author: string;
    category: Category[];
    published_at: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Flex>
        <Box>
          <Text>{post.published_at}</Text>
          <Text>{post.author}</Text>
          <Text>{post.title}</Text>
          <Text>{post.content}</Text>
        </Box>
      </Flex>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const { slug } = params;
  const response = await getPostBySlug(slug);
  const post: PostProps = response.data;
  return {
    props: {
      post,
    },
  };
}
