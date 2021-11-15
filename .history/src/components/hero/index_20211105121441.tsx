import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import imgWelcome from "../../../public/images/welcome.jpg";

interface Category {
  name: string;
  slug: string;
}

interface HeroPost {
  title: string;
  description: string;
  content: string;
  slug: string;
  image: {
    url: string;
  };
  author: string;
  published_at: string;
  category: Category[];
}

export default function HeroSection({
  title,
  description,
  content,
  slug,
  image,
  author,
  category,
  published_at,
}: HeroPost) {
  return (
    <Flex
      flexDir={["column", "row"]}
      w="100%"
      style={{ gap: "16px" }}
      bgColor="#262626"
      padding="10px"
      marginBottom={["15px", "68px"]}
    >
      <Link>
        <Image
          src={`http://localhost:1337${image.url}`}
          alt={title}
          maxH={230}
          loading="lazy"
        />
        <Box
          display="flex"
          flexDir="column"
          marginX={1}
          style={{ gap: "22px" }}
        >
          <Text fontSize={14} color="grey.500">
            {published_at}
          </Text>
          <Text fontSize={26}>{title}</Text>
          <Text fontSize={18} color="grey.500" textAlign="justify">
            {description}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
}
