import { Box, Flex, Heading, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";

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
          align={"center"}
          margin="0 auto"
          maxWidth={1120}
        >
          <Stack flexDir={"column"} spacing={5} maxW={"500px"}>          

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
              <Text maxWidth={["100%", "100%", "40%"]}>
                Desenvolvimento back-end em Node.
              </Text>
              <Box justifyContent="center" marginTop={"10px"}>
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
              <Text maxWidth={["100%", "100%", "40%"]}>
                Desenvolvimento de sistemas, sites e apps.
              </Text>
              <HStack flexDir="row" spacing={1} marginTop={"10px"}>
                <Image src="/images/logo_node.svg" alt="Node" />
                <Image src="/images/logo_angular.svg" alt="Angular" />
                <Image src="/images/logo_react.svg" alt="React" />
              </HStack>
            </Flex>
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
