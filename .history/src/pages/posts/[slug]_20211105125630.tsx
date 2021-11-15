import { Flex, Text } from "@chakra-ui/layout";
import { getPostBySlug } from "../../services/strapi";

interface Category {
  name: string;
  slug: string;
}

interface PostProps {
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

export default function Post(post: PostProps) {
  return (
    <>
      <Flex>
        <Text>Hello</Text>
        <Text>{post.title}</Text>
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
