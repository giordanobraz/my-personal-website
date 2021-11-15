import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import imgWelcome from "../../../public/images/welcome.jpg";

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
  console.log(previous_posts);
  return (
    <SimpleGrid columns={[1, 3]} style={{ gap: "15px" }}>
      {previous_posts.map((post) => (
        <Flex
          flexDir="column"
          padding="10px"
          style={{ gap: "20px" }}
          bgColor="#262626"
          key={post.slug}
        >
          <Image
            src={`http://localhost:1337${post.image.url}`}
            alt={post.title}
          />
          <Box marginY={3}>
            <Text fontSize="12px" color="grey.500">
              {new Date(post.published_at).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Text>
            <Text fontSize="18px">{post.title}</Text>
          </Box>
          <Button bg="blue.700" _hover={{ bg: "blue.500" }}>
            Ler Artigo
          </Button>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
