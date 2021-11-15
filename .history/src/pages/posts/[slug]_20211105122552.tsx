import { Flex } from "@chakra-ui/layout";
import { GetServerSideProps } from "next";
import { Head } from "next/document";
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
      <Head>
        <title>{post.title} | Giordano Bruno</title>
      </Head>

      <Flex></Flex>
    </>
  );
}
