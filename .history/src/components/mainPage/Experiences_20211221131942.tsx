import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

export default function ExperienceSection() {
  return (
    <section>
      <Stack
        flexDir={["column", "column", "row"]}
        paddingY={["1rem", "1rem", "4.18rem"]}
        paddingX={"1rem"}
        justifyContent={"space-between"}
        margin="0 auto"
        maxWidth={1120}
      >
        <Box>
          <Heading fontSize={["36px", "100px"]}>
            EXPE
            <br />
            RIÊN
            <br />
            CIAS
          </Heading>
        </Box>

        <Stack
          flexDir={"column"}
          spacing={5}
          textAlign={["center", "justify"]}
          maxW={"450px"}
        >
          <Text>
            Graduado em Sistemas de Informação, desenvolvo projetos web de
            pequeno e médio porte utilizando <b>Angular</b>, <b>React</b> e{" "}
            <b>Node</b>.
          </Text>

          <Text fontSize={"1rem"}>10/2021 - Atualmente</Text>

          <Box paddingX={"10px"} paddingY={"15px"} bgColor={"grey.700"}>
            <HStack justifyContent={"space-between"}>
              <Text>Wipro do Brasil</Text>
              <Text>Desenvolvedor back-end</Text>
            </HStack>
            <HStack
              marginTop={"1rem"}
              justifyContent={"space-between"}
              align={"center"}
            >
              <Text>Desenvolvimento back-end em Node.</Text>
              <Box>
                <Image src="/images/logo_node.svg" alt="Node" />
              </Box>
            </HStack>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
