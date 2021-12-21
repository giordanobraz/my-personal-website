import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/layout";
import { IconButton, Image, Stack, useDisclosure } from "@chakra-ui/react";

export interface NavItem {
  label: string;
  href: string;
}

export default function Header() {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <Box>
      <Flex bg={"grey.700"} color={"grey.100"} minHeight={"70px"}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onOpen}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src="/images/logo.svg" alt="Giordano" maxHeight={"30px"} />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack></Stack>
      </Flex>
    </Box>
  );
}
