import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import bgImage from "../../../public/images/presentation-bg.png";

export default function Sidebar() {
  return (
    <Flex
      w={["auto", "300px"]}
      justifyContent="center"
      display={["none", "none", "none", "flex"]}
      rounded={"md"}
    >
      <Box
        bgImage={`url(${bgImage.src})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos={"center"}
        width={260}
        height={258}
        display="flex"
        flexDir={"column"}
        alignItems="center"
        justifyContent="center"
        style={{ gap: "15px" }}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/14043484?v=4?s=400"
          alt="Giordano Bruno"
          maxW={120}
          borderRadius={100}
          objectFit={"cover"}
        />

        <Box textAlign="center" marginY={5}>
          <Text>Giordano Bruno</Text>
          <Text>Fullstack Javascript Developer</Text>
        </Box>
      </Box>
    </Flex>
  );
}
