import { Flex, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex as="footer">
      <Text>
        Desenvolvido por Giordano sob a licença{" "}
        <Link
          color="blue.500"
          href="http://escolhaumalicenca.com.br/licencas/mit/"
        >
          {" "}
          MIT
        </Link>
        . {new Date().getFullYear()}.
      </Text>
    </Flex>
  );
}
