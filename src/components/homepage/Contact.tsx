import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

import { useLocale } from "../../hooks/useLocale";

export default function ContactSection() {
  const locale = useLocale();

  return (
    <section id="intro">
      <Stack
        flexDir={["column", "column", "row"]}
        paddingX={"1rem"}
        paddingY={10}
        justifyContent={"space-around"}
        margin="0 auto"
        maxWidth={1120}
        align={"center"}
      >
        {locale === "pt-BR" ? (
          <>
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
                <Link href="https://wa.me/5598992197744" target="_blank">
                  +55 98 992 19 7744
                </Link>
              </Flex>

              <Flex flexDir={"row"}>
                <Image
                  src="/images/icon_mail.svg"
                  alt="E-mail"
                  marginRight={2}
                  width={5}
                />
                <Link href="mailto:eu@giordano.dev.br">eu@giordano.dev.br</Link>
              </Flex>
            </Box>
          </>
        ) : (
          <>
            <Box marginBottom={"1.5rem"}>
              <Heading fontSize={"100px"} display={["none", "none", "inline"]}>
                CON
                <br />
                TA
                <br />
                CT
              </Heading>
              <Heading
                fontSize={"2.25rem"}
                display={["inline", "inline", "none"]}
              >
                Contact
              </Heading>
            </Box>

            <Box>
              <Text>
                Let&apos;s talk! <br />
                Get in touch through any of the links below.
              </Text>

              <Flex flexDir={"row"} paddingY={5}>
                <Image
                  src="/images/logo_whatsapp.svg"
                  alt="WhatsApp"
                  marginRight={2}
                  width={5}
                />
                <Link href="https://wa.me/5598992197744" target="_blank">
                  +55 98 992 19 7744
                </Link>
              </Flex>

              <Flex flexDir={"row"}>
                <Image
                  src="/images/icon_mail.svg"
                  alt="E-mail"
                  marginRight={2}
                  width={5}
                />
                <Link href="mailto:eu@giordano.dev.br">eu@giordano.dev.br</Link>
              </Flex>
            </Box>
          </>
        )}
      </Stack>
    </section>
  );
}
