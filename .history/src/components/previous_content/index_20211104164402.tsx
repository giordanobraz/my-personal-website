import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";

export default function PreviousContent() {
  return (
    <SimpleGrid columns={3}>
      <Flex>
        <Image />
        <Box>
          <Text>03 de Novembro de 2021</Text>
          <Text>Programar não é um bicho de sete cabeças</Text>
        </Box>
        <Button>Ler Artigo</Button>
      </Flex>
    </SimpleGrid>
  );
}
