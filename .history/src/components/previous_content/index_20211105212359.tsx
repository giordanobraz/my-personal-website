import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Link, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { strapi_api } from "./../../services/strapi";

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
        <Box
          maxW={"445px"}
          w={"full"}
          bg={"gray.900"}
          boxShadow={"2xl"}
          rounded={"md"}
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
              src={`${process.env.NEXT_PUBLIC_STRAPI_API}${post.image.url}`}
              layout={"fill"}
            />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {post.published_at}
            </Text>
            <Heading              
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {post.title}
            </Heading>
          </Stack>
        </Box>

        // <Box key={post.slug} cursor="pointer">
        //   <Box height={"210px"} position={"relative"}>
        //     <Image
        //       src={`${process.env.NEXT_PUBLIC_STRAPI_API}${post.image.url}`}
        //       alt={post.title}
        //       layout={"fill"}
        //       loading="eager"
        //     />
        //   </Box>
        //   <Stack my={3} px={2}>
        //     <Text fontSize="12px" color="grey.500">
        //       {post.published_at}
        //     </Text>
        //     <Text
        //       fontSize="18px"
        //       maxW="25ch"
        //       overflow="hidden"
        //       textOverflow="ellipsis"
        //       whiteSpace="nowrap"
        //       title={post.title}
        //     >
        //       {post.title}
        //     </Text>
        //     <Link href={`/posts/${post.slug}`} _hover={{ textDecor: "none" }}>
        //       <Button bg="blue.700" _hover={{ bg: "blue.500" }}>
        //         Ler Artigo
        //       </Button>
        //     </Link>
        //   </Stack>
        // </Box>
      ))}
    </SimpleGrid>
  );
}
