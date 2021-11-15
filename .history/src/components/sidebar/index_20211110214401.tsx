import { Flex, Box, Text, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import bgImage from "../../../public/images/presentation-bg.png";

export default function Sidebar() {
  return (
    <Flex w={["auto", "300px"]} justifyContent="center">
      <Box
        bgImage={`url(${bgImage.src})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        width={["100%", 260]}
        height={[130, 260]}
        display="flex"
        flexDir={["row", "column"]}
        alignItems="center"
        justifyContent="center"
        style={{ gap: "10px"}}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/14043484?v=4?s=400"
          alt="Giordano Bruno"
          maxW={["65px", 120]}
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
