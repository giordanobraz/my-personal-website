import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex py={{ base: 2 }} px={{ base: 4 }}>
      <Box>
        <Image src="/images/avatar_gio.png" alt="Avatar do Giordano" />
      </Box>
      <Box>
        <Flex>
          <Heading>Oi, eu sou o Giordano!</Heading>
          <Text>Desenvolvedor Fullstack no Brasil.</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
