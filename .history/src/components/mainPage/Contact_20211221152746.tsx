import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

export default function ContactSection() {
  return (
    <section id="intro">
      <Stack
        flexDir={["column", "column", "row"]}
        paddingY={"4.18rem"}
        paddingX={"1rem"}
        justifyContent={"space-around"}
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

          <Flex flexDir={"row"} paddingY={2}>
            <Image src="/images/logo_whatsapp.svg" alt="Whatsapp" marginRight={2} width={5} />
            <Link href="https://wa.me/5594992897744" target="_blank">
              +5594992897744
            </Link>
          </Flex>

          <Flex flexDir={"row"} paddingY={2}>
            <Image src="/images/icon_mail.svg" alt="E-mail" marginRight={2} width={5} />
            <Text>giordanosi2011@gmail.com</Text>
          </Flex>
        </Box>
      </Stack>
    </section>
  );
}
