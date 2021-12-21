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
      <Stack flexDir={["column", "column", "row"]} spacing={[2,4,8]}>
        <Box>
          <Image
            src={`${image?.url}`}
            alt={title}
            loading="eager"
            objectFit="cover"
            title={title}
            maxHeight={300}
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
