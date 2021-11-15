import { Button } from "@chakra-ui/button";
import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import Image from "next/image";

interface Category {
  name: string;
  slug: string;
}

interface Post {
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

interface PostProps {
  previous_posts: Post[];
}

export default function PreviousContent({ previous_posts }: PostProps) {
  return (
    <SimpleGrid
      columns={[1, 3]}
      style={{ gap: "15px" }}
      bgColor="#262626"
      p={2}
    >
      {previous_posts.map((post) => (
        <Box key={post.slug} cursor="pointer">
          <Box height={"210px"} position={"relative"}>
            <Image
              src={`http://localhost:1337${post.image.url}`}
              alt={post.title}
              layout={"fill"}
              loading="lazy"
            />
          </Box>
          <Stack my={3} px={2}>
            <Text fontSize="12px" color="grey.500">
              {post.published_at}
            </Text>
            <Text
              fontSize="18px"
              maxW="25ch"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              title={post.title}
            >
              {post.title}
            </Text>
            <Button bg="blue.700" _hover={{ bg: "blue.500" }}>
              <Link href={`/posts/${post.slug}`}>Ler Artigo</Link>
            </Button>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
}
