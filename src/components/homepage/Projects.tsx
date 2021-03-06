import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useLocale } from "../../hooks/useLocale";

export default function ProjectSection() {
  const locale = useLocale();

  return (
    <Box
      backgroundImage={"/images/bg_purple.svg"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={["center", "center", "center", "center", "initial"]}
    >
      <section>
        <Stack
          flexDir={["column", "column", "row"]}
          paddingY={["3.5rem", "5rem", "10rem"]}
          paddingX={"1rem"}
          justifyContent={"space-around"}
          margin="0 auto"
          maxWidth={1120}
          align={"center"}
        >
          <Box display={["inline", "inline", "none"]}>
            <Heading fontSize={"2.25rem"}>Projects</Heading>
          </Box>
          {locale === "pt-BR" ? (
            <>
              <Stack flexDir={"column"} spacing={5} maxW={"500px"}>
                <Box paddingX={"10px"} paddingY={"15px"} bgColor={"#5A40A8;"}>
                  <Flex
                    flexDir={["column", "column", "row"]}
                    justifyContent={"space-between"}
                  >
                    <Heading fontSize={"1.2rem"}>Saúde CASS</Heading>
                    <Text>Sistema Web</Text>
                  </Flex>
                  <Flex
                    marginTop={"1rem"}
                    flexDir={["column", "column", "row"]}
                    justifyContent={"space-between"}
                  >
                    <Text maxWidth={["100%", "100%", "60%"]}>
                      Sistema de gerenciamento do cartão fidelidade da Clínica
                      Saúde.
                    </Text>
                  </Flex>
                  <Box marginY={"1.2rem"} color={"grey.100"}>
                    <Link href="https://saudecass.com.br/" target="_blank">
                      Acessar
                    </Link>
                  </Box>
                </Box>

                <Box paddingX={"10px"} paddingY={"15px"} bgColor={"#5A40A8;"}>
                  <Flex
                    flexDir={["column", "column", "row"]}
                    justifyContent={"space-between"}
                  >
                    <Heading fontSize={"1.2rem"}>Portfólio</Heading>
                    <Text>Website</Text>
                  </Flex>
                  <Flex
                    marginTop={"1rem"}
                    flexDir={["column", "column", "row"]}
                    justifyContent={"space-between"}
                  >
                    <Text maxWidth={["100%", "100%", "60%"]}>
                      Meu website portfólio, desenvolvido com Next.js.
                    </Text>
                  </Flex>
                  <Box marginY={"1.2rem"} color={"grey.100"}>
                    <Link
                      href="https://github.com/giordanobraz/my-personal-website"
                      target="_blank"
                    >
                      Acessar
                    </Link>
                  </Box>
                </Box>

                <Link href="https://github.com/giordanobraz" target="_blank">
                  Ver Mais
                </Link>
              </Stack>

              <Box display={["none", "none", "inline"]}>
                <Heading fontSize={"100px"}>
                  PRO
                  <br />
                  JE
                  <br />
                  TOS
                </Heading>
              </Box>
            </>
          ) : (
            <>
              <Stack flexDir={"column"} spacing={5} maxW={"500px"}>
                <Box paddingX={"10px"} paddingY={"15px"} bgColor={"#5A40A8;"}>
                  <Flex
                    flexDir={["column", "column", "row"]}
                    justifyContent={"space-between"}
                  >
                    <Heading fontSize={"1.2rem"}>Saúde CASS</Heading>
                    <Text>Web System</Text>
                  </Flex>
                  <Flex
                    marginTop={"1rem"}
                    flexDir={["column", "column", "row"]}
                    justifyContent={"space-between"}
                  >
                    <Text maxWidth={["100%", "100%", "60%"]}>
                      Project developed to improve management of loyalty cards
                      for a health clinic.
                    </Text>
                  </Flex>
                  <Box marginY={"1.2rem"} color={"grey.100"}>
                    <Link href="https://saudecass.com.br/" target="_blank">
                      Open
                    </Link>
                  </Box>
                </Box>

                <Box paddingX={"10px"} paddingY={"15px"} bgColor={"#5A40A8;"}>
                  <Flex
                    flexDir={["column", "column", "row"]}
                    justifyContent={"space-between"}
                  >
                    <Heading fontSize={"1.2rem"}>Portfolio Website</Heading>
                    <Text>Website</Text>
                  </Flex>
                  <Flex
                    marginTop={"1rem"}
                    flexDir={["column", "column", "row"]}
                    justifyContent={"space-between"}
                  >
                    <Text maxWidth={["100%", "100%", "60%"]}>
                      My portfolio website, developed with Next.js.
                    </Text>
                  </Flex>
                  <Box marginY={"1.2rem"} color={"grey.100"}>
                    <Link
                      href="https://github.com/giordanobraz/my-personal-website"
                      target="_blank"
                    >
                      Open
                    </Link>
                  </Box>
                </Box>

                <Link href="https://github.com/giordanobraz" target="_blank">
                  See More
                </Link>
              </Stack>

              <Box display={["none", "none", "inline"]}>
                <Heading fontSize={"100px"}>
                  PRO
                  <br />
                  JE
                  <br />
                  CTS
                </Heading>
              </Box>
            </>
          )}
        </Stack>
      </section>
    </Box>
  );
}
