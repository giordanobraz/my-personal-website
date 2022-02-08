import { Flex, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      maxWidth="1120px"
      height="5rem"
      margin="0 auto"
      justifyContent="center"
      alignItems="center"
      padding="32px"
      textAlign={"center"}
    >
      <Text>
        Desenvolvido por Giordano sob a licença{" "}
        <Link
          color="blue.500"
          href="http://escolhaumalicenca.com.br/licencas/mit/"
          target="_blank"
        >
          {" "}
          MIT
        </Link>
        . {new Date().getFullYear()}.
      </Text>
    </Flex>
  );
}
