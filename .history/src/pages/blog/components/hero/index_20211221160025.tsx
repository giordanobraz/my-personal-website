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
        paddingY={"3rem"}
        justifyContent={"space-around"}
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

        <Stack>
          <Text>{published_at}</Text>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </Stack>
    </Link>
  );
}
