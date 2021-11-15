import { Flex } from "@chakra-ui/layout";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Head } from "next/document";
import { getAllPosts, getPostBySlug } from "../../services/strapi";

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
  console.log(post);
  return (
    <>
      <Flex></Flex>
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
