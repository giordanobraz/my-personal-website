import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box, Heading,
  Link,
  SimpleGrid,
  Stack
} from "@chakra-ui/layout";
import content from "../../portfolio_data.json";

interface PortfolioItem {
  image: string;
  title: string;
  info: string;
  link: string;
}

export default function PortfolioItems() {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 3]}>
        {content.map((item: PortfolioItem) => (
          <Box
            w={"full"}
            bg={"black.400"}
            boxShadow={"2xl"}
            p={6}
            overflow={"hidden"}
            key={item.title}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={item.image}
                layout={"fill"}
                loading={"lazy"}
                objectFit={"cover"}
              />
            </Box>
            <Stack cursor="pointer" spacing={5}>
              <Heading
                fontSize={"26px"}
                fontWeight={"normal"}
                maxW="25ch"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                title={item.title}
              >
                {item.title}
              </Heading>
              <Link href={item.link} _hover={{ textDecor: "none" }}>
                <Button
                  fontWeight={"normal"}
                  mt={6}
                  w={"full"}
                  bg={"blue.700"}
                  color={"white"}
                  rounded={"xl"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Abrir Projeto
                </Button>
              </Link>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
