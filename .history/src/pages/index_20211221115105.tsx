import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex paddingY={"4.18rem"} justifyContent={"center"}>
      <Box>
        <Image src="/images/avatar_gio.png" alt="Avatar do Giordano" />
      </Box>
      <Box>
        <Stack flexDir={"column"} spacing={5}>
          <Heading
          fontSize={72}
          lineHeight="72px"         
          >
            Oi, eu sou o <br /> Giordano!
          </Heading>
          <Text>
            Desenvolvedor Fullstack no Brasil.
            <Image src="/images/brazil_flag.svg" alt="Brasil Flag" />
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
}
