import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

export default function HomePage() {
  return (
    <Stack
      flexDir={["column", "column", "row"]}
      paddingY={["1rem", "1rem", "4.18rem"]}
      paddingX={"1rem"}
      justifyContent={"space-between"}
      maxWidth={1120}
      margin="0 auto"
      align={"center"}
    >
      <Box>
        <Image
          src="/images/avatar_gio.png"
          alt="Avatar do Giordano"
          width={"100%"}
        />
      </Box>
      <Box>
        <Stack flexDir={"column"} spacing={5} textAlign={["center", "justify"]}>
          <Heading fontSize={["36px", "72px"]}>
            Oi, eu sou o <br /> Giordano!
          </Heading>
          <Text fontSize={["18px", "24px"]}>
            Desenvolvedor Fullstack no Brasil{" "}
            <ReactCountryFlag
              countryCode="BR"
              svg
              aria-label="Brazil"
              title="Brazil"
              style={{
                width: '1.2em',
                height: '1.2em',
            }}
            />
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
