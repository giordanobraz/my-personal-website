import { Flex, Box, Text } from "@chakra-ui/layout";
import bgImage from "../../../public/images/presentation-bg.png";

export default function Sidebar() {
  console.log(bgImage);
  return (
    <Flex w="400px">
      <Box
        bgImage={`url(${bgImage.src})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        width={260}
        height={260}
      >
        <Text>Hello Everyone!</Text>
      </Box>
    </Flex>
  );
}
