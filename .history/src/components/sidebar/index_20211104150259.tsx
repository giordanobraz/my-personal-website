import { Flex, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
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
        display="flex"
        flexDir="column"
        alignItems="center"
        gap={20}
        justifyContent="center"
      >
        <Image
          src="https://avatars.githubusercontent.com/u/14043484?v=4?s=400"
          alt="Giordano Bruno"
          maxW={120}
          borderRadius={100}
        />
        <Text>Giordano Bruno</Text>
        <Text>Fullstack Javascript Developer</Text>
      </Box>
    </Flex>
  );
}
