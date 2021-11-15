import { Flex, Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

export default function HeroSection() {
  return (
    <Flex w="100%">
      <Image />
      <Box>
        <Text fontSize={12}>04 de Novembro de 2021</Text>
        <Text fontSize={22}>Seja muito bem-vindo! Aceita algo para beber?</Text>
        <Text fontSize={16}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a
          eleifend dui, ut semper risus. Mauris laoreet semper lectus elementum
          commodo. Proin facilisis magna in nunc fringilla, quis malesuada dui
          faucibus. Curabitur metus ante, maximus malesuada rutrum ac, mollis a
          orci.
        </Text>
      </Box>
    </Flex>
  );
}
