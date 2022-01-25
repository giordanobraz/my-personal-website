import { Flex } from "@chakra-ui/react";

export default function Layout({ children }: any) {
  return (
    <Flex
      flexDir={"column"}
      minHeight={"100%"}
      minWidth={"100%"}
      padding={["2rem", null, null, "0"]}
    >
      {children}
    </Flex>
  );
}
