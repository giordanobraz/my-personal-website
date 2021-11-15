import { Flex, Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import imgWelcome from "../../../public/images/welcome.jpg";

interface Category {
  name: string;
  slug: string;
}

interface HeroPost {
  title: string;
  description: string;
  content: string;
  slug: string;
  image: string;
  author: string;
  category: Category[];
}

export default function HeroSection({ post }) {
  return (
    <Flex
      flexDir={["column", "row"]}
      w="100%"
      style={{ gap: "16px" }}
      bgColor="#262626"
      padding="10px"
      marginBottom={["15px", "68px"]}
    >
      <Image src={imgWelcome.src} alt="Welcome" maxH={230} />
      <Box display="flex" flexDir="column" marginX={1} style={{ gap: "22px" }}>
        <Text fontSize={14} color="grey.500">
          04 de Novembro de 2021
        </Text>
        <Text fontSize={26}>Seja muito bem-vindo! Aceita algo para beber?</Text>
        <Text fontSize={18} color="grey.500" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a
          eleifend dui, ut semper risus. Mauris laoreet semper lectus elementum
          commodo. Proin facilisis magna in nunc fringilla, quis malesuada dui
          faucibus. Curabitur metus ante, maximus malesuada rutrum ac, mollis a
          orci.
        </Text>
      </Box>
    </Flex>
  );
}
