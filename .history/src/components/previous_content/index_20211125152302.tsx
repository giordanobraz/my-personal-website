import { Button } from "@chakra-ui/button";
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
          bg={"black.400"}
          boxShadow={"2xl"}
          p={6}
          overflow={"hidden"}
          key={post.slug}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              src={`${post.image?.url}`}
              alt={`${post.title}`}
              layout={"fill"}
              loading={"lazy"}
              objectFit={"cover"}
            />
          </Box>
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
            <Link href={`/posts/${post.slug}`} _hover={{ textDecor: "none" }}>
              <Button
                fontWeight={"normal"}
                mt={6}
                w={"full"}
                bg={"blue.700"}
                color={"white"}
                rounded={"xl"}
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Ler Artigo
              </Button>
            </Link>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
}
