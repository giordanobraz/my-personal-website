import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";

interface Category {
  name: string;
  slug: string;
}

interface Post {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    author: string;
    category: Category[];
    publishedAt: string;
  };
}

interface PostProps {
  previous_posts: Post[];
}

export default function PreviousContent({ previous_posts }: PostProps) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
      {previous_posts.map((post: Post) => (
        <Box key={post.attributes.slug} w="100%">
          <Box overflow="hidden">
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              href={`/blog/post/${post.attributes.slug}`}
            >
              <Image
                transform="scale(1.0)"
                src={`${post.attributes.image.data.attributes.url}`}
                alt={`${post.attributes.title}`}
                objectFit="contain"
                width="100%"
                height={200}
                transition="0.3s ease-in-out"
                borderRadius="lg"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Link>
          </Box>
          <Heading fontSize="xl" marginTop="2">
            <Text fontSize={14} color={"grey.300"}>
              {post.attributes.publishedAt}
            </Text>
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              fontSize={26}
              href={`/blog/post/${post.attributes.slug}`}
            >
              {post.attributes.title}
            </Link>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            {post.attributes.description}
          </Text>
        </Box>
        // <Link
        //   key={post.attributes.slug}
        //   href={`/blog/post/${post.attributes.slug}`}
        //   _hover={{ textDecor: "none" }}
        // >
        //   <Flex flexDir={"column"} style={{ gap: "15px" }}>
        //     <Image
        //       src={`${post.attributes.image.data.attributes.url}`}
        //       alt={`${post.attributes.title}`}
        //       loading="eager"
        //       objectFit="cover"
        //       maxHeight={300}
        //     />

        //     <Stack cursor="default">
        //       <Text fontSize={14} color={"grey.300"}>
        //         {post.attributes.publishedAt}
        //       </Text>
        //       <Heading fontSize={26}>{post.attributes.title}</Heading>
        //       <Text fontSize={16} color={"grey.200"}>
        //         {post.attributes.description}
        //       </Text>
        //     </Stack>
        //   </Flex>
        // </Link>
      ))}
    </SimpleGrid>
  );
}
