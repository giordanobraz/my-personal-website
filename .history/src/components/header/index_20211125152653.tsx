import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import {
  Drawer,
  DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader,
  DrawerOverlay, IconButton, Link, useDisclosure
} from "@chakra-ui/react";
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
        maxWidth="1120px"
        height="5rem"
        margin="0 auto"
        justifyContent="space-between"
        alignItems="center"
        paddingX="32px"
      >
        <Box>
          <Text fontSize={36}>{logo}</Text>
        </Box>
        <Box
          display="flex"
          style={{ gap: "50px" }}
          fontSize="20px"
          textTransform="uppercase"
        >
          <Link href="/" _hover={{ textDecor: "none", color: "blue.500" }}>
            Home
          </Link>
          <Link
            href="/portfolio"
            _hover={{ textDecor: "none", color: "blue.500" }}
          >
            Projetos
          </Link>
          <Link
            href="https://www.linkedin.com/in/giordano-bruno-silva/"
            target="_blank"
            _hover={{ textDecor: "none", color: "blue.500" }}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/giordanobraz"
            target="_blank"
            _hover={{ textDecor: "none", color: "blue.500" }}
          >
            Github
          </Link>
        </Box>
      </Flex>
    );
  }

  return (
    <>
      <Flex
        flexFlow="row no-wrap"
        justifyContent="space-between"
        alignItems="center"
        padding="30px"
      >
        <Text fontSize="26px">{logo}</Text>
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
                LinkedIn
              </Link>
              <Link href="https://github.com/giordanobraz">Github</Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}