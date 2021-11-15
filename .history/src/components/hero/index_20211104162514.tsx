import { Flex, Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import imgWelcome from "../../../public/images/welcome.jpg";

export default function HeroSection() {
  return (
    <Flex w="100%">
      <Image />
      <Box>
        <Text fontSize={12} color="grey.500">
          04 de Novembro de 2021
        </Text>
        <Text fontSize={22}>Seja muito bem-vindo! Aceita algo para beber?</Text>
        <Text fontSize={16} color="grey.500">
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
