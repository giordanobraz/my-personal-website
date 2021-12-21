import { Box, Flex } from "@chakra-ui/layout";
import {
  Stack,
  useDisclosure
} from "@chakra-ui/react";

export interface NavItem {
  label: string;
  href: string;
}

export default function Header() {
  const { isOpen, onOpen } = useDisclosure();
  
  return (
    <Box>
      <Flex
      bg={"grey.700"}
      color={"grey.100"}
      >
        <Flex></Flex>
        <Flex></Flex>
        <Stack></Stack>
      </Flex>
    </Box>
    )
  
}
