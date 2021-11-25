import { Image } from "@chakra-ui/image";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

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
    <Flex
      flexDir={["column", "column", "column", "row"]}
      w="100%"
      style={{ gap: "16px" }}
      bgColor="#262626"
      padding="10px"
      marginBottom={["15px", "15px", "15px", "68px"]}
      rounded={"md"}
    >
      <Image
        src={`${image?.url}`}
        alt={title}
        maxH={240}
        loading="eager"
        objectFit="cover"
        title={title}
      />
      <Box display="flex" flexDir="column" marginX={1} style={{ gap: "40px" }}>
        <Link href={`/posts/${slug}`} _hover={{ textDecor: "none" }}>
          <Text fontSize={14} color="grey.500">
            {published_at}
          </Text>
          <Text fontSize={26}>{title}</Text>
          <Text fontSize={18} color="grey.500" textAlign="justify">
            {description}
          </Text>
        </Link>
      </Box>
    </Flex>
  );
}
