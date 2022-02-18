import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { useLocale } from "../../hooks/useLocale";

export default function IntroductionSection() {
  const locale = useLocale();

  return (
    <section id="top" style={{ paddingTop: "4.37rem" }}>
      <Stack
        paddingTop={"4.37rem"}
        paddingX={"1rem"}
        background={
          "linear-gradient(180deg, #7553DB 0%, rgba(32, 32, 36, 0) 100%)"
        }
      >
        <Flex
          maxWidth={"1120px"}
          width={"100%"}
          flexDir={["column", null, "row"]}
          justifyContent={"space-around"}
          align={"center"}
          margin="0 auto"
        >
          <Box>
            <Image
              src="/images/avatar_gio.png"
              alt="Avatar do Giordano"
              width={"100%"}
            />
          </Box>
          <Box>
            <Stack
              flexDir={"column"}
              spacing={5}
              textAlign={["center", "justify"]}
            >
              {locale === "pt-BR" ? (
                <>
                  <Heading fontSize={["36px", "72px"]}>
                    Oi, eu sou o <br /> Giordano!
                  </Heading>
                  <Text fontSize={["18px", "24px"]}>
                    Desenvolvedor Fullstack no Brasil{" "}
                    <ReactCountryFlag
                      countryCode="BR"
                      svg
                      aria-label="Brazil"
                      title="Brazil"
                      style={{
                        width: "1.5em",
                        height: "0.8em",
                      }}
                    />
                  </Text>
                </>
              ) : (
                <>
                  <Heading fontSize={["36px", "72px"]}>
                    Hi, I&apos;m <br />
                    Giordano!
                  </Heading>
                  <Text fontSize={["18px", "24px"]}>
                    Fullstack Developer From Brazil{" "}
                    <ReactCountryFlag
                      countryCode="BR"
                      svg
                      aria-label="Brazil"
                      title="Brazil"
                      style={{
                        width: "1.5em",
                        height: "0.8em",
                      }}
                    />
                  </Text>
                </>
              )}
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </section>
  );
}
