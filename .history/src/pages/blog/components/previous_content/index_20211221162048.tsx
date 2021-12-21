import { Image } from "@chakra-ui/image";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
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
    <Stack
      flexDir={["column", "column", "row"]}
      justifyContent={"space-between"}
      style={{ gap: "20px" }}
    >
      {previous_posts.map((post) => (
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
            <Link
              href={`/blog/post/${post.slug}`}
              _hover={{ textDecor: "none" }}
            ></Link>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
