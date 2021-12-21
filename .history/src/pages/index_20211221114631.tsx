import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex 
    paddingY={"4.18rem"}
    paddingX={"10rem"}
    >
      <Box>
        <Image src="/images/avatar_gio.png" alt="Avatar do Giordano" />
      </Box>
      <Box>
        <Flex flexDir={"column"}>
          <Heading>
            Oi, eu sou o <br /> Giordano!
          </Heading>
          <Text>
            Desenvolvedor Fullstack no Brasil.
            <Image src="/images/brazil_flag.svg" alt="Brasil Flag" />
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
