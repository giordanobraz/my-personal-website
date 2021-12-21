import { Image } from "@chakra-ui/image";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";

interface HeroPost {
  title: string;
  description: string;
  slug: string;
  published_at: string;
  image: {
    url: string;
  };
}

export default function HeroSection({
  title,
  description,
  slug,
  image,
  published_at,
}: HeroPost) {
  return (
    <Link href={`/blog/post/${slug}`} _hover={{ textDecor: "none" }}>
      <Flex>
        <Image
          src={`${image?.url}`}
          alt={title}
          maxH={340}
          loading="eager"
          objectFit="cover"
          title={title}
        />
        <Box
          display="flex"
          flexDir="column"
          marginX={1}
          style={{ gap: "22px" }}
        >
          <Stack spacing={"30px"}>
            <Text fontSize={14} color="grey.300">
              {published_at}
            </Text>
            <Text fontSize={42} color="grey.100">
              {title}
            </Text>
            <Text fontSize={26} color="grey.200" textAlign="justify">
              {description}
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Link>
  );
}
