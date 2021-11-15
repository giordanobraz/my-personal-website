import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import imgWelcome from "../../../public/images/welcome.jpg";

export default function PreviousContent() {
  return (
    <SimpleGrid columns={3}>
      <Flex flexDir="column">
        <Image src={imgWelcome.src} alt="More Posts" />
        <Box>
          <Text>03 de Novembro de 2021</Text>
          <Text>Programar não é um bicho de sete cabeças</Text>
        </Box>
        <Button>Ler Artigo</Button>
      </Flex>
    </SimpleGrid>
  );
}
