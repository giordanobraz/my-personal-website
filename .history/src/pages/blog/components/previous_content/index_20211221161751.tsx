import { Image } from "@chakra-ui/image";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

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
    <SimpleGrid columns={[1, 1, 2, 3]} style={{ gap: "15px" }}>
      {previous_posts.map((post) => (
        <Box
          w={"full"}
          boxShadow={"2xl"}
          p={6}
          overflow={"hidden"}
          key={post.slug}
        >
          <Image
            src={`${post.image?.url}`}
            alt={`${post.title}`}
            loading={"lazy"}
            maxHeight={300}
          />
          
          <Stack cursor="default" spacing={5}>
            <Text color={"green.400"} fontSize={"14px"} letterSpacing={1.1}>
              {post.published_at}
            </Text>
            <Heading
              fontSize={"26px"}
              fontWeight={"normal"}
              maxW="25ch"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              title={post.title}
            >
              {post.title}
            </Heading>
            <Link
              href={`/blog/post/${post.slug}`}
              _hover={{ textDecor: "none" }}
            ></Link>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
}
