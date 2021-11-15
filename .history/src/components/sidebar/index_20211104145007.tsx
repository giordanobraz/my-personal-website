import { Flex, Box } from "@chakra-ui/layout";
import imgBg from "../../../public/images/presentation-bg.png";

export default function Sidebar() {
  return (
    <Flex w="400px">
      <Box bgImage={`${imgBg}`}></Box>
    </Flex>
  );
}
