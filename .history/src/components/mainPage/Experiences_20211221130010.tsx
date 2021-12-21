import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export default function ExperienceSection() {
  return (
    <section>
      <Stack
        flexDir={["column", "column", "row"]}
        paddingY={["1rem", "1rem", "4.18rem"]}
        paddingX={"1rem"}
        justifyContent={"space-between"}
        align={"center"}
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
        <Box>
          <Stack
            flexDir={"column"}
            spacing={5}
            textAlign={["center", "justify"]}
          >
            <Text>
              Graduado em Sistemas de Informação, desenvolvo projetos web de
              pequeno e médio porte utilizando Angular, React e Node.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </section>
  );
}
