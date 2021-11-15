import { Flex, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      maxWidth="1366px"
      height="5rem"
      margin="0 auto"
      justifyContent="space-between"
      alignItems="center"
      paddingX="32px"
    >
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
    // <footer className={styles.containter}>
    //     <div className={styles.content}>
    //         <p> Desenvolvido por Giordano sob a
    //             licença <Link href="http://escolhaumalicenca.com.br/licencas/mit/">MIT</Link>. {new Date().getFullYear()}.
    //         </p>
    //     </div>
    // </footer>
  );
}
