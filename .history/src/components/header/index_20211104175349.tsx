import { Box, Flex, Text } from "@chakra-ui/layout";
import Link from "next/link";
import style from "./header.module.scss";

const logo = "<G />";

export default function Header() {
  return (
    <Flex
      maxWidth="1366px"
      height="5rem"
      margin="0 auto"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text fontSize={36}>{logo}</Text>
      </Box>
      <Box display="flex" style={{ gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Projetos</Link>
        <Link href="https://www.linkedin.com/in/giordano-bruno-silva/">
          <a target="_blank">LinkedIn</a>
        </Link>
        <Link href="https://github.com/giordanobraz">
          <a target="_blank">Github</a>
        </Link>
      </Box>
    </Flex>
  );
}
