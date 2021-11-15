import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import content from '../../portfolio_data.json';


interface PortfolioItem {
  image: string;
  title: string;
  info: string;
  link: string;
}

export default function PortfolioItems() {
  return (
    <>
      <Flex>
        {content.map((item: PortfolioItem) => (
          <Box>
            <Image src={item.image} alt={item.title} objectFit={"cover"}/>
          </Box>
        ))}
      </Flex>
    </>
  );
}