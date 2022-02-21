import { Flex, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { useLocale } from "../../../hooks/useLocale";

export default function Footer() {
  const locale = useLocale();
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
      {locale === "pt:BR" ? (
        <>
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
        </>
      ) : (
        <>
          <Text>
            Developed by Giordano under
            <Link
              color="blue.500"
              href="http://escolhaumalicenca.com.br/licencas/mit/"
              target="_blank"
            >
              {" "}
              MIT{" "}
            </Link>
            license. {new Date().getFullYear()}.
          </Text>
        </>
      )}
    </Flex>
  );
}
