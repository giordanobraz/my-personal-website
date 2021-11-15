import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import imgWelcome from "../../../public/images/welcome.jpg";

export default function PreviousContent() {
  return (
    <SimpleGrid columns={3}>
      <Flex flexDir="column" padding="10px" style={{ gap: "20px" }}>
        <Image src={imgWelcome.src} alt="More Posts" />
        <Box marginY={5}>
          <Text fontSize="12px" color="grey.500">
            03 de Novembro de 2021
          </Text>
          <Text fontSize="18px">Programar não é um bicho de sete cabeças</Text>
        </Box>
        <Button bg="blue.700" _hover={{ bg: "blue.500" }}>
          Ler Artigo
        </Button>
      </Flex>
    </SimpleGrid>
  );
}
