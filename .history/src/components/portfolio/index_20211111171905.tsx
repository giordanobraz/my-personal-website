import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";

interface PortfolioItem {
  image: string;
  title: string;
  info: string;
  link: string;
}

interface PageProps {
  items: PortfolioItem[];
}

export default function PortfolioItems({ items }: PageProps) {
  return (
    <>
      <Flex>
        {items.map((item: PortfolioItem) => (
          <Box>
            <Image src={item.image} alt={item.title} />
          </Box>
        ))}
      </Flex>
    </>
  );
}