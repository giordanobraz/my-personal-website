import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Link from "next/link";
const logo = "<G />";

export default function Header() {
  const { isOpen, onClose } = useDisclosure();
  const isDrawerMenu = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!isDrawerMenu) {
    return (
      <Flex
        maxWidth="1366px"
        height="5rem"
        margin="0 auto"
        justifyContent="space-between"
        alignItems="center"
        paddingX="32px"
      >
        <Box>
          <Text fontSize={36}>{logo}</Text>
        </Box>
        <Box display="flex" style={{ gap: "50px" }} fontSize="20px">
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
}
