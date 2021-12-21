import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";

export default function ProjectSection() {
  return (
    <Box
      backgroundImage={"/images/bg_purple.svg"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={["center", "center", "center", "center", "initial"]}
      h={"737px"}
    >
      <section>
        <Stack
          flexDir={["column", "column", "row"]}
          paddingY={["5rem", "5rem", "10rem"]}
          paddingX={"1rem"}
          justifyContent={"space-between"}
          margin="0 auto"
          maxWidth={1120}
          align={"center"}
        >
          <Box display={["inline", "inline", "none"]}>
            <Heading fontSize={"2.25rem"}>Projetos</Heading>
          </Box>
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
                <Heading fontSize={"1.2rem"}>API Básica</Heading>
                <Text>API REST Node</Text>
              </Flex>
              <Flex
                marginTop={"1rem"}
                flexDir={["column", "column", "row"]}
                justifyContent={"space-between"}
              >
                <Text maxWidth={["100%", "100%", "60%"]}>
                  API feita em NestJS com finalidade de estudo. Autenticação
                  JWT, CRUD básico e MongoDB.
                </Text>
              </Flex>
              <Box marginY={"1.2rem"} color={"grey.100"}>
                <Link
                  href="https://github.com/giordanobraz/nestjs-api"
                  target="_blank"
                >
                  Acessar
                </Link>
              </Box>
            </Box>

            <Link
              href="/downloads/Giordano_Bruno_Curriculo.pdf"
              target="_blank"
            >
              Ver currículo completo
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
        </Stack>
      </section>
    </Box>
  );
}
