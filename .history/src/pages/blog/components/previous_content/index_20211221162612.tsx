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
    <>
      <SimpleGrid columns={[1,2, 3]} spacing={10}>
        {previous_posts.map((post) => (
          <Link href={`/blog/post/${post.slug}`} _hover={{ textDecor: "none" }}>
            <Box key={post.slug}>
              <Image
                src={`${post.image?.url}`}
                alt={`${post.title}`}
                loading="eager"
                objectFit="cover"
                maxHeight={300}
              />

              <Stack cursor="default">
                <Text>{post.published_at}</Text>
                <Heading>{post.title}</Heading>
              </Stack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
}
