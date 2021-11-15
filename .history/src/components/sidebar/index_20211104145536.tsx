import { Flex, Box, Text } from "@chakra-ui/layout";
import bgImage from "../../../public/images/presentation-bg.png";

export default function Sidebar() {
  console.log(bgImage)
  return (
    <Flex w="400px">
      <Box bgImage={`url(${bgImage.src})`}>
        <Text>Hello Everyone!</Text>
      </Box>
    </Flex>
  );
}
