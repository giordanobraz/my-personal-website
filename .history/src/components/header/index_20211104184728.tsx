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
import { Button } from "@chakra-ui/button";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Link } from "@chakra-ui/react";
const logo = "<G />";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Link
            href="https://www.linkedin.com/in/giordano-bruno-silva/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link href="https://github.com/giordanobraz" target="_blank">
            Github
          </Link>
        </Box>
      </Flex>
    );
  }

  return (
    <>
      <Flex>
        <IconButton
          onClick={onOpen}
          aria-label={"Toggle Navigation"}
          variant={"ghost"}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#262626">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column" fontSize={26} style={{ gap: "15px" }}>
              <Link href="/">Home</Link>
              <Link href="/portfolio">Projetos</Link>
              <Link href="https://www.linkedin.com/in/giordano-bruno-silva/">
                <a target="_blank">LinkedIn</a>
              </Link>
              <Link href="https://github.com/giordanobraz">
                <a target="_blank">Github</a>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
