import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Stack
      flexDir={{ sm:"column", md: "row" }}
      paddingY={"4.18rem"}      
      spacing={3}
      align={"center"}
      justifyContent={"center"}
    >
      <Box>
        <Image src="/images/avatar_gio.png" alt="Avatar do Giordano" />
      </Box>
      <Box>
        <Stack flexDir={"column"} spacing={5}>
          <Heading fontSize={72} lineHeight="72px">
            Oi, eu sou o <br /> Giordano!
          </Heading>
          <Text fontSize={20}>
            Desenvolvedor Fullstack no Brasil
            <Image src="/images/brazil_flag.svg" alt="Brasil Flag" />
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}