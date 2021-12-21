import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export default function ContactSection() {
  return (
    <section id="intro">
      <Stack
        flexDir={["column", "column", "row"]}
        paddingY={"4.18rem"}
        paddingX={"1rem"}
        justifyContent={"center}        
        margin="0 auto"
        maxWidth={1120}
      >
        <Box>
          <Box marginBottom={"1.5rem"}>
            <Heading fontSize={"100px"} display={["none", "none", "inline"]}>
              CON
              <br />
              TA
              <br />
              TO
            </Heading>
            <Heading
              fontSize={"2.25rem"}
              display={["inline", "inline", "none"]}
            >
              Contato
            </Heading>
          </Box>
        </Box>
        <Box>
          <Text>
            Vamos conversar! <br />
            Entre em contato comigo pelos canais abaixo.
          </Text>
        </Box>
      </Stack>
    </section>
  );
}
