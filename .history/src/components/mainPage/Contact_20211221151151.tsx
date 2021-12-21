import { Box, Heading, Stack } from "@chakra-ui/react";

export default function ContactSection() {
  return (
    <section id="intro">
      <Stack
      flexDir={["column", "column", "row"]}
      paddingY={"4.18rem"}
      paddingX={"1rem"}
      justifyContent={"space-between"}      
      align={"center"}
      margin="0 auto"
      maxWidth={1120}  
    >
      <Box>
      <Box marginBottom={"1.5rem"}>
          <Heading fontSize={"100px"} display={["none", "none", "inline"]}>
            CON
            <br />
            TA
            <br />
            TO
          </Heading>
          <Heading fontSize={"2.25rem"} display={["inline", "inline", "none"]}>
            Contato
          </Heading>
        </Box>
      </Box>
      <Box>
       
      </Box>
    </Stack>
    </section>
  )
}