import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

export default function ContactSection() {
  return (
    <section id="intro">
      <Stack
        flexDir={["column", "column", "row"]}
        paddingX={"1rem"}
        paddingBottom={5}
        justifyContent={"space-around"}
        margin="0 auto"
        maxWidth={1120}
        align={"center"}
      >
        <Box marginBottom={"1.5rem"}>
          <Heading fontSize={"100px"} display={["none", "none", "inline"]}>
            CON
            <br />
            TA
            <br />
            TO
          </Heading>
          <Heading fontSize={"2.25rem"} display={["inline", "inline", "none"]}>
            Contato
          </Heading>
        </Box>

        <Box>
          <Text>
            Vamos conversar! <br />
            Entre em contato comigo pelos canais abaixo.
          </Text>

          <Flex flexDir={"row"} paddingY={5}>
            <Image
              src="/images/logo_whatsapp.svg"
              alt="Whatsapp"
              marginRight={2}
              width={5}
            />
            <Link href="https://wa.me/5594992897744" target="_blank">
              +5594992897744
            </Link>
          </Flex>

          <Flex flexDir={"row"}>
            <Image
              src="/images/icon_mail.svg"
              alt="E-mail"
              marginRight={2}
              width={5}
            />
            <Link href="mailto:giordanosi2011@gmail.com">
              giordanosi2011@gmail.com
            </Link>
          </Flex>
        </Box>
      </Stack>
    </section>
  );
}
