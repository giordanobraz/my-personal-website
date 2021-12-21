import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/layout";
import {
  IconButton,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  Stack,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";

export interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "LinkedIn",
    href: "/",
  },
  {
    label: "Github",
    href: "/",
  },
];

export default function Header() {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <Box>
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
            onClick={onOpen}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex 
        flex={{ base: 1 }} 
        justify={{ base: "end", md: "space-between" }}        
        >
          <Box>
            <Image src="/images/logo.svg" alt="Giordano" maxHeight={"30px"} />
          </Box>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.100", "gray.100");
  const linkHoverColor = useColorModeValue("gray.200", "gray.200");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
