import { Flex, Text } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import { getAllPosts } from "../../services/strapi";

export default function Post() {
  return (
    <Flex>
      <Text>Hey</Text>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
};
