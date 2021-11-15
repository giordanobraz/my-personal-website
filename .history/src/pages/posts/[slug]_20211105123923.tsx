import { Flex } from "@chakra-ui/layout";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Head } from "next/document";
import { getAllPosts } from "../../services/strapi";

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
      <Flex></Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(params);
  // const post = await getPostBySlug(slug);

  return {
    props: {
      params,
    },
  };
};
