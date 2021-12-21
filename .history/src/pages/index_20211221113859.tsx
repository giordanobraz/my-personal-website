import { Box, Flex, Image } from "@chakra-ui/react";
import avatar from "../../public/images/avatar_gio.png";

export default function HomePage() {
  return (
    <Flex py={{ base: 2 }} px={{ base: 4 }}>
      <Box>
        <Image src={avatar} alt="Avatar do Giordano" />
      </Box>
    </Flex>
  );
}
