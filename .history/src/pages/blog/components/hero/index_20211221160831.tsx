import { Image } from "@chakra-ui/image";
import { Heading, Link, Stack, Text } from "@chakra-ui/react";

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
      justifyContent={"space-between"}
      spacing={4}
      >
        <Image
          src={`${image?.url}`}
          alt={title}
          loading="eager"
          objectFit="cover"
          title={title}
          maxHeight={300}
        />

        <Stack
        maxWidth={"500px"}
        >
          <Text color={"grey.300"}>{published_at}</Text>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </Stack>
    </Link>
  );
}
