import { Box, Heading, Image, Stack } from "@chakra-ui/react";

export default function ProjectSection() {
  return (
    <Box
      backgroundImage={"/images/bg_purple.svg"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
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
          <Box>
            <Image
              src="/images/avatar_gio.png"
              alt="Avatar do Giordano"
              width={"100%"}
            />
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
