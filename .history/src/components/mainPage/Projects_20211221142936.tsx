import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";

export default function ProjectSection() {
  return (
    <Box
      backgroundImage={"/images/bg_purple.svg"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      h={"737px"}
    >
      <section>
        <Stack
          flexDir={["column", "column", "row"]}
          paddingY={["1rem", "1rem", "10rem"]}
          paddingX={"1rem"}
          justifyContent={"space-between"}
          
          margin="0 auto"
          maxWidth={1120}
        >
          <Stack flexDir={"column"} spacing={5} maxW={"600px"}>
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
              <Box
              marginY={"1.2rem"}
              >
                <Link>Acessar</Link>
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
              <Box
              marginY={"1.2rem"}
              >
                <Link>Acessar</Link>
              </Box>
            </Box>

            <Link>Ver currículo completo</Link>
          </Stack>

          <Box marginBottom={"1.5rem"}>
            <Heading fontSize={"100px"} display={["none", "none", "inline"]}>
              PRO
              <br />
              JE
              <br />
              TOS
            </Heading>
            <Heading
              fontSize={"2.25rem"}
              display={["inline", "inline", "none"]}
            >
              Projetos
            </Heading>
          </Box>
        </Stack>
      </section>
    </Box>
  );
}
