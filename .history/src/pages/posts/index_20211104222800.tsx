import { Flex, Text } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
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
  image: string;
  author: string;
  category: Category;
}

export default function Post({ posts }) {
  return (
    <Flex>
      <Text>Hey</Text>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await getAllPosts();
  const posts = response.data;
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};
