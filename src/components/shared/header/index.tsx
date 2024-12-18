import { Box, Flex } from "@chakra-ui/layout";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Collapse,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

export interface NavItem {
  label: string;
  href: string;
  target?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giordano-bruno-silva/",
    target: "_blank",
  },
  {
    label: "Github",
    href: "https://github.com/giordanobraz",
    target: "_blank",
  },
];

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      boxShadow={"0 2px 10px #000000"}
      position={"fixed"}
      w={"100%"}
      zIndex={1000}
    >
      <Flex
        bg={"grey.700"}
        color={"grey.100"}
        minHeight={"70px"}
        align={"center"}
        py={{ base: 2 }}
        px={{ base: 4 }}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "end", md: "space-between" }}>
          <Box>
            <Link href="/">
              <Image src="/images/logo.svg" alt="Giordano" maxHeight={"30px"} />
            </Link>
          </Box>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.100", "gray.100");
  const linkHoverColor = useColorModeValue("purple.500", "purple.500");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            target={navItem.target}
            fontSize={"18px"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"grey.700"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"grey.100"}>
          {label}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        ></Stack>
      </Collapse>
    </Stack>
  );
};
