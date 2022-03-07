import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { PriceHistory } from "../../pages/gpu";
import ProductChart from "./ProductChartModal";

const IMAGE = "/images/gpu_card.jpg";

interface IProductsProps {
  id: string;
  itemIndex: any;
  title: string;
  price: number;
  updatedPrice: number;
  priceHistory: PriceHistory[];
}

export default function Product({
  title,
  price,
  updatedPrice,
  priceHistory,
}: IProductsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(null);

  function handleOpenModal(index: any) {
    setIndex(index);
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        title={title}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
            alt={"Image."}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            textOverflow={"ellipsis"}
            color={"grey.400"}
          >
            {title.substring(0, 50) + `...`}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"} color={"grey.300"}>
              {updatedPrice < price
                ? new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(updatedPrice)
                : new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(price)}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              {updatedPrice < price
                ? new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(price)
                : ``}
            </Text>
          </Stack>
          <Button onClick={(e) => handleOpenModal(index)}>
            <SearchIcon />
          </Button>
          <ProductChart
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            priceHistory={priceHistory}
            title={title}
            openModal={(e) => handleOpenModal(index)}
          />
        </Stack>
      </Box>
    </Center>
  );
}
