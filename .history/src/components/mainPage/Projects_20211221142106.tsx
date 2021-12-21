import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

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
          <Box 
          paddingX={"10px"} 
          paddingY={"15px"} 
          bgColor={"grey.700"}
          maxWidth={"500px"}
          >
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
              <Text>
                Desenvolvimento back-end em Node.
              </Text>
              <Box justifyContent="center" marginTop={"10px"}>
                <Image src="/images/logo_node.svg" alt="Node" />
              </Box>
            </Flex>
          </Box>

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
