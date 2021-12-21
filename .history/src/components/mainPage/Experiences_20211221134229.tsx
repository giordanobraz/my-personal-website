import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

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
          <Text fontSize={"1.2rem"}>
            Graduado em Sistemas de Informação, desenvolvo projetos web de
            pequeno e médio porte utilizando <b>Angular</b>, <b>React</b> e{" "}
            <b>Node</b>.
          </Text>

          <Box borderLeft={"4px solid"} borderColor={"purple.500"}>
            <Text fontSize={"1rem"} marginLeft={"10px"}>
              10/2021 - Atualmente
            </Text>
          </Box>

          <Box paddingX={"10px"} paddingY={"15px"} bgColor={"grey.700"}>
            <Flex
              flexDir={["column", "column", "row"]}
              justifyContent={"space-between"}
            >
              <Heading fontSize={"1.2rem"}>Wipro do Brasil</Heading>
              <Text>Dev back-end</Text>
            </Flex>
            <Flex
              marginTop={"1rem"}
              flexDir={["column", "column", "row"]}
              justifyContent={"space-between"}
            >
              <Text maxWidth={"40%"}>Desenvolvimento back-end em Node.</Text>
              <Box align="center" justifyContent="center">
                <Image src="/images/logo_node.svg" alt="Node" />
              </Box>
            </Flex>
          </Box>
          <Box borderLeft={"4px solid"} borderColor={"purple.500"}>
            <Text fontSize={"1rem"} marginLeft={"10px"}>
              Fev 2020 - Mar 2021
            </Text>
          </Box>

          <Box paddingX={"10px"} paddingY={"15px"} bgColor={"grey.700"}>
            <Flex
              flexDir={["column", "column", "row"]}
              justifyContent={"space-between"}
            >
              <Heading fontSize={"1.2rem"}>Devplus Desenvolvimento</Heading>
              <Text>Dev Fullstack</Text>
            </Flex>
            <Flex
              marginTop={"1rem"}
              flexDir={["column", "column", "row"]}
              justifyContent={"space-between"}
            >
              <Text maxWidth={"40%"}>
                Desenvolvimento de sistemas, sites e apps.
              </Text>
              <Stack 
              flexDir="row"
              spacing={1}
              >
                <Image src="/images/logo_node.svg" alt="Node" />
                <Image src="/images/logo_angular.svg" alt="Angular" />
                <Image src="/images/logo_react.svg" alt="React" />
              </Stack>
            </Flex>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
