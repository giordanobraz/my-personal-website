import { Image } from "@chakra-ui/image";
import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";

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
      <Stack
        flexDir={["column", "column", "row"]}
        paddingY={"4.18rem"}
        justifyContent={"space-around"}
        align={"center"}
        margin="0 auto"
        maxWidth={1120}
      >
        <Box>
          <Image
            src={`${image?.url}`}
            alt={title}
            maxH={340}
            loading="eager"
            objectFit="cover"
            title={title}
          />
        </Box>
        <Box>
          <Stack spacing={"30px"}>
            <Text fontSize={16} color="grey.300">
              {published_at}
            </Text>
            <Heading fontSize={42} color="grey.100">
              {title}
            </Heading>
            <Text fontSize={20} color="grey.200" textAlign="justify">
              {description}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Link>
  );
}
