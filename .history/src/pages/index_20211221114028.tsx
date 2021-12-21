import { Box, Flex, Image } from "@chakra-ui/react";


export default function HomePage() {
  return (
    <Flex py={{ base: 2 }} px={{ base: 4 }}>
      <Box>
        <Image src="/images/avatar_gio.png" alt="Avatar do Giordano" />
      </Box>
    </Flex>
  );
}
